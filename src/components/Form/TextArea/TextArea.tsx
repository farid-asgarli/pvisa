import { Input } from "antd";
import { Form } from "../../../models/components/Form";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./TextArea.module.css";

const TextArea: typeof Form.TextArea = ({ className, ...props }) => {
  return (
    <Input.TextArea
      className={concatStyles(styles.Body, className)}
      {...props}
    />
  );
};
export default TextArea;
