import { GetStaticProps, NextPage } from "next";
import React from "react";
import agent from "../../api/agent";
import { Page } from "../../models/components/Page";
import { Home } from "../../models/containers/Home";
import { BackgroundColors } from "../../static/PageColors";
import { getCurrentLocale } from "../../utils/CommonContent";
import { t } from "../../utils/Localization";
import { mapPageHead } from "../../utils/PageHeadMapper";

const Index: NextPage<Pages.Home.PageProps & CommonPageProps> = ({
  routerProps,
  templateVariables,
  usefulLinks,
  applicationSteps,
  countries,
  currentCountry,
  ...props
}) => {
  return (
    <Page.Item backgroundColor={BackgroundColors.Blue}>
      {mapPageHead(t("nav_menu_home", templateVariables))}
      <Home.Base
        routerProps={routerProps}
        links={usefulLinks}
        steps={applicationSteps}
        templateVariables={templateVariables}
        countries={countries}
        currentCountry={currentCountry}
      />
    </Page.Item>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Pages.Home.PageProps> = async (
  context
) => {
  const locale = getCurrentLocale(context.locale);

  const usefulLinks = await agent.CommonContent.UsefulLinks(locale?.id!);
  const applicationSteps = await agent.CommonContent.ApplicationSteps(
    locale?.id!
  );

  const currentCountry = agent.GeoLocation.LocateCurrentCountry();

  return {
    props: {
      applicationSteps: applicationSteps.application_steps,
      usefulLinks: usefulLinks.usefull_links,
      currentCountry,
    },
  };
};
