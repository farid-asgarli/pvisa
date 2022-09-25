import { Checkbox, Divider } from "antd";
import { useRouter } from "next/router";
import Locales from "../../localization/locales";
import { Button } from "../../models/components/Button";
import { Form } from "../../models/components/Form";
import { Heading } from "../../models/components/Heading";
import { concatStyles } from "../../utils/Concatinator";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./OrderSummary.module.css";
const OrderSummary: DivElement<{
  filterResponse: Nullable<CombinationsType.FilterResponse>;
  visaSubType: Indefinable<VisaType.SubType>;
  promoCode: string;
  setPromoCode: React.Dispatch<React.SetStateAction<string>>;
}> = ({
  className,
  children,
  filterResponse,
  visaSubType,
  promoCode,
  setPromoCode,
  ...props
}) => {
  const { locale: l } = useRouter();

  const locale = l as DefaultLocale;

  const processingCollection = [
    {
      key: Locales[locale].OrderSummary_Processing_Fee,
      value: filterResponse?.travel_to.name,
    },
    {
      key: Locales[locale].OrderSummary_Processing_Residency,
      value: filterResponse?.resident_of.name,
    },
    {
      key: Locales[locale].OrderSummary_Processing_Destination,
      value: filterResponse?.travel_to.name,
    },
    {
      key: Locales[locale].OrderSummary_Processing_AsFastAs,
      value: visaSubType?.processing,
    },
    {
      key: Locales[locale].OrderSummary_Processing_DurationOfStay,
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
          {Locales[locale].OrderSummary_Title}
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
          <Paragraph>{Locales[locale].OrderSummary_PromoCode}</Paragraph>
          <div className={styles.Form}>
            <Form.Input
              placeholder={Locales[locale].OrderSummary_DiscountCode}
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <Button.Primary>{Locales[locale].Buttons_Apply}</Button.Primary>
          </div>
          <div className={styles.TotalFee}>
            <Heading.Secondary weight="light" size="md">
              {Locales[locale].OrderSummary_TotalFee}
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
          {Locales[locale].OrderSummary_Processing_Title}
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
          {Locales[locale].OrderSummary_GeneralInformation}
        </Heading.Secondary>
        <Paragraph>{visaSubType?.additional_notes}</Paragraph>
      </div>
      <Divider className={styles.Divider} />
      <div className={styles.Documents}>
        <div className={styles.Content}>
          <Heading.Secondary size="sm">
            {Locales[locale].OrderSummary_RequiredDocuments}
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
