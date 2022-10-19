import StepOneContent from "../../containers/Apply/StepOne/StepOne";
import StepTwoContent from "../../containers/Apply/StepTwo/StepTwo";
import StepThreeContent from "../../containers/Apply/StepThree/Content/Content";
import ApplicantStatusContent from "../../containers/Apply/StepThree/ApplicantStatus/ApplicantStatus";
import ApplicationFormContent from "../../containers/Apply/StepThree/ApplicationForm/ApplicationForm";

type ApplyComponent = {
  StepOne: DivElement<{
    items: Indefinable<VisaType.Base[]>;
    queryParams: Pages.Apply.StepOne.QueryParams;
    templateVariables: CommonContent.TemplateVariable[];
  }>;
  StepTwo: DivElement<{
    details: AttributesType.AttributeResponse;
    eligibilityFields: Nullable<FormsType.DetailsResponse>;
    queryParams: Pages.Apply.StepTwo.QueryParams;
    formsData: FormsType.DetailsResponse;
    filterResponse: Nullable<CombinationsType.FilterResponse>;
    templateVariables: CommonContent.TemplateVariable[];
  }>;
  StepThree: {
    Content: DivElement<{
      orderData: OrdersType.MultipleOrderResponse["data"];
      templateVariables: CommonContent.TemplateVariable[];
    }>;
    ApplicantStatus: DivElement<{
      applicants: Applicant[];
      changeCurrentApplicant: React.Dispatch<
        React.SetStateAction<{
          currentFormId?: Indefinable<string>;
          applicantOrderNumber: number;
        }>
      >;
    }>;
    ApplicationForm: DivElement<{
      orderData: Indefinable<OrdersType.SingleOrder>;
      applicantOrderNumber: number;
      formData: FormsType.StepThreeResponse;
      templateVariables: CommonContent.TemplateVariable[];
    }>;
  };
};

type Applicant = {
  content: string;
  orderNumber: number;
  status: OrdersType.ApplicationStatuses;
  form_type: "evisa" | string;
  submitted_form_id: string;
};

export const Apply: ApplyComponent = {
  StepOne: StepOneContent,
  StepTwo: StepTwoContent,
  StepThree: {
    Content: StepThreeContent,
    ApplicantStatus: ApplicantStatusContent,
    ApplicationForm: ApplicationFormContent,
  },
};
