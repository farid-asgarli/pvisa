import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { SampleData } from "../../data/data";
import Locales from "../../localization/locales";
import { Page } from "../../models/components/Page";
import { About } from "../../models/containers/About";

const Index: NextPage<CommonPageProps> = ({
  routerProps: { locale },
  ...props
}) => {
  return (
    <Page.Item>
      <Head>
        <title>{Locales[locale].Nav_Menu_AboutUs} &nbsp;| Pick Visa</title>
      </Head>
      <About.Content />
      <About.Honours items={SampleData.Certificates} />
    </Page.Item>
  );
};

export default Index;
