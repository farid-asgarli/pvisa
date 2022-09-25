import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Error from "../containers/Error/Error";
import Locales from "../localization/locales";
import { Page } from "../models/components/Page";
import { HttpErrorTypes } from "../static/EntityTypes";

const Index: NextPage<CommonPageProps> = ({ routerProps }) => {
  return (
    <Page.Item>
      <Head>
        <title>
          {Locales[routerProps.locale].Error_ServerError_Title} &nbsp;| Pick
          Visa
        </title>
      </Head>
      <Error
        type={HttpErrorTypes.InternalServerError}
        routerProps={routerProps}
      />
    </Page.Item>
  );
};

export default Index;
