// eslint-disable-next-line no-undef
module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironmentOptions: { url: `http://localhost` },
};
