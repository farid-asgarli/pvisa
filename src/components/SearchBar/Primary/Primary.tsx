/* eslint-disable @next/next/no-img-element */
import { Select } from "antd";
import { useRouter } from "next/router";
import { CaretDown } from "phosphor-react";
import { useEffect, useState } from "react";
import agent from "../../../api/agent";
import Locales from "../../../localization/locales";
import { Button } from "../../../models/components/Button";
import { SearchBar } from "../../../models/components/SearchBar";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Primary.module.css";
const Primary: typeof SearchBar.Primary = ({
  className,
  children,
  ...props
}) => {
  const { push, locale } = useRouter();

  const [countries, setCountries] = useState<CountryType.Extended[]>();

  const [selectedCountry, setSelectedCountry] = useState<string>("AZE");

  useEffect(() => {
    agent.AceMock.All().then(setCountries);
  }, [countries]);

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.HelperText}>
        {Locales[locale as DefaultLocale].Apply_Select_Nationality}
      </div>
      <div className={concatStyles(styles.SelectBar)}>
        <Select
          suffixIcon={<CaretDown className={styles.CaretIcon} weight="bold" />}
          className={concatStyles(
            styles.SelectDropDown,
            "nationality-select-bar"
          )}
          value={selectedCountry}
          onChange={setSelectedCountry}
          filterOption={(input, option) =>
            (option!.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          optionFilterProp="children"
          showSearch
        >
          {/* <Select.Option className={styles.SelectOption} value={0}>
            Turkey
            <img
              alt="turkey"
              className={styles.Flag}
              src="/assets/images/flags/turkey.svg"
            />
          </Select.Option> */}
          {countries?.map((c) => (
            <Select.Option
              key={c.alpha_3_code}
              className={styles.SelectOption}
              value={c.alpha_3_code}
            >
              {c.display_name}
            </Select.Option>
          ))}
        </Select>
        <Button.Primary
          onClick={() =>
            push(
              `/apply/step-one/params?to=${selectedCountry.toUpperCase()}&from=AZE&residence=AZE`
            )
          }
        >
          {Locales[locale as DefaultLocale].Buttons_Apply}
        </Button.Primary>
      </div>
    </div>
  );
};
export default Primary;
