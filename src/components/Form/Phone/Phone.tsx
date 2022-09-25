import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Phone.module.css";
import {
  CountryPhoneInputValue,
  ConfigProvider,
  CountryPhoneInput,
} from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import { Form } from "../../../models/components/Form";
const Phone: typeof Form.Phone = ({
  className,
  children,
  icon: Icon,
  ...props
}) => {
  return (
    <ConfigProvider locale={en}>
      <CountryPhoneInput
        className={concatStyles(styles.Body, className)}
        inline
        addonAfter={Icon ? <Icon /> : undefined}
        {...props}
      />
    </ConfigProvider>
  );
};
export default Phone;
