import { Divider } from "antd";
import { useEffect, useState } from "react";
import { Button } from "../../../../models/components/Button";
import { Heading } from "../../../../models/components/Heading";
import { Apply } from "../../../../models/containers/Apply";
import { concatStyles } from "../../../../utils/Concatinator";
import { Form as AntForm } from "antd";
import { StringExtensions } from "../../../../extensions/String";
import { useFormManagement } from "../../../../utils/FormManagement";
import { t } from "../../../../utils/Localization";
import styles from "./ApplicationForm.module.css";
import agent from "../../../../api/agent";
import SuccessfulSubmission from "../../../Popups/SuccessfulSubmission/SuccessfulSubmission";

const ApplicationForm: typeof Apply.StepThree.ApplicationForm = ({
  className,
  children,
  orderData,
  applicantOrderNumber,
  templateVariables,
  formData,
  ...props
}) => {
  const [formDisabled, setFormDisabled] = useState<boolean>(
    formData?.is_filled ?? false
  );
  const [dataSubmitted, setDataSubmitted] = useState<boolean>(false);
  const [successPopupVisible, setSuccessPopupVisible] =
    useState<boolean>(false);
  const { formInstance, mapFields, mapSubmittedForm, addFile } =
    useFormManagement(
      {
        fileInput: "secondary",
      },
      formDisabled
    );

  useEffect(() => {
    for (const key in formData?.data) {
      formData?.data?.[key]
        .filter((x) => x.field_type === "file")
        .forEach((field) => {
          if (field.filled_value)
            addFile(field.filled_value as any, field.key, "BASE");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderData]);

  function mapFieldGroups(
    data: FormsType.FieldSet,
    groupNamesToInclude: string[] = [],
    namePrefix: string
  ) {
    const elements: React.ReactElement[] = [];
    for (const groupName in data) {
      if (
        groupNamesToInclude.length === 0 ||
        (groupNamesToInclude.length > 0 &&
          groupNamesToInclude.find((x) => groupName.includes(x)))
      ) {
        const fields = data[groupName];
        elements.push(
          <div key={groupName} className={styles.Group}>
            <Heading.Secondary className={styles.Heading}>
              {groupName}
            </Heading.Secondary>
            <div
              className={concatStyles(
                styles.InputCollection,
                groupName === "Attachment" && styles.FullRow
              )}
            >
              {mapFields(fields, namePrefix, (f) => ({
                width: f.width === 6 ? "48%" : "100%",
              }))}
            </div>
          </div>
        );
      }
    }
    return elements;
  }

  const handleSubmit = async (val: any) => {
    const finalFormValues = await mapSubmittedForm(val);

    const dataToSubmit: FormsType.StepThreeRequest = {
      fields: finalFormValues[0],
      form_type: orderData?.order_type!,
      is_filled: true,
      submit: true,
      submitted_form_id: orderData?.submitted_form_id!,
    };

    try {
      await agent.Forms.SubmitFieldsStepThree(dataToSubmit);
      setFormDisabled(true);
      setDataSubmitted(true);
      setSuccessPopupVisible(true);
    } catch (error) {}
  };

  const handleSaveAsDraft = async () => {
    const fieldValues = formInstance.getFieldsValue();
    const finalFormValues = await mapSubmittedForm(fieldValues);
    const dataToSubmit: FormsType.StepThreeRequest = {
      fields: finalFormValues[0],
      form_type: orderData?.order_type!,
      is_filled: false,
      submit: true,
      submitted_form_id: orderData?.submitted_form_id!,
    };
    try {
      await agent.Forms.SubmitFieldsStepThree(dataToSubmit);
      setFormDisabled(false);
      setDataSubmitted(false);
    } catch (error) {}
  };

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      {successPopupVisible && (
        <SuccessfulSubmission
          buttonProps={{
            onClick: () => setSuccessPopupVisible(false),
          }}
        />
      )}
      <div className={styles.ApplicantHeadingWrapper}>
        <Heading.Secondary className={styles.ApplicantHeading}>
          {t("step_three_applicant", templateVariables)} #{applicantOrderNumber}{" "}
          (
          {orderData?.applicant?.name +
            StringExtensions.WhiteSpace +
            orderData?.applicant?.surname}
          )
        </Heading.Secondary>
      </div>
      <div className={styles.FormContent}>
        <div className={styles.Heading}>
          <h2 className={styles.Title}>{orderData?.details?.visa_type}</h2>
          <h3 className={styles.Subtitle}>
            {orderData?.details?.service_title}
          </h3>
        </div>
        <Divider />
        <AntForm
          onFinish={async (val) => await handleSubmit(val)}
          form={formInstance}
          className={styles.Inputs}
        >
          {formData?.data && (
            <div className={styles.Fields}>
              {mapFieldGroups(formData.data, [], "BASE")}
            </div>
          )}
          <div className={styles.Bottom}>
            <Button.Primary
              htmlType="button"
              onClick={handleSaveAsDraft}
              className={concatStyles(styles.Button, styles.DraftButton)}
              disabled={dataSubmitted || formDisabled}
            >
              {t("buttons_save_as_draft", templateVariables)}
            </Button.Primary>
            <Button.Primary
              onClick={() => formInstance.submit()}
              className={concatStyles(
                styles.Button,
                (dataSubmitted || formDisabled) && styles.SuccessButton
              )}
              disabled={dataSubmitted || formDisabled}
            >
              {dataSubmitted || formDisabled
                ? t("buttons_thank_you", templateVariables)
                : t("buttons_confirm", templateVariables)}
            </Button.Primary>
          </div>
        </AntForm>
      </div>
    </div>
  );
};

export default ApplicationForm;
