import { Modal } from "antd";
import { useRouter } from "next/router";
import { CheckSquareOffset } from "phosphor-react";
import React from "react";
import { Button } from "../../../models/components/Button";
import { Popups } from "../../../models/containers/Popups";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./SuccessfulPayment.module.css";
const SuccessfulPayment: typeof Popups.SuccessfulPayment = ({
  children,
  className,
  href,
  ...props
}) => {
  const { push } = useRouter();

  return (
    <Modal visible={true} closable={false} footer={false}>
      <div className={concatStyles(styles.Body, className)} {...props}>
        <div className={styles.Head}>
          <CheckSquareOffset weight="duotone" className={styles.Icon} />
          <h3 className={styles.Title}>Payment succesfully!</h3>
        </div>
        <div className={styles.Bottom}>
          <h4 className={styles.Title}>{`Let's do the final touches`}</h4>
          <p className={styles.Content}>
            We will send you an email with a confirmation of your order soon.Now
            you are just one step away from getting the procedure finalized.
          </p>
          <Button.Primary onClick={() => push(href)} className={styles.Button}>
            Fill in your in form
          </Button.Primary>
        </div>
      </div>
    </Modal>
  );
};
export default SuccessfulPayment;
