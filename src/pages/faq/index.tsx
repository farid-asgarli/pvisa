import { GetStaticProps, NextPage } from "next";
import React from "react";
import agent from "../../api/agent";
import { Page } from "../../models/components/Page";
import { FAQ } from "../../models/containers/FAQ";
import { getCurrentLocale } from "../../utils/CommonContent";
import { t } from "../../utils/Localization";
import { mapPageHead } from "../../utils/PageHeadMapper";

const Index: NextPage<CommonPageProps & Pages.FAQ.PageProps> = ({
  data,
  templateVariables,
}) => {
  return (
    <Page.Item>
      {mapPageHead(t("nav_menu_faq", templateVariables))}
      <FAQ.Base
        templateVariables={templateVariables}
        items={data.faq_categories}
      />
    </Page.Item>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Pages.FAQ.PageProps> = async (
  context
) => {
  const languageId = getCurrentLocale(context.locale)?.id;

  try {
    const response = await agent.CommonContent.FAQCategories(languageId!);

    return {
      props: {
        data: response,
      },
      revalidate: 10 * 60 /** seconds */,
    };
  } catch (error) {
    return { notFound: true };
  }
};
