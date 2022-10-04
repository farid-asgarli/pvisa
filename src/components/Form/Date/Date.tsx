import { DatePicker } from "antd";
import { Form } from "../../../models/components/Form";
import { concatStyles } from "../../../utils/Concatinator";
import { CalendarBlank } from "phosphor-react";
import styles from "./Date.module.css";
const Date: typeof Form.Date = ({ className, children, ...props }) => (
  <DatePicker
    className={concatStyles(styles.Body, className)}
    suffixIcon={<CalendarBlank />}
    {...props}
  />
);
export default Date;
