import { Form } from "../../../models/components/Form";
import { concatStyles } from "../../../utils/Concatinator";
import { Select as AntSelect } from "antd";
import styles from "./Select.module.css";
const Select: typeof Form.Select = ({ className, ...props }) => {
  return (
    <div className={concatStyles(styles.Body, className)}>
      <AntSelect {...props} />
    </div>
  );
};
export default Select;
