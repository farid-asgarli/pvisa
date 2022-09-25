import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import agent from "../../../api/agent";
import { Page } from "../../../models/components/Page";
import { Apply } from "../../../models/containers/Apply";
import { BackgroundColors } from "../../../static/PageColors";

const StepThree: NextPage<
  CommonPageProps & Pages.Apply.StepThree.PageProps
> = ({ orderData, ...props }) => {
  return (
    <Page.Item backgroundColor={BackgroundColors.Blue}>
      <Head>
        <title>Step Three | Pick Visa</title>
      </Head>
      <Apply.StepThree.Content orderData={orderData} />
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
