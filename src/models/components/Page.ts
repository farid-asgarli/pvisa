import React from "react";
import Item from "../../components/Page/Item/Item";
import { BackgroundColors } from "../../static/PageColors";

type PageComponent = {
  Item: React.FC<
    {
      backgroundColor?: Indefinable<BackgroundColors | string>;
    } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  >;
};

export const Page: PageComponent = {
  Item,
};
