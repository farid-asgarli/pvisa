import { Button } from "antd";
import { Button as ButtonComponent } from "../../../models/components/Button";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Link.module.css";
const Link: typeof ButtonComponent.Link = ({ className, ...props }) => {
  return (
    <Button
      type="default"
      size="large"
      className={concatStyles(styles.Link, className)}
      {...props}
    />
  );
};
export default Link;
