import { ButtonProps } from "antd";
import { ButtonHTMLAttributes } from "react";
import Extended from "../../components/Button/Extended/Extended";
import Link from "../../components/Button/Link/Link";
import Primary from "../../components/Button/Primary/Primary";
import Secondary from "../../components/Button/Secondary/Secondary";
import { ActionButtonColors } from "../../static/ActionButtonColors";

type ButtonComponent = {
  Primary: React.FC<ButtonProps>;
  Secondary: React.FC<ButtonProps>;
  Link: React.FC<ButtonProps>;
  Extended: React.FC<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> & {
      color?: ActionButtonColors;
      leftContent?: React.ReactNode;
      rightContent?: React.ReactNode;
    }
  >;
};

export const Button: ButtonComponent = {
  Primary,
  Secondary,
  Link,
  Extended,
};
