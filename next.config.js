const withLess = require("next-with-less");

const appSettings = require("./appInitializer");

const { runtimeConfig, localizationConfig, lessLoaderConfig } = appSettings;

module.exports = withLess({
  lessLoaderOptions: lessLoaderConfig,
  i18n: localizationConfig,
  publicRuntimeConfig: runtimeConfig,
});
