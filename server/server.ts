import express from "express";
import gzip from "express-static-gzip";
import UserAgent from "express-useragent";
import fs from "fs";
import config from "./config";

export function init() {
  console.log("Starting backend.");

  const svelte = require("../dist/app.js"),
    hash = Date.now().toString(36).toUpperCase();

  fs.copyFileSync(process.cwd() + "/dist/index.js", process.cwd() + `/dist/index-${hash}.js`);

  const app = express();
  app.use((req, res, next) => {
    res.setHeader(
      "Cache-Control",
      process.argv.includes(`--watch`) ? "public, max-age=0" : "public, max-age=31536000"
    );
    next();
  });
  app.use(gzip(process.cwd() + "/dist", {}));
  app.use(gzip(process.cwd() + "/static", {}));
  app.get("*", (req, res) => {
    let html = "";
    const { isMobile } = UserAgent.parse(req.header("user-agent"));
    if (process.argv.includes(`--watch`)) {
      delete require.cache[require.resolve("../dist/app.js")];
      html = require("../dist/app.js").default.render({ url: req.url, isMobile }).html;
    } else
      html = svelte.default.render({
        url: req.url,
        isMobile,
      }).html;

    const file = fs.readFileSync(process.cwd() + "/src/index.html").toString();
    res.send(
      file
        .replace("$JSNAME", `index-${hash}.js`)
        .replace("<!--HTML-->", html)
        .replace("/*CSS*/", fs.readFileSync(process.cwd() + "/dist/index.css").toString())
        .replace(/\$pageTitle/g, "Meow's Website")
        .replace(/\$pageDescription/g, "My personal website for projects and tools.")
    );
  });
  app.listen(config.port, () => {
    console.log(`Server is online on port ${config.port}.`);
  });
}
