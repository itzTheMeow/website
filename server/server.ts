import brotli from "brotli";
import express from "express";
import gzip from "express-static-gzip";
import UserAgent from "express-useragent";
import fs from "fs";
import path from "path";
import config from "./config";

export function init() {
  console.log("Starting backend.");

  const dist = path.join(process.cwd(), "dist"),
    svelte = require("../dist/app.js"),
    hash = Date.now().toString(36).toUpperCase();

  fs.symlinkSync(path.join(dist, "index.js"), path.join(dist, `index-${hash}.js`));

  console.log("Compressing...");
  fs.readdirSync(dist).forEach((f) => {
    if (f.endsWith(".js") || f.endsWith(".css") || f.endsWith(".ttf")) {
      const compressed = brotli.compress(fs.readFileSync(path.join(dist, f)), {
        quality: 11,
        mode: f.endsWith(".ttf") ? 2 : 1,
      });
      if (compressed) fs.writeFileSync(path.join(dist, `${f}.br`), compressed);
    }
  });
  console.log("Compression complete!");

  const app = express();
  app.use((req, res, next) => {
    res.setHeader(
      "Cache-Control",
      process.argv.includes(`--watch`) ? "public, max-age=0" : "public, max-age=31536000"
    );
    next();
  });
  app.use(gzip(process.cwd() + "/dist", { enableBrotli: !process.argv.includes(`--watch`) }));
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
