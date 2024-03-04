// https://github.com/solidjs/solid-docs-next/blob/main/vite.config.ts
import solid from "solid-start/vite";
 //import solidPlugin from "solid-start/vite";
// import solidPlugin from "vite-plugin-solid";

//import vite from "solid-start/vite";
//import vercel from "solid-start-vercel";
//import node from 'solid-start-node'
import { defineConfig } from "vite";
import remarkShikiTwoslash from "remark-shiki-twoslash";
import remarkGfm from "remark-gfm";
import mdx from "@mdx-js/rollup";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
// import node from "solid-start-node";
import { nodeTypes } from "@mdx-js/mdx";
//const adapter = process.env.GITHUB_ACTIONS ? node() : netlify();
//const colorScheme = colors.neutral;
//import devtools from 'solid-devtools/vite'


export default defineConfig({
  resolve: {
    alias: {
      components: '/src/components',
      data: '/src/data',
      links: '../data/linklists'
    }
  },
  plugins: [
  /*  solidPlugin({
      babel: {
        plugins: [
          [
            "@locator/babel-jsx/dist",
            {
              env: "development",
            },
          ],
        ],
      },
    }), */
    {
      // ...(await import('@mdx-js/rollup')).default({
      ...mdx({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        rehypePlugins: [rehypeSlug, [rehypeRaw, {passThrough: nodeTypes }]],
        remarkPlugins: [
          remarkGfm,
          [
            remarkShikiTwoslash.default,
            {
              disableImplicitReactImport: true,
              includeJSDocInHover: true,
              // theme: "css-variables",
              // themes: ["github-light", "github-dark"],
            //  themes: ["github-light"],
              themes: ["css-variables"],
              defaultOptions: {
                lib: ["dom", "es2015"],
              },
              defaultCompilerOptions: {
                allowSyntheticDefaultImports: true,
                esModuleInterop: true,
                target: "ESNext",
                module: "ESNext",
                lib: ["dom", "es2015"],
                jsxImportSource: "solid-js",
                jsx: "preserve",
                types: ["vite/client"],
                paths: {
                  "~/*": ["./src/*"],
                },
              },
            },
          ],
        ],
      }),
      enforce: "pre",
    },
    {
      name: "twoslash-fix-lsp-linebreaks",
      transform: (code, id) => {
        if (id.endsWith(".md") || id.endsWith(".mdx")) {
          return {
            code: code.replace(/lsp="([^"]*)"/g, (match, p1) => {
              return `lsp={\`${p1.replaceAll("`", `\\\``)}\`}`;
            }),
          };
        }
        return { code };
      },
      enforce: "pre",
    },
  //  devtools({
      /* features options - all disabled by default */
    //  autoname: true, // e.g. enable autoname
    //}),
   
    solid({
   //   adapter: node,
      extensions: [".mdx", ".md"]
     // ssr: false  // for three js
    //  adapter: vercel({ prerender: true }),
    }),
  ],
});
