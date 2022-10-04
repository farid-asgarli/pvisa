//#region Types
/** @type {import('next').NextConfig} */
/** @type {import('next-with-less')} */
//#endregion Types

const configFileName = "config.json";
const envFileName = ".env.local";

//#region Modules

const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
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
const pathToConfigFile = path.join(__dirname, configFileName);

if (fs.existsSync(pathToConfigFile)) {
  const appConfigFile = fs.readFileSync(pathToConfigFile).toString();
  if (!appConfigFile)
    throw "\nConfiguration file was either not found or empty. Application terminated.\n";

  try {
    const appConfig = JSON.parse(appConfigFile);

    runtimeConfig["appConfig"] = appConfig;

    //#region Localization
    const languages = appConfig?.languages?.map((x) => x?.short_code);

    if (!languages || languages.length === 0)
      throw "\nNo language configuration was found. Make sure to include a list of languages first. Application terminated.\n";

    const mainLanguage = appConfig?.languages?.find(
      (x) => x?.is_main
    )?.short_code;

    if (!mainLanguage)
      console.warn(
        "\nNo main language was found where '{is_main=true}'. Defaulting to first one.\n"
      );

    localizationConfig["locales"] = languages;
    localizationConfig["defaultLocale"] = mainLanguage ?? languages[0];
    //#endregion Localization
  } catch (error) {
    throw typeof error === "string"
      ? error
      : `\nError occured while parsing configuration file @${pathToConfigFile}. Application terminated.\n`;
  }
}

//#endregion AppConfig

//#region EnvironmentVariables
const pathToEnvFile = path.join(__dirname, envFileName);

if (fs.existsSync(pathToEnvFile)) {
  const envVariablesFile = fs.readFileSync(pathToEnvFile);
  try {
    const envVariables = dotenv.parse(envVariablesFile);
    runtimeConfig["env"] = envVariables;
  } catch (error) {
    throw `\nError occured while parsing environment file @${pathToEnvFile}. Application terminated.\n`;
  }
}

//#endregion EnvironmentVariables

module.exports = {
  runtimeConfig,
  localizationConfig,
  lessLoaderConfig,
};
