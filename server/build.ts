import useAutoprefixer from "autoprefixer";
import esbuild from "esbuild";
import postCssPlugin from "esbuild-style-plugin";
import esbuildSvelte from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";
import useTailwind from "tailwindcss";
import { init } from "./server";

console.log("Building client...");
esbuild
  .build({
    entryPoints: [`./src/index.ts`],
    bundle: true,
    outdir: `./dist`,
    mainFields: ["svelte", "browser", "module", "main"],
    minify: true,
    sourcemap: false,
    splitting: true,
    format: "esm",
    watch: process.argv.includes(`--watch`),
    plugins: [
      esbuildSvelte({
        compilerOptions: { hydratable: true },
        filterWarnings: (w) => !w.code.startsWith("a11y-"),
        preprocess: sveltePreprocess(),
      }),
      postCssPlugin({
        postcss: {
          plugins: [useTailwind, useAutoprefixer],
        },
      }),
    ],
    logLevel: "info",
    target: "es6",
    loader: { ".png": "file", ".ttf": "file" },
  })
  .then(async () => {
    console.log("Building SSR...");
    await esbuild.build({
      entryPoints: ["./src/index.svelte"],
      outfile: "./dist/app.js",
      watch: process.argv.includes(`--watch`),
      format: "cjs",
      sourcemap: false,
      bundle: true,
      plugins: [
        esbuildSvelte({
          compilerOptions: { generate: "ssr" },
          filterWarnings: (w) => !w.code.startsWith("a11y-"),
          preprocess: sveltePreprocess(),
        }),
        postCssPlugin({
          postcss: {
            plugins: [useTailwind, useAutoprefixer],
          },
        }),
      ],
      mainFields: ["svelte", "browser", "module", "main"],
      target: "es6",
    });
    init();
  })
  //@ts-ignore
  .catch((error, location) => {
    console.warn(`Errors: `, error, location);
    process.exit(1);
  });
