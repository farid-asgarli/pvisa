import { NextPage } from "next";
import React from "react";
import Error from "../containers/Error/Error";
import { Page } from "../models/components/Page";
import { t } from "../utils/Localization";
import { mapPageHead } from "../utils/PageHeadMapper";

const Index: NextPage<CommonPageProps> = ({
  routerProps,
  templateVariables,
}) => {
  return (
    <Page.Item>
      {mapPageHead(t("error_notfound_title", templateVariables))}
      <Error templateVariables={templateVariables} routerProps={routerProps} />
    </Page.Item>
  );
};

export default Index;
