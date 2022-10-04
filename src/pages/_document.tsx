import { Html, Head, Main, NextScript } from "next/document";
import { getAppConfig } from "../utils/CommonContent";

export default function Document() {
  const { logo } = getAppConfig();

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={logo.file} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
