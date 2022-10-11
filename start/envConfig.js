const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
/**
 * Initializes environment variables.
 * @param {string} envFileName Name of the `dotenv` environment file.
 * @param {object} runtimeConfig RuntimeConfiguration object to assign `env`.
 */
function initializeEnvConfig(envFileName, runtimeConfig) {
  const pathToEnvFile = path.join(process.cwd(), envFileName);

  if (fs.existsSync(pathToEnvFile)) {
    const envVariablesFile = fs.readFileSync(pathToEnvFile);
    try {
      const envVariables = dotenv.parse(envVariablesFile);
      runtimeConfig["env"] = envVariables;
      return envVariables;
    } catch (error) {
      throw `\nError occured while parsing environment file @${pathToEnvFile}. Application terminated.\n`;
    }
  }
}

module.exports = {
  initializeEnvConfig,
};
