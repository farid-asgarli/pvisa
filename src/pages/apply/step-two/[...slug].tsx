import { GetServerSideProps, NextPage } from "next";
import React from "react";
import agent from "../../../api/agent";
import { Page } from "../../../models/components/Page";
import { Apply } from "../../../models/containers/Apply";
import { BackgroundColors } from "../../../static/PageColors";
import { AxiosError } from "axios";
import { mapPageHead } from "../../../utils/PageHeadMapper";

const StepTwo: NextPage<CommonPageProps & Pages.Apply.StepTwo.PageProps> = ({
  details,
  queryParams,
  formsData,
  eligibilityFields,
  filterResponse,
  templateVariables,
}) => {
  return (
    <Page.Item suppressHydrationWarning backgroundColor={BackgroundColors.Blue}>
      {mapPageHead("Step Two")}
      {typeof window !== "undefined" && (
        <Apply.StepTwo
          details={details}
          queryParams={queryParams}
          formsData={formsData}
          eligibilityFields={eligibilityFields}
          filterResponse={filterResponse}
          templateVariables={templateVariables}
        />
      )}
    </Page.Item>
  );
};

export default StepTwo;

export const getServerSideProps: GetServerSideProps<
  Emptiable<Pages.Apply.StepTwo.PageProps>
> = async (context) => {
  const query = context.query as unknown as Pages.Apply.StepTwo.QueryParams;
  const { from, residence, to, type } = query;

  if (!from || !to || !residence || !type)
    return {
      notFound: true,
    };

  const props: Pages.Apply.StepTwo.PageProps =
    {} as Pages.Apply.StepTwo.PageProps;

  try {
    const eligibilityFields = await agent.Forms.GetEvisaFieldsStepOne(
      query.type
    );

    props.eligibilityFields = eligibilityFields;
  } catch (error) {
    props.eligibilityFields = null;
  }

  try {
    // TODO : Change example id (139185) back to `query.type`

    const attrResponse = await agent.Combinations.Attributes(query.type);
    let formsData: FormsType.DetailsResponse;

    if (attrResponse.data.evisa_id && attrResponse.data.evisa_id !== null) {
      formsData = await agent.Forms.GetEvisaFieldsStepTwo(query.type);
    } else {
      formsData = await agent.Forms.GetRegularFieldsStepTwo();
    }

    const visaTypeDetails = await agent.Combinations.Filter({
      citizen_of: query.from.toUpperCase(),
      travel_to: query.to.toUpperCase(),
      resident_of: query.residence.toUpperCase(),
    });

    props.details = attrResponse.data;
    props.queryParams = query;
    props.formsData = formsData;
    props.filterResponse = visaTypeDetails;

    return {
      props,
    };
  } catch (error) {
    const { response } = error as AxiosError<AttributesType.AttributeResponse>;
    if (response?.status === 404)
      return {
        notFound: true,
      };
    return {
      redirect: "/500",
      props: {},
    };
  }
};
