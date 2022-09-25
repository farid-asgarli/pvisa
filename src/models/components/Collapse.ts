import {
  CollapsePanelProps,
  CollapseProps,
  RadioGroupProps,
  RadioProps,
} from "antd";
import React from "react";
import DefaultItem from "../../components/Collapse/Default/Item/Item";
import WithSelectItem from "../../components/Collapse/WithSelect/Item/Item";
import WithSelectWrapper from "../../components/Collapse/WithSelect/Wrapper/Wrapper";
import Wrapper from "../../components/Collapse/Default/Wrapper/Wrapper";

type CollapseComponent = {
  Default: {
    Wrapper: React.FC<CollapseProps>;
    Item: React.FC<CollapsePanelProps>;
  };
  WithSelect: {
    Wrapper: React.FC<CollapseProps>;
    Item: React.FC<
      CollapsePanelProps & {
        checked: boolean;
      }
    >;
  };
};

export const Collapse: CollapseComponent = {
  Default: {
    Wrapper,
    Item: DefaultItem,
  },
  WithSelect: {
    Item: WithSelectItem,
    Wrapper: WithSelectWrapper,
  },
};
