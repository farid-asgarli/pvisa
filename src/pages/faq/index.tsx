import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import agent from "../../api/agent";
import Locales from "../../localization/locales";
import { Page } from "../../models/components/Page";
import { FAQ } from "../../models/containers/FAQ";

const Index: NextPage<CommonPageProps & Pages.FAQ.PageProps> = ({
  routerProps: { locale },
  data,
  ...props
}) => {
  return (
    <Page.Item>
      <Head>
        <title>{Locales[locale].Nav_Menu_FAQ} &nbsp;| Pick Visa</title>
      </Head>
      <FAQ.Base items={data.faq_categories} />
    </Page.Item>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Pages.FAQ.PageProps> = async (
  context
) => {
  const languageId = (context.locale as DefaultLocale) === "en" ? 2 : 1;

  try {
    const response = await agent.CommonContent.FAQCategories(languageId);

    return {
      props: {
        data: response,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};
