import { ButtonProps } from "antd";
import Blog from "../../components/Banner/Blog/Blog";
import Bottom from "../../components/Banner/Bottom/Bottom";
import Primary from "../../components/Banner/Primary/Primary";
import Small from "../../components/Banner/Small/Small";
import Visa from "../../components/Banner/Visa/Visa";

type BannerComponent = {
  Bottom: DivElement<{
    imageUrl?: Indefinable<string>;
    href?: Indefinable<string>;
    buttonProps?: Indefinable<ButtonProps>;
  }>;
  Small: BannerComponent["Bottom"];
  Primary: DivElement<{
    imageUrl: string;
    heading?: React.ReactNode;
    templateVariables: CommonContent.TemplateVariable[];
  }>;
  Visa: DivElement<{
    imageUrl: string;
    heading?: React.ReactNode;
    flagImage?: React.ReactNode;
    queryParams: Pages.Apply.StepOne.QueryParams;
  }>;
  Blog: DivElement<{
    items: {
      title?: Indefinable<string>;
      categoryContent?: Indefinable<string>;
      authorContent?: Indefinable<string>;
      dateContent?: Indefinable<Date | string>;
      buttonProps?: Indefinable<ButtonProps>;
      imageUrl?: string;
      url?: string;
    }[];
    locale: string;
    templateVariables: CommonContent.TemplateVariable[];
  }>;
};

export const Banner: BannerComponent = {
  Primary,
  Bottom,
  Visa,
  Blog,
  Small,
};
