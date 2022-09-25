import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { SampleData } from "../../data/data";
import Locales from "../../localization/locales";
import { Page } from "../../models/components/Page";
import { Home } from "../../models/containers/Home";
import { BackgroundColors } from "../../static/PageColors";

const Index: NextPage<CommonPageProps> = ({ routerProps, ...props }) => {
  return (
    <Page.Item backgroundColor={BackgroundColors.Blue} {...props}>
      <Head>
        <title>
          {Locales[routerProps.locale].Nav_Menu_Home} &nbsp;| Pick Visa
        </title>
      </Head>
      <Home.Base
        routerProps={routerProps}
        links={SampleData.UsefulLinks}
        steps={SampleData.HomeSteps}
      />
    </Page.Item>
  );
};

export default Index;
