import Item from "../../containers/Footer/Item/Item";
import Link from "../../containers/Footer/Link/Link";

type FooterComponent = {
  Item: DivElement<{
    commonPageProps: CommonPageProps;
  }>;
  Link: React.FC<React.LiHTMLAttributes<HTMLLIElement> & { path?: string }>;
};

export const Footer: FooterComponent = {
  Item,
  Link,
};
