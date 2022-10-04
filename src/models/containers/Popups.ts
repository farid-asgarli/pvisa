import Eligibility from "../../containers/Popups/Eligibility/Eligibility";
import SuccessfulPayment from "../../containers/Popups/SuccessfulPayment/SuccessfulPayment";

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
};

export const Popups: PopupsComponent = {
  Eligibility,
  SuccessfulPayment,
};
