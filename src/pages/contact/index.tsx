import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Page } from "../../models/components/Page";
import { Contact } from "../../models/containers/Contact";
import { t } from "../../utils/Localization";
import { mapPageHead } from "../../utils/PageHeadMapper";

const Index: NextPage<CommonPageProps> = ({ templateVariables }) => {
  return (
    <Page.Item>
      {mapPageHead(t("nav_menu_contacts", templateVariables))}
      <Contact.Base templateVariables={templateVariables} />
    </Page.Item>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};
