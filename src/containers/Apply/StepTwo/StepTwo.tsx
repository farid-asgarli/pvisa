/* eslint-disable @next/next/no-img-element */
import { Checkbox, Divider } from "antd";
import { MinusCircle, PlusCircle, User, X } from "phosphor-react";
import React, { useState } from "react";
import OrderSummary from "../../../components/OrderSummary/OrderSummary";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { Banner } from "../../../models/components/Banner";
import { Button } from "../../../models/components/Button";
import { Collapse } from "../../../models/components/Collapse";
import { Heading } from "../../../models/components/Heading";
import { ActionButtonColors } from "../../../static/ActionButtonColors";
import { concatStyles } from "../../../utils/Concatinator";
import { Form as AntForm } from "antd";
import { Apply } from "../../../models/containers/Apply";
import styles from "./StepTwo.module.css";
import { useFormManagement } from "../../../utils/FormManagement";
import { v4 as uuid } from "uuid";
import { Popups } from "../../../models/containers/Popups";
import agent from "../../../api/agent";
import { StringExtensions } from "../../../extensions/String";
import { t } from "../../../utils/Localization";
import { getAppConfig } from "../../../utils/CommonContent";

const StepTwo: typeof Apply.StepTwo = ({
  className,
  children,
  queryParams,
  details,
  formsData,
  eligibilityFields,
  filterResponse,
  templateVariables,
  ...props
}) => {
  const getVisaSubType = (id: number) =>
    filterResponse?.visa_types
      .flatMap((x) => x.sub_types)
      .find((x) => x.id === +id);

  const [paymentMethod, setPaymentMethod] = useState<number>(0);

  const [additionalFields, setAdditionalFields] = useState<string[]>([]);

  const [nextPageUrl, setNextPageUrl] = useState<string>();
  const [promoCode, setPromoCode] = useState<string>(StringExtensions.Empty);

  const { country } = getAppConfig();

  const { formInstance, mapFields, mapSubmittedForm, resetFields } =
    useFormManagement();

  const removeField = (key: string) =>
    setAdditionalFields((prev) => prev.filter((p) => p !== key));

  const addField = () => setAdditionalFields((p) => [...p, uuid()]);

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
              {mapFields(fields, namePrefix)}
            </div>
          </div>
        );
      }
    }
    return elements;
  }

  const paymentChangeHandler = (key?: string | string[]) =>
    !Array.isArray(key) && key !== undefined && setPaymentMethod(Number(key));

  const submitForm = async (val: any) => {
    const fields: FormsType.Field[] = [];

    for (const key in formsData.data) {
      fields.push(...formsData.data[key]);
    }

    const formValues = await mapSubmittedForm(val);

    const findByDescription = (desc: string) =>
      fields?.find((x) => x?.description === desc)?.key;

    const emailField = findByDescription("email");
    const nameField = findByDescription("name");
    const surnameField = findByDescription("surname");
    const phoneField = findByDescription("phone");

    const finalValues = {
      client: {
        email: emailField ? formValues?.[0]?.[emailField] : null,
        name: nameField ? formValues?.[0]?.[nameField] : null,
        surname: surnameField ? formValues?.[0]?.[surnameField] : null,
        phone: phoneField ? formValues?.[0]?.[phoneField] : null,
      },
      data: formValues.map((singleFormValues) => ({
        service_id: +queryParams.type,
        fields: singleFormValues,
        is_evisa: !!getVisaSubType(queryParams.type)?.evisa_id,
        residency: queryParams.residence,
      })),
      currency: details.fee_attrs[0].currency,
      source: "pickvisa.com",
      promocode: promoCode,
      payment_method: paymentMethod === 0 ? "stripe" : "coinbase",
      payment_type: "online",
    };
    try {
      const result = await agent.Forms.SubmitFieldsStepTwo(finalValues);
      window.open(result.data.data.payment_url);
      window.localStorage.setItem("order_id", `${result.data.data.order_id}`);
      resetFields();
      setNextPageUrl(`/apply/step-three/${result.data.data.order_id}`);
    } catch (error) {}
  };

  return (
    <div
      suppressHydrationWarning
      className={concatStyles(styles.Body, className)}
      {...props}
    >
      <Popups.Eligibility
        serviceId={queryParams.type}
        formData={eligibilityFields.data}
        templateVariables={templateVariables}
      />
      {nextPageUrl && (
        <Popups.SuccessfulPayment
          templateVariables={templateVariables}
          href={nextPageUrl}
        />
      )}
      <Banner.Visa
        heading={`${country.name} Visa`}
        imageUrl="/assets/images/banner/2.png"
        flagImage={
          <img
            alt="flag"
            style={{
              position: "relative",
              width: 50,
              marginLeft: 20,
            }}
            src="/assets/images/flags/turkey.svg"
          />
        }
        queryParams={queryParams}
      />
      <Wrapper>
        <div className={styles.MainContent}>
          <div className={styles.Left}>
            <AntForm
              onFinish={async (val) => await submitForm(val)}
              className={styles.Form}
              form={formInstance}
            >
              {formsData?.data && mapFieldGroups(formsData.data, [], "BASE")}
              {/* {mapFields(data as any, "Base")} */}
              {/* <AntForm.Item name={"demo"}>
                <Form.Choice
                  checkedChildren={"Yes"}
                  unCheckedChildren={"No"}
                  description={
                    "Countries, USA, UK or Ireland? E-visas are not accepted as supporting documents."
                  }
                />
              </AntForm.Item> */}
              <div className={styles.Group}>
                <Heading.Secondary className={styles.Heading}>
                  {t("step_two_payment_title", templateVariables)}
                </Heading.Secondary>
                <span className={styles.Legend}>
                  {t("step_two_payment_legend", templateVariables)}
                </span>
                <Collapse.WithSelect.Wrapper
                  className={styles.PaymentOptions}
                  onChange={paymentChangeHandler}
                  activeKey={paymentMethod}
                >
                  <Collapse.WithSelect.Item
                    key={0}
                    checked={paymentMethod === 0}
                    header={
                      <div className={styles.PaymentHeader}>
                        <img
                          alt="stripe"
                          src="/assets/images/payment/stripe.png"
                        />
                        <img
                          className={styles.Icons}
                          alt="stripe"
                          src="/assets/images/payment/stripe-icons.png"
                        />
                      </div>
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t(
                          "step_two_payment_stripe_desc",
                          templateVariables
                        ),
                      }}
                    />
                  </Collapse.WithSelect.Item>
                  <Collapse.WithSelect.Item
                    key={1}
                    checked={paymentMethod === 1}
                    header={
                      <div className={styles.PaymentHeader}>
                        <img
                          alt="coinbase"
                          src="/assets/images/payment/coinbase.png"
                        />
                        <img
                          className={styles.Icons}
                          alt="coinbase"
                          src="/assets/images/payment/coinbase-icons.png"
                        />
                      </div>
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t(
                          "step_two_payment_coinbase_desc",
                          templateVariables
                        ),
                      }}
                    />
                  </Collapse.WithSelect.Item>
                </Collapse.WithSelect.Wrapper>
                <Checkbox className={styles.Checkbox}>
                  {t("step_two_privacy_policy", templateVariables)}
                </Checkbox>
              </div>
              <Divider />
              <Button.Extended
                leftContent={<User />}
                rightContent={<PlusCircle />}
                color={ActionButtonColors.Primary}
                onClick={() => addField()}
              >
                {t("buttons_add_another_person", templateVariables)}
              </Button.Extended>
              {additionalFields.map((x) => (
                <div key={x}>
                  {formsData?.data &&
                    mapFieldGroups(
                      formsData.data,
                      ["Personal", "Attachment"],
                      x
                    )}
                  <Button.Extended
                    leftContent={<User />}
                    rightContent={<MinusCircle />}
                    color={ActionButtonColors.Danger}
                    onClick={() => removeField(x)}
                    type="button"
                  >
                    {t("buttons_remove_person", templateVariables)}
                  </Button.Extended>
                </div>
              ))}
              <div className={styles.Bottom}>
                <Button.Primary
                  htmlType="submit"
                  className={styles.SubmitButton}
                >
                  {t("buttons_continue_to_payment", templateVariables)}
                </Button.Primary>
              </div>
            </AntForm>
          </div>
          <div className={styles.Right}>
            <OrderSummary
              promoCode={promoCode}
              setPromoCode={setPromoCode}
              filterResponse={filterResponse}
              visaSubType={getVisaSubType(queryParams.type)}
              templateVariables={templateVariables}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default StepTwo;
