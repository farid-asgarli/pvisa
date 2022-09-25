import { SelectProps } from "antd";
import Primary from "../../components/SearchBar/Primary/Primary";
import Secondary from "../../components/SearchBar/Secondary/Secondary";

type OptionProps = {
  title: string;
  value: string;
};

type SearchBarComponent = {
  Primary: DivElement;
  Secondary: DivElement<{
    optionItems?: OptionProps[];
    title: string;
    value: any;
    onSelectChange(val: string): void;
  }>;
};

export const SearchBar: SearchBarComponent = {
  Primary,
  Secondary,
};
