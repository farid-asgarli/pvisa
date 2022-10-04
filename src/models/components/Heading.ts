import { TitleProps } from "antd/lib/typography/Title";
import React from "react";
import Banner from "../../components/Heading/Banner/Banner";
import Primary from "../../components/Heading/Primary/Primary";
import Secondary from "../../components/Heading/Secondary/Secondary";

type CommonHeadingProps = TitleProps & {
  elementsToHighlight?: Indefinable<number[]>;
};

type CommonSizeProps = "sm" | "md" | "lg";
type CommonWeightProps = "light" | "medium" | "bold";

type ConditionalAnchor =
  | {
      as?: "anchor";
      href: string;
    }
  | { as?: "title" };

type SecondaryHeadingProps = TitleProps & {
  size?: CommonSizeProps;
  weight?: CommonWeightProps;
} & ConditionalAnchor;

type HeadingComponent = {
  Primary: React.FC<CommonHeadingProps>;
  Secondary: React.FC<SecondaryHeadingProps>;
  Banner: React.FC<
    CommonHeadingProps & {
      additionalContent?: React.ReactNode;
    }
  >;
};

export const Heading: HeadingComponent = {
  Primary,
  Secondary,
  Banner,
};
