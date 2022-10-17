import { InputNumber } from "antd";
import { Form } from "../../../models/components/Form";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Number.module.css";
const Number: typeof Form.Number = ({ className, icon: Icon, ...props }) => (
  <InputNumber className={concatStyles(styles.Body, className)} {...props} />
);
export default Number;
