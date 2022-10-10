import Base from "../../containers/Home/Base/Base";
import Steps from "../../containers/Home/Steps/Steps";
import UsefulLinks from "../../containers/Home/UsefulLinks/UsefulLinks";

type HomeComponent = {
  Steps: DivElement<{
    items: CommonContent.ApplicationStep[];
    templateVariables: CommonContent.TemplateVariable[];
  }>;
  UsefulLinks: DivElement<{
    items: CommonContent.UsefulLink[];
  }>;
  Base: DivElement<{
    steps: CommonContent.ApplicationStep[];
    links: CommonContent.UsefulLink[];
    routerProps: RouterProps;
    templateVariables: CommonContent.TemplateVariable[];
    countries: CountryType.Extended[];
    currentCountry: string;
  }>;
};

export const Home: HomeComponent = {
  Steps,
  UsefulLinks,
  Base,
};
