/* eslint-disable @next/next/no-img-element */
import { Select } from "antd";
import { CaretDown, X } from "phosphor-react";
import { SearchBar } from "../../../models/components/SearchBar";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Secondary.module.css";
const Secondary: typeof SearchBar.Secondary = ({
  className,
  children,
  onSelectChange,
  optionItems,
  title,
  value,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={concatStyles(styles.SelectBar)}>
        <div className={styles.LegendText}>{title}</div>
        <Select
          suffixIcon={<CaretDown className={styles.CaretIcon} weight="bold" />}
          className={concatStyles(
            styles.SelectDropDown,
            "nationality-select-bar",
            "step-two"
          )}
          value={value}
          onChange={onSelectChange}
          filterOption={(input, option) => {
            return (option?.children?.[0].key as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase());
          }}
          optionFilterProp="children[0].key"
          showSearch
        >
          {optionItems}
        </Select>
      </div>
    </div>
  );
};
export default Secondary;
