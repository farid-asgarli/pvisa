import "antd/dist/antd.less";
import "antd-country-phone-input/dist/index.css";
import "@splidejs/react-splide/css";
import "../styles/globals.css";
import "../styles/splide.css";
import "../styles/ant-custom.css";
import type { AppProps } from "next/app";
import { Layout } from "../containers/Layout/Layout";
import useLocalizationPath, {
  LocalizationPath,
} from "../hooks/LocalizationPath";
import {
  getAppConfig,
  getCurrentLocale,
  getTemplateVariables,
} from "../utils/CommonContent";
import { NextPage, NextPageContext } from "next";
import agent from "../api/agent";

const MyApp: NextPage<AppProps<CommonPageProps>> = ({
  Component,
  pageProps,
}) => {
  const { languages } = getAppConfig();

  const routerProps = useLocalizationPath(
    languages.find((x) => x.is_main)?.short_code!
  );
  const pagePropsWithRouting: CommonPageProps & {
    routerProps: RouterProps;
  } = {
    ...pageProps,
    routerProps,
  };

  return (
    <Layout commonPageProps={pagePropsWithRouting}>
      <Component {...pagePropsWithRouting} />
    </Layout>
  );
};

export default MyApp;

MyApp.getInitialProps = async (
  context: NextPageContext & {
    router: LocalizationPath;
  }
) => {
  const templateVariables = await getTemplateVariables(context.router.locale);

  const language = getCurrentLocale(context.router.locale);

  const callToActionsResponse = await agent.CommonContent.CallToActions(
    language?.id!
  );

  const countries = await agent.AceMock.All();

  return {
    pageProps: {
      templateVariables,
      callToActions: callToActionsResponse.call_to_actions,
      countries,
    },
  } as any;
};
