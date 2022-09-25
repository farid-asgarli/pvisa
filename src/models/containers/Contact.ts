import ApplicationForm from "../../containers/Contact/ApplicationForm/ApplicationForm";
import Base from "../../containers/Contact/Base/Base";
import Link from "../../containers/Contact/Link/Link";

type ContactComponent = {
  ApplicationForm: DivElement;
  Base: DivElement;
  Link: DivElement<{
    icon: IconType;
    content: string;
    href?: string;
  }>;
};

export const Contact: ContactComponent = {
  ApplicationForm,
  Base,
  Link,
};
