const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  mode: "development",
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".wasm"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.join(__dirname, "crate")
      // forceMode: 'release'
    })
  ]
};
