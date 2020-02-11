import HtmlWebpackPlugin, { Options } from "html-webpack-plugin";
import {
  Configuration as WebpackConfiguration,
  Output,
  RuleSetRule,
} from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

type Configuration = {
  devServer?: WebpackDevServerConfiguration;
} & WebpackConfiguration;

const rules: RuleSetRule[] = [
  {
    exclude: /node_modules/,
    loader: "babel-loader",
    test: /\.(ts|tsx)$/,
  },
];

type P = {
  entry: Configuration["entry"];
  path: Output["path"];
  template: Options["template"];
};

type ConfigurationF = (p: P) => Configuration;
export const base: ConfigurationF = ({ entry, path, template }) => ({
  devServer: {
    historyApiFallback: true,
  },
  entry,
  module: { rules },
  output: {
    filename: "bundle.js",
    path,
    publicPath: "/",
  },
  plugins: [new HtmlWebpackPlugin({ template })],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
});
