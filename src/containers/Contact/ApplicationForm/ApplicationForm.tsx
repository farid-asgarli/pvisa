import { Heading } from "../../../models/components/Heading";
import { Contact } from "../../../models/containers/Contact";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./ApplicationForm.module.css";
import { Form } from "../../../models/components/Form";
import { Envelope, Phone, User } from "phosphor-react";
import TextArea from "antd/lib/input/TextArea";
import { Button } from "../../../models/components/Button";
import { useRouter } from "next/router";
import Locales from "../../../localization/locales";
const ApplicationForm: typeof Contact.ApplicationForm = ({
  className,
  children,
  ...props
}) => {
  const { locale } = useRouter();

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Heading.Secondary>
        {Locales[locale as DefaultLocale].Contact_Form_Title}
      </Heading.Secondary>
      <div className={styles.FormContent}>
        <div className={styles.Inputs}>
          <Form.Input
            icon={User}
            placeholder={
              Locales[locale as DefaultLocale].Contact_Form_Fields_Name
            }
          />
          <Form.Input
            icon={Envelope}
            placeholder={
              Locales[locale as DefaultLocale].Contact_Form_Fields_Email
            }
          />
          <Form.Input
            icon={Phone}
            placeholder={
              Locales[locale as DefaultLocale].Contact_Form_Fields_Phone
            }
          />
          <Form.Input
            icon={Phone}
            placeholder={
              Locales[locale as DefaultLocale].Contact_Form_Fields_Subject
            }
          />
        </div>
        <Form.TextArea
          className={styles.TextArea}
          placeholder={
            Locales[locale as DefaultLocale].Contact_Form_Fields_Comment
          }
          rows={4}
        />
        <div className={styles.Bottom}>
          <Button.Primary className={styles.Button} size="large">
            {Locales[locale as DefaultLocale].Buttons_Confirm}
          </Button.Primary>
        </div>
      </div>
    </div>
  );
};
export default ApplicationForm;
