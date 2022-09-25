import Base from "../../containers/Home/Base/Base";
import Steps from "../../containers/Home/Steps/Steps";
import UsefulLinks from "../../containers/Home/UsefulLinks/UsefulLinks";

type StepProps = {
  title?: Indefinable<string>;
  content?: Indefinable<string>;
  icon?: Indefinable<IconType>;
};

type LinkProps = {
  href?: string;
  content?: React.ReactNode;
};

type HomeComponent = {
  Steps: DivElement<{
    items: StepProps[];
  }>;
  UsefulLinks: DivElement<{
    items: LinkProps[];
  }>;
  Base: DivElement<{
    steps: StepProps[];
    links: LinkProps[];
    routerProps: RouterProps;
  }>;
};

export const Home: HomeComponent = {
  Steps,
  UsefulLinks,
  Base,
};
