const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').RuleSetRule[]} */
const rules = [
  {
    exclude: /node_modules/,
    loader: "babel-loader",
    test: /\.(ts|tsx)$/,
  },
];

/** @type import('webpack-dev-server').Configuration */
const devServer = {
  historyApiFallback: true,
};

/**
 *
 * @param {Object} obj
 * @param {import('webpack').Configuration["entry"]} obj.entry
 * @param {import('webpack').Output["path"]} obj.path
 * @param {import('html-webpack-plugin').Config["template"]} obj.template
 */
const config = ({ entry, path, template }) => {
  /** @type import('webpack').Configuration */
  return {
    devServer,
    entry,
    module: { rules },
    output: {
      filename: "bundle.js",
      path: path,
      publicPath: "/",
    },
    plugins: [new HtmlWebpackPlugin({ template })],
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
  };
};

module.exports = { config };
