const babelOptions = {
  presets: ["babel-preset-gatsby"],
};

// eslint-disable-next-line no-undef
module.exports = require("babel-jest").default.createTransformer(babelOptions);
