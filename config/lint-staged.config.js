const config = {
  "*.json": ["prettier --write"],
  "*.md": ["prettier --write"],
  "*.yml": ["prettier --write"],
  "*.{ts,tsx}": ["eslint --fix"],
  "*.{tsx}": ["stylelint --fix"],
};

module.exports = config;
