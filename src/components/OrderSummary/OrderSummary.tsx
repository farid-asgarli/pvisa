import { Checkbox, Divider } from "antd";
import { useRouter } from "next/router";
import { Button } from "../../models/components/Button";
import { Form } from "../../models/components/Form";
import { Heading } from "../../models/components/Heading";
import { concatStyles } from "../../utils/Concatinator";
import { t } from "../../utils/Localization";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./OrderSummary.module.css";
const OrderSummary: DivElement<{
  filterResponse: Nullable<CombinationsType.FilterResponse>;
  visaSubType: Indefinable<VisaType.SubType>;
  promoCode: string;
  setPromoCode: React.Dispatch<React.SetStateAction<string>>;
  templateVariables: CommonContent.TemplateVariable[];
}> = ({
  className,
  children,
  filterResponse,
  visaSubType,
  promoCode,
  setPromoCode,
  templateVariables,
  ...props
}) => {
  const { locale: l } = useRouter();

  const locale = l as DefaultLocale;

  const processingCollection = [
    {
      key: t("order_summary_frocessing_fee", templateVariables),
      value: filterResponse?.travel_to.name,
    },
    {
      key: t("order_summary_processing_residency", templateVariables),
      value: filterResponse?.resident_of.name,
    },
    {
      key: t("order_summary_processing_destination", templateVariables),
      value: filterResponse?.travel_to.name,
    },
    {
      key: t("order_summary_processing_asfastas", templateVariables),
      value: visaSubType?.processing,
    },
    {
      key: t("order_summary_processing_durationofstay", templateVariables),
      value: visaSubType?.validity,
    },
  ];
  const calcTotalFee = (fees: VisaType.Fee[]) =>
    fees
      .flatMap((x) => x.value)
      .reduce((accumulator, curr) => accumulator + curr);

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Head}>
        <Heading.Secondary>
          {t("order_summary_title", templateVariables)}
        </Heading.Secondary>
        <Heading.Secondary size="sm" weight="light">
          {visaSubType?.title}
        </Heading.Secondary>
      </div>
      <Divider className={styles.Divider} />
      <div className={styles.FeeSummary}>
        <div>
          {visaSubType?.fees.map(({ title, currency, value }) => (
            <div className={styles.ProcessingFee} key={value}>
              <Paragraph>{title}</Paragraph>
              <Heading.Secondary>
                {currency} {value}
              </Heading.Secondary>
            </div>
          ))}
        </div>
        <div className={styles.PromoCode}>
          <Paragraph>
            {t("order_summary_promocode", templateVariables)}
          </Paragraph>
          <div className={styles.Form}>
            <Form.Input
              placeholder={t("order_summary_discountcode", templateVariables)}
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <Button.Primary>
              {t("buttons_apply", templateVariables)}
            </Button.Primary>
          </div>
          <div className={styles.TotalFee}>
            <Heading.Secondary weight="light" size="md">
              {t("order_summary_totalfee", templateVariables)}
            </Heading.Secondary>
            <Heading.Secondary size="lg" weight="bold">
              {visaSubType?.fees &&
                `${visaSubType?.fees[0].currency} ${calcTotalFee(
                  visaSubType?.fees
                )}`}
            </Heading.Secondary>
          </div>
        </div>
      </div>
      <Divider className={styles.Divider} />
      <div className={styles.ProcessingDetails}>
        <Heading.Secondary weight="light" size="sm">
          {t("order_summary_processing_title", templateVariables)}
        </Heading.Secondary>
        <div className={styles.Collection}>
          {processingCollection.map(({ key, value }) => (
            <div key={key} className={styles.KeyValues}>
              <Paragraph>{key}</Paragraph>
              <Heading.Secondary weight="medium" size="sm">
                {value}
              </Heading.Secondary>
            </div>
          ))}
        </div>
      </div>
      <Divider className={styles.Divider} />
      <div className={styles.GeneralInformation}>
        <Heading.Secondary size="sm">
          {t("order_summary_generalinformation", templateVariables)}
        </Heading.Secondary>
        <Paragraph>{visaSubType?.additional_notes}</Paragraph>
      </div>
      <Divider className={styles.Divider} />
      <div className={styles.Documents}>
        <div className={styles.Content}>
          <Heading.Secondary size="sm">
            {t("order_summary_requireddocuments", templateVariables)}
          </Heading.Secondary>
          <div className={styles.Form}>
            {visaSubType?.documents.map((d, i) => (
              <Checkbox checked onChange={() => {}} key={i}>
                {d.title}
              </Checkbox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderSummary;
