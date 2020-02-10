import path from "path";

import { base } from "./config/webpack.config";

const entry = path.resolve(__dirname, "src");
const template = path.resolve(__dirname, "src/index.html");
const dist = path.resolve(__dirname, "build");

module.exports = base({ dist, entry, template });
