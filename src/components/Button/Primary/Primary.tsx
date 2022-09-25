import { Button } from "antd";
import { Button as ButtonComponent } from "../../../models/components/Button";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Primary.module.css";
const Primary: typeof ButtonComponent.Primary = ({ className, ...props }) => {
  return (
    <Button
      type="primary"
      size="large"
      className={concatStyles(styles.Primary, className)}
      {...props}
    />
  );
};
export default Primary;
