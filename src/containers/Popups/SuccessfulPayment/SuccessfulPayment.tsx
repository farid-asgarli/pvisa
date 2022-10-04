import { Modal } from "antd";
import { useRouter } from "next/router";
import { CheckSquareOffset } from "phosphor-react";
import React from "react";
import { Button } from "../../../models/components/Button";
import { Popups } from "../../../models/containers/Popups";
import { concatStyles } from "../../../utils/Concatinator";
import { t } from "../../../utils/Localization";
import styles from "./SuccessfulPayment.module.css";
const SuccessfulPayment: typeof Popups.SuccessfulPayment = ({
  children,
  className,
  href,
  templateVariables,
  ...props
}) => {
  const { push } = useRouter();

  return (
    <Modal visible={true} closable={false} footer={false}>
      <div className={concatStyles(styles.Body, className)} {...props}>
        <div className={styles.Head}>
          <CheckSquareOffset weight="duotone" className={styles.Icon} />
          <h3 className={styles.Title}>
            {t("successful_payment_title", templateVariables)}
          </h3>
        </div>
        <div className={styles.Bottom}>
          <h4 className={styles.Title}>
            {t("successful_payment_subtitle", templateVariables)}
          </h4>
          <p className={styles.Content}>
            {t("successful_payment_content", templateVariables)}
          </p>
          <Button.Primary onClick={() => push(href)} className={styles.Button}>
            {t("buttons_fill_form", templateVariables)}
          </Button.Primary>
        </div>
      </div>
    </Modal>
  );
};
export default SuccessfulPayment;
