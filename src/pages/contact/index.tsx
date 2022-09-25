import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Locales from "../../localization/locales";
import { Page } from "../../models/components/Page";
import { Contact } from "../../models/containers/Contact";

const Index: NextPage<CommonPageProps> = ({
  routerProps: { locale },
  ...props
}) => {
  return (
    <Page.Item>
      <Head>
        <title>{Locales[locale].Nav_Menu_Contacts} &nbsp;| Pick Visa</title>
      </Head>
      <Contact.Base />
    </Page.Item>
  );
};

export default Index;
