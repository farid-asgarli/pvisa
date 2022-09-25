import "antd/dist/antd.less";
import "antd-country-phone-input/dist/index.css";
import "aos/dist/aos.css";
import "@splidejs/react-splide/css";
import "../styles/globals.css";
import "../styles/splide.css";
import "../styles/ant-custom.css";
import type { AppProps } from "next/app";
import { Layout } from "../containers/Layout/Layout";
import useLocalizationPath from "../hooks/LocalizationPath";
import { AppWrapper } from "../context/GlobalContext";

function MyApp({ Component, pageProps }: AppProps<CommonPageProps>) {
  const routerProps = useLocalizationPath();
  const pagePropsWithRouting: CommonPageProps & {
    routerProps: RouterProps;
  } = {
    ...pageProps,
    routerProps,
  };
  return (
    <Layout commonPageProps={pagePropsWithRouting}>
      <AppWrapper>
        <Component {...pagePropsWithRouting} />
      </AppWrapper>
    </Layout>
  );
}

export default MyApp;
