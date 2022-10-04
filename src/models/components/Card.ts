import { ButtonProps } from "antd";
import Avatar from "../../components/Card/Avatar/Avatar";
import Blog from "../../components/Card/Blog/Blog";
import BlogWide from "../../components/Card/BlogWide/BlogWide";
import RelatedPost from "../../components/Card/RelatedPost/RelatedPost";
import Step from "../../components/Card/Step/Step";
import Topic from "../../components/Card/Topic/Topic";
import Visa from "../../components/Card/Visa/Visa";
import { SocialNetworks } from "../../static/EntityTypes";
import { PhosphorIconsCollection } from "../../utils/IconMapper";

type CardComponent = {
  Step: DivElement<{
    icon?: Indefinable<PhosphorIconsCollection>;
    title?: Indefinable<string>;
    content?: Indefinable<string>;
  }>;
  Blog: DivElement<{
    title?: Indefinable<string>;
    categoryContent?: Indefinable<string>;
    authorContent?: Indefinable<string>;
    dateContent?: Indefinable<Date | string>;
    buttonProps?: Indefinable<ButtonProps>;
    href: string;
  }>;
  BlogWide: DivElement<{
    title?: Indefinable<string>;
    content?: Indefinable<string>;
    authorContent?: Indefinable<string>;
    dateContent?: Indefinable<Date | string>;
    imageUrl?: Indefinable<string>;
    positionNumber?: Indefinable<string>;
    url?: string;
  }>;
  Topic: DivElement<{
    imageUrl?: Nullable<string>;
    title?: Indefinable<string>;
    href?: Indefinable<string>;
  }>;
  RelatedPost: DivElement<{
    imageUrl?: Indefinable<string>;
    title?: Indefinable<string>;
    categoryContent?: Indefinable<string>;
    categoryContentProps?: Indefinable<React.HTMLAttributes<HTMLDivElement>>;
    href: string;
  }>;
  Avatar: DivElement<{
    imageUrl?: Indefinable<string>;
    title?: Indefinable<string>;
    position?: Indefinable<string>;
    socialNetworkLinks: {
      type: SocialNetworks;
      url?: Indefinable<string>;
    }[];
  }>;
  Visa: DivElement<{
    itemProps: VisaType.Base;
    queryParams: Pages.Apply.StepOne.QueryParams;
    templateVariables: CommonContent.TemplateVariable[];
  }>;
};

export const Card: CardComponent = {
  Step,
  Blog,
  Topic,
  RelatedPost,
  Avatar,
  BlogWide,
  Visa,
};
