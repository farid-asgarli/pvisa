import { Input as AntInput, InputProps } from "antd";
import { Form } from "../../../models/components/Form";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Input.module.css";
const Input: typeof Form.Input = ({ className, icon: Icon, ...props }) => (
  <AntInput
    className={concatStyles(styles.Body, className)}
    addonAfter={Icon ? <Icon /> : undefined}
    {...props}
  />
);
export default Input;
