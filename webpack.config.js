const _path = require("path");
const { config } = require("./config/webpack.config");

const entry = _path.resolve("src");
const template = _path.resolve("src/index.html");
const path = _path.resolve("build");

module.exports = config({ entry, path, template });
