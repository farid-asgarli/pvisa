import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Error from "../containers/Error/Error";
import Locales from "../localization/locales";
import { Page } from "../models/components/Page";

const Index: NextPage<CommonPageProps> = ({ routerProps }) => {
  return (
    <Page.Item>
      <Head>
        <title>
          {Locales[routerProps.locale].Error_NotFound_Title} &nbsp;| Pick Visa
        </title>
      </Head>
      <Error routerProps={routerProps} />
    </Page.Item>
  );
};

export default Index;
