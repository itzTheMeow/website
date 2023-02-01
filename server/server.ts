import express from "express";
import fs from "fs";
import config from "./config";

export function init() {
  console.log("Starting backend.");

  const svelte = require("../dist/app.js");

  const app = express();
  app.use(express.static(process.cwd() + "/dist"));
  app.get("/robots.txt", (_, res) =>
    res.send(`User-agent: *\,Allow: /\n\nSitemap: https://itsmeow.cat/sitemap.xml`)
  );
  app.get("*", (req, res) => {
    let html = "";
    if (process.argv.includes(`--watch`)) {
      delete require.cache[require.resolve("../dist/app.js")];
      html = require("../dist/app.js").default.render({ url: req.url }).html;
    } else html = svelte.default.render({ url: req.url }).html;

    const file = fs.readFileSync(process.cwd() + "/src/index.html").toString();
    res.send(
      file
        .replace("<!--HTML-->", html)
        .replace("/*CSS*/", fs.readFileSync(process.cwd() + "/dist/index.css").toString())
    );
  });
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}.`);
  });
}
