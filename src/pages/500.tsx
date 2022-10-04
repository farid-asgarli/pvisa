import { NextPage } from "next";
import React from "react";
import Error from "../containers/Error/Error";
import { Page } from "../models/components/Page";
import { HttpErrorTypes } from "../static/EntityTypes";
import { t } from "../utils/Localization";
import { mapPageHead } from "../utils/PageHeadMapper";

const Index: NextPage<CommonPageProps> = ({
  routerProps,
  templateVariables,
}) => {
  return (
    <Page.Item>
      {mapPageHead(t("error_servererror_title", templateVariables))}
      <Error
        type={HttpErrorTypes.InternalServerError}
        routerProps={routerProps}
        templateVariables={templateVariables}
      />
    </Page.Item>
  );
};

export default Index;
