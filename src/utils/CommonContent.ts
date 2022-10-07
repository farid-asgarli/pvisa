import getConfig from "next/config";
import agent from "../api/agent";

/**
 * Retrieves application public runtime configuration.
 * @returns Runtime configuration.
 */
function getAppConfig(): GlobalConfiguration.ProjectConfig {
  const {
    publicRuntimeConfig: { appConfig },
  } = getConfig();

  return appConfig;
}

/**
 * Server-side function that retrieves static template variables.
 * @param locale Runtime context's locale.
 * @returns Static template variables.
 */

async function getTemplateVariables(
  locale: Indefinable<string>
): Promise<CommonContent.TemplateVariable[]> {
  const language = getCurrentLocale(locale);

  const { template_variables } = await agent.CommonContent.TemplateVariables(
    language?.id!
  );

  return template_variables;
}

/**
 * Retrieves the current locale of the application.
 * @param locale Runtime context's locale.
 * @returns Locale with `id` and `short_code`.
 */
function getCurrentLocale(
  locale: Indefinable<string>
): Indefinable<GlobalConfiguration.Language> {
  const language = getAppConfig().languages.find(
    (x) => x.short_code === locale
  );
  return language;
}

function getStaticContentByKey(
  key: string,
  staticContents: CommonContent.StaticContent[]
): Indefinable<CommonContent.StaticContent> {
  return staticContents?.find((x) => x?.unique_identifier === key);
}

function getCallToActionByKey(
  key: string,
  callToActions: CommonContent.CallToAction[]
): Indefinable<CommonContent.CallToAction> {
  return callToActions?.find((x) => x?.unique_identifier === key);
}

export {
  getAppConfig,
  getTemplateVariables,
  getCurrentLocale,
  getStaticContentByKey,
  getCallToActionByKey,
};
