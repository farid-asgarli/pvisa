import { GetStaticProps, NextPage } from "next";
import React from "react";
import agent from "../../api/agent";
import { SampleData } from "../../data/data";
import { Page } from "../../models/components/Page";
import { About } from "../../models/containers/About";
import { getCurrentLocale } from "../../utils/CommonContent";
import { t } from "../../utils/Localization";
import { mapPageHead } from "../../utils/PageHeadMapper";

const Index: NextPage<Pages.About.PageProps & CommonPageProps> = ({
  templateVariables,
  staticContents,
}) => {
  return (
    <Page.Item>
      {mapPageHead(t("nav_menu_aboutus", templateVariables))}
      <About.Content
        staticContents={staticContents}
        templateVariables={templateVariables}
      />
      <About.Honours items={SampleData.Certificates} />
    </Page.Item>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Pages.About.PageProps> = async (
  context
) => {
  const language = getCurrentLocale(context.locale);

  const response = await agent.CommonContent.StaticContent(language!.id);

  return {
    props: {
      staticContents: response.static_contents,
    },
  };
};
