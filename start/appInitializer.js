//#region Types
/** @type {import('next').NextConfig} */
/** @type {import('next-with-less')} */
//#endregion Types

const configFileName = "config.json";
const envFileName = ".env.local";

//#region Modules

const { initializeAppConfig } = require("./appConfig");
const { initializeEnvConfig } = require("./envConfig");
const { fetchTemplateVariables } = require("./agent");
//#endregion Modules

const runtimeConfig = {};

const localizationConfig = {
  localeDetection: false,
};

const lessLoaderConfig = {
  lessOptions: {
    modifyVars: {
      "primary-color": "#4383ff",
      "link-color": "#3248e9",
      "border-radius-base": "4px",
    },
  },
};

//#region AppConfig
initializeAppConfig(configFileName, runtimeConfig, localizationConfig);
//#endregion AppConfig

//#region EnvironmentVariables
initializeEnvConfig(envFileName, runtimeConfig);
//#endregion EnvironmentVariables

//#region FetchTemplateVariables
fetchTemplateVariables(
  runtimeConfig.env.COMMONCONTENTURL,
  runtimeConfig.appConfig?.languages?.map((x) => x.id),
  runtimeConfig["appConfig"]
);
//#endregion FetchTemplateVariables

module.exports = {
  runtimeConfig,
  localizationConfig,
  lessLoaderConfig,
};
