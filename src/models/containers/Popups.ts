import { ButtonProps } from "antd";
import Eligibility from "../../containers/Popups/Eligibility/Eligibility";
import SuccessfulPayment from "../../containers/Popups/SuccessfulPayment/SuccessfulPayment";
import SuccessfulSubmission from "../../containers/Popups/SuccessfulSubmission/SuccessfulSubmission";

type PopupsComponent = {
  Eligibility: DivElement<{
    formData: FormsType.DetailsResponse["data"];
    serviceId: number;
    templateVariables: CommonContent.TemplateVariable[];
  }>;
  SuccessfulPayment: DivElement<{
    href: string;
    templateVariables: CommonContent.TemplateVariable[];
  }>;
  SuccessfulSubmission: DivElement<{
    buttonProps?: ButtonProps;
  }>;
};

export const Popups: PopupsComponent = {
  Eligibility,
  SuccessfulPayment,
  SuccessfulSubmission,
};
