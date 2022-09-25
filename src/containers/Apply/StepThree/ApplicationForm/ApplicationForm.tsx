import { Divider } from "antd";
import { useEffect, useState } from "react";
import { Button } from "../../../../models/components/Button";
import { Heading } from "../../../../models/components/Heading";
import { Apply } from "../../../../models/containers/Apply";
import { concatStyles } from "../../../../utils/Concatinator";
import { Form as AntForm } from "antd";
import styles from "./ApplicationForm.module.css";
import { StringExtensions } from "../../../../extensions/String";
import { useFormManagement } from "../../../../utils/FormManagement";
import agent from "../../../../api/agent";

const ApplicationForm: typeof Apply.StepThree.ApplicationForm = ({
  className,
  children,
  orderData,
  applicantOrderNumber,
  formData,
  ...props
}) => {
  const [formDisabled, setFormDisabled] = useState<boolean>(
    formData?.is_filled ?? false
  );
  const [formType, setFormType] = useState<"submit" | "draft">("draft");
  const [dataSubmitted, setDataSubmitted] = useState<boolean>(false);

  const { formInstance, mapFields, mapSubmittedForm, addFile } =
    useFormManagement(
      {
        fileInput: "secondary",
      },
      formDisabled
    );

  useEffect(() => {
    //TODO Change it to `formData?.data`
    formData?.data
      ?.filter((x) => x.field_type === "file")
      .forEach((field) => {
        if (field.filled_value)
          addFile(field.filled_value as any, field.key, "BASE");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderData]);

  const handleSubmit = async (val: any, isDraft: boolean = true) => {
    const finalFormValues = await mapSubmittedForm(val);

    const dataToSubmit: FormsType.StepThreeRequest = {
      fields: finalFormValues[0],
      form_type: orderData?.order_type!,
      is_filled: !isDraft,
      submit: true,
      submitted_form_id: orderData?.submitted_form_id!,
    };

    // TODO: Uncomment it
    try {
      await agent.Forms.SubmitFieldsStepThree(dataToSubmit);
      setFormDisabled(dataToSubmit.is_filled);
      setDataSubmitted(dataToSubmit.is_filled);
    } catch (error) {}
  };

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.ApplicantHeadingWrapper}>
        <Heading.Secondary className={styles.ApplicantHeading}>
          Applicant #{applicantOrderNumber} (
          {orderData?.applicant?.name +
            StringExtensions.WhiteSpace +
            orderData?.applicant?.surname}
          )
        </Heading.Secondary>
      </div>
      <div className={styles.FormContent}>
        <div className={styles.Heading}>
          <h2 className={styles.Title}>{orderData?.details?.visa_type}</h2>
          <h3 className={styles.Subtitle}>Single entry - 30 day</h3>
        </div>
        <Divider />
        <AntForm
          onFinish={async (val) =>
            await handleSubmit(val, formType === "draft")
          }
          form={formInstance}
          className={styles.Inputs}
        >
          {formData?.data && (
            <div className={styles.Fields}>
              <div className={styles.TextInputs}>
                {mapFields(
                  formData?.data?.filter((x) => x.field_type !== "file"),
                  "BASE"
                )}
              </div>
              <div className={styles.FileInputs}>
                {mapFields(
                  formData?.data?.filter((x) => x.field_type === "file"),
                  "BASE"
                )}
              </div>
            </div>
          )}
          <div className={styles.Bottom}>
            <Button.Primary
              onClick={() => {
                setFormType("draft");
                formInstance.submit();
              }}
              className={concatStyles(styles.Button, styles.DraftButton)}
              disabled={dataSubmitted || formDisabled}
            >
              Save as draft
            </Button.Primary>
            <Button.Primary
              onClick={() => {
                setFormType("submit");
                formInstance.submit();
              }}
              className={concatStyles(
                styles.Button,
                (dataSubmitted || formDisabled) && styles.SuccessButton
              )}
              disabled={dataSubmitted || formDisabled}
            >
              {dataSubmitted || formDisabled ? "Thank you!" : " Submit"}
            </Button.Primary>
          </div>
        </AntForm>
      </div>
    </div>
  );
};

export default ApplicationForm;
