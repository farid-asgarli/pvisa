import { Radio } from "antd";
import Title from "antd/lib/typography/Title";
import { useRouter } from "next/router";
import { useState } from "react";
import Locales from "../../../localization/locales";
import { Button } from "../../../models/components/Button";
import { Card } from "../../../models/components/Card";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Visa.module.css";

const Visa: typeof Card.Visa = ({
  className,
  itemProps: { sub_types, title, visa_status },
  children,
  queryParams,
  ...props
}) => {
  const [selected, setSelected] = useState<VisaType.SubType>(sub_types[0]);

  const { push, locale } = useRouter();

  const handleSelect = (value: number) => {
    const itemToFind = sub_types.find((x) => x.id === value);
    if (itemToFind) setSelected(itemToFind);
  };

  const calcTotalFee = (fees: VisaType.Fee[]) =>
    fees
      .flatMap((x) => x.value)
      .reduce((accumulator, curr) => accumulator + curr);

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Heading}>
        <Title className={styles.Title} level={3}>
          {title}
        </Title>
        {visa_status === "evisa" && <div className={styles.Badge}>e-visa</div>}
      </div>
      <div className={styles.Selection}>
        <Radio.Group
          onChange={(e) => handleSelect(e.target.value)}
          value={selected.id}
          className={styles.RadioGroup}
        >
          {sub_types.map(({ id, title }) => (
            <Radio
              key={id}
              className={concatStyles(
                styles.RadioInput,
                selected.id === id && styles.Active
              )}
              value={id}
            >
              {title}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <div className={styles.Details}>
        <div className={styles.PriceInfo}>
          <Title className={styles.Title} level={2}>
            {selected.fees[0].currency} {calcTotalFee(selected.fees)}
          </Title>
          <div className={styles.Info}>
            / {Locales[locale as DefaultLocale].VisaCard_TotalFee}
          </div>
        </div>
        <div className={styles.Tip}>
          {Locales[locale as DefaultLocale].VisaCard_Tip}
        </div>
      </div>
      <div className={styles.Bottom}>
        <Title level={5} className={styles.Title}>
          {Locales[locale as DefaultLocale].VisaCard_ProcessingDetails}
        </Title>
        <div className={styles.Content}>
          <dl className={styles.Row}>
            <dt className={styles.Label}>
              {
                Locales[locale as DefaultLocale]
                  .VisaCard_ProcessingDetails_AsFastAs
              }
            </dt>
            <dd className={styles.Value}>{selected.processing}</dd>
          </dl>
          <dl className={styles.Row}>
            <dt className={styles.Label}>
              {
                Locales[locale as DefaultLocale]
                  .VisaCard_ProcessingDetails_DurationOfStay
              }
            </dt>
            <dd className={styles.Value}>{selected.validity}</dd>
          </dl>
        </div>
        <Button.Primary
          onClick={() =>
            push(
              `/apply/step-two/params?${new URLSearchParams(
                queryParams
              )}&type=${selected.id}`
            )
          }
          className={styles.Button}
        >
          {Locales[locale as DefaultLocale].Buttons_Visa}
        </Button.Primary>
      </div>
    </div>
  );
};
export default Visa;
