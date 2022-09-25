import Eligibility from "../../containers/Popups/Eligibility/Eligibility";
import SuccessfulPayment from "../../containers/Popups/SuccessfulPayment/SuccessfulPayment";

type PopupsComponent = {
  Eligibility: DivElement<{
    formData: FormsType.DetailsResponse["data"];
    serviceId: number;
  }>;
  SuccessfulPayment: DivElement<{
    href: string;
  }>;
};

export const Popups: PopupsComponent = {
  Eligibility,
  SuccessfulPayment,
};
