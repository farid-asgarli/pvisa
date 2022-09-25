import { Checkbox, Form, Modal } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useRouter } from "next/router";
import React, { useState } from "react";
import agent from "../../../api/agent";
import { Popups } from "../../../models/containers/Popups";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Eligibility.module.css";
const Eligibility: typeof Popups.Eligibility = ({
  children,
  className,
  formData,
  serviceId,
  ...props
}) => {
  type FormSubmitValues = {
    [key: string]: Indefinable<boolean>;
  };
  const [visible, setVisible] = useState<boolean>(
    Object.keys(formData ?? {}).length > 0
  );

  const { push } = useRouter();

  const mapEligibilityChekboxes = (data: FormsType.DetailsResponse["data"]) => {
    const elements: JSX.Element[] = [];
    for (const groupName in data) {
      const fields = data[groupName];

      fields.forEach((y, i) =>
        elements.push(
          <Form.Item
            name={y.key}
            key={i}
            rules={[
              { required: y.required, message: "This field is required" },
            ]}
            valuePropName="checked"
          >
            <Checkbox>{y.title}</Checkbox>
          </Form.Item>
        )
      );
    }
    return elements;
  };

  const [form] = useForm<FormSubmitValues>();

  const handleSubmit = async (
    submitValues: FormSubmitValues,
    apiData: FormsType.DetailsResponse["data"]
  ) => {
    const finalValues: { [key: string]: string | undefined } = {};
    if (apiData) {
      const fields = Object.values(apiData)[0];
      for (const key in submitValues) {
        const fieldToFind = fields.find((x) => x.key === key);
        finalValues[key] =
          submitValues[key] === true
            ? fieldToFind?.options?.find((x) => x.value === "Yes")?.key
            : fieldToFind?.options?.find((x) => x.value === "No")?.key;
      }
    }
    try {
      await agent.Forms.SubmitFieldsStepOne(serviceId, finalValues);
      setVisible(false);
    } catch (error) {}
  };

  return (
    <Modal
      width={635}
      okButtonProps={{
        onClick: form.submit,
      }}
      cancelButtonProps={{
        onClick: () => push("/"),
      }}
      cancelText="Back"
      okText="Complete"
      visible={visible}
      closable={false}
    >
      <div className={concatStyles(styles.Body, className)} {...props}>
        <div className={styles.Ttile}>Eligiblity check</div>
        <div className={styles.Content}>
          <span className={styles.Heading}>
            Mollit velit ea irure velit. Eu nostrud duis voluptate veniam.
          </span>
          <Form
            onFinish={(values) => handleSubmit(values, formData)}
            form={form}
            className={styles.CheckList}
          >
            {mapEligibilityChekboxes(formData)}
          </Form>
        </div>
      </div>
    </Modal>
  );
};
export default Eligibility;
