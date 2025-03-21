import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.tsx",
  output: [
    { file: "dist/index.js", format: "cjs", sourcemap: true },
    { file: "dist/index.mjs", format: "esm", sourcemap: true },
  ],
  external: ["react", "react-dom"],
  plugins: [resolve(), commonjs(), typescript()],
};
