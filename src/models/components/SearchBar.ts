import { SelectProps } from "antd";
import Primary from "../../components/SearchBar/Primary/Primary";
import Secondary from "../../components/SearchBar/Secondary/Secondary";

type OptionProps = {
  title: React.ReactNode;
  value: string;
};

type SearchBarComponent = {
  Primary: DivElement<{
    templateVariables: CommonContent.TemplateVariable[];
    countries: CountryType.Extended[];
  }>;
  Secondary: DivElement<{
    optionItems?: React.ReactNode;
    title: string;
    value: any;
    onSelectChange(val: string): void;
  }>;
};

export const SearchBar: SearchBarComponent = {
  Primary,
  Secondary,
};
