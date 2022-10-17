import { Modal } from "antd";
import { CheckSquareOffset } from "phosphor-react";
import { Button } from "../../../models/components/Button";
import { Popups } from "../../../models/containers/Popups";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./SuccessfulSubmission.module.css";
const SuccessfulSubmission: typeof Popups.SuccessfulSubmission = ({
  className,
  children,
  buttonProps,
  ...props
}) => {
  return (
    <Modal visible={true} closable={false} footer={false}>
      <div className={concatStyles(styles.Body, className)} {...props}>
        <div className={styles.IconWrapper}>
          <CheckSquareOffset weight="duotone" className={styles.Icon} />
        </div>
        <div className={styles.Content}>
          Your application forms have been successfully submited!
        </div>
        <div className={styles.Bottom}>
          <Button.Primary {...buttonProps}>Close</Button.Primary>
        </div>
      </div>
    </Modal>
  );
};
export default SuccessfulSubmission;
