import agent from "../../../api/agent";
import { GetServerSideProps, NextPage } from "next";
import { Page } from "../../../models/components/Page";
import { Apply } from "../../../models/containers/Apply";
import { BackgroundColors } from "../../../static/PageColors";
import { mapPageHead } from "../../../utils/PageHeadMapper";

const StepThree: NextPage<
  CommonPageProps & Pages.Apply.StepThree.PageProps
> = ({ orderData, templateVariables }) => {
  return (
    <Page.Item backgroundColor={BackgroundColors.Blue}>
      {mapPageHead("Step Three")}
      <Apply.StepThree.Content
        orderData={orderData}
        templateVariables={templateVariables}
      />
    </Page.Item>
  );
};

export default StepThree;

export const getServerSideProps: GetServerSideProps<
  Pages.Apply.StepThree.PageProps
> = async (context) => {
  const query = context.query as unknown as Pages.Apply.StepThree.QueryParams;

  try {
    const orderResponse = await agent.Aboena.OrderGroupById(query.id);
    return {
      props: {
        orderData: orderResponse.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};
