import Path from "path";

import { base } from "./config/webpack.config";

const entry = Path.resolve(__dirname, "src");
const template = Path.resolve(__dirname, "src/index.html");
const path = Path.resolve(__dirname, "build");

module.exports = base({ entry, path, template });
