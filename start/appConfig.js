const path = require("path");
const fs = require("fs");
/**
 * Initializes application configuration.
 * @param {string} configFileName Name of the `JSON Configuration` file.
 * @param {object} runtimeConfig RuntimeConfiguration object to assign `appConfig`.
 * @param {object} localizationConfig `i18n` object to assign remaining properties.
 */
function initializeAppConfig(
  configFileName,
  runtimeConfig,
  localizationConfig
) {
  const pathToConfigFile = path.join(process.cwd(), configFileName);

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
}

module.exports = {
  initializeAppConfig,
};
