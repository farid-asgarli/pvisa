import { Button } from "antd";
import { Button as ButtonComponent } from "../../../models/components/Button";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Secondary.module.css";
const Secondary: typeof ButtonComponent.Secondary = ({
  className,
  ...props
}) => {
  return (
    <Button
      type="primary"
      size="large"
      {...props}
      className={concatStyles(styles.Secondary, className)}
    />
  );
};
export default Secondary;
