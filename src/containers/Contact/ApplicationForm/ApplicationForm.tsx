import { Heading } from "../../../models/components/Heading";
import { Contact } from "../../../models/containers/Contact";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./ApplicationForm.module.css";
import { Form } from "../../../models/components/Form";
import { Envelope, Phone, User, LinkSimpleBreak } from "phosphor-react";
import { Button } from "../../../models/components/Button";
import { t } from "../../../utils/Localization";

const ApplicationForm: typeof Contact.ApplicationForm = ({
  className,
  children,
  templateVariables,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Heading.Secondary>
        {t("contact_form_title", templateVariables)}
      </Heading.Secondary>
      <div className={styles.FormContent}>
        <div className={styles.Inputs}>
          <Form.Input
            icon={User}
            placeholder={t("contact_form_fields_name", templateVariables)}
          />
          <Form.Input
            icon={Envelope}
            placeholder={t("contact_form_fields_email", templateVariables)}
          />
          <Form.Input
            icon={Phone}
            placeholder={t("contact_form_fields_phone", templateVariables)}
          />
          <Form.Input
            icon={LinkSimpleBreak}
            placeholder={t("contact_form_fields_subject", templateVariables)}
          />
        </div>
        <Form.TextArea
          className={styles.TextArea}
          placeholder={t("contact_form_fields_comment", templateVariables)}
          rows={4}
        />
        <div className={styles.Bottom}>
          <Button.Primary className={styles.Button} size="large">
            {t("buttons_confirm", templateVariables)}
          </Button.Primary>
        </div>
      </div>
    </div>
  );
};
export default ApplicationForm;
