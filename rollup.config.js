import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import css from "rollup-plugin-css-only";

export default {
  input: "src/index.ts", // Entry point
  output: [
    {
      file: "dist/index.js",
      format: "cjs", // CommonJS format
      sourcemap: true,
    },
    {
      file: "dist/index.es.js",
      format: "esm", // ES module format
      sourcemap: true,
    },
  ],
  plugins: [
    external(), // Exclude peer dependencies
    resolve(), // Resolve external modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({ tsconfig: "./tsconfig.json" }), // Compile TypeScript
    postcss({
      extract: true, // Extracts the CSS to a separate file
      minimize: true, // Minify the CSS
      plugins: [require("tailwindcss"), require("autoprefixer")],
    }),
    terser(), // Minify the output
  ],
  external: ["react", "react-dom"], // Peer dependencies
};
