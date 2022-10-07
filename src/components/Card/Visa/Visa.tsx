import { Radio } from "antd";
import Title from "antd/lib/typography/Title";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../../../models/components/Button";
import { Card } from "../../../models/components/Card";
import { concatStyles } from "../../../utils/Concatinator";
import { t } from "../../../utils/Localization";
import styles from "./Visa.module.css";

const Visa: typeof Card.Visa = ({
  className,
  itemProps: { sub_types, title, visa_status },
  children,
  queryParams,
  templateVariables,
  ...props
}) => {
  const nonExistingVisaSubType = "---";
  const [selected, setSelected] = useState<VisaType.SubType>(sub_types[0]);

  const { push } = useRouter();

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
          {sub_types.map((st) => (
            <Radio
              key={st.id}
              className={concatStyles(
                styles.RadioInput,
                selected.id === st.id && styles.Active
              )}
              value={st.id}
            >
              {st.title === nonExistingVisaSubType ? title : st.title}
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
            / {t("visacard_totalfee", templateVariables)}
          </div>
        </div>
        <div className={styles.Tip}>{t("visacard_tip", templateVariables)}</div>
      </div>
      <div className={styles.Bottom}>
        <Title level={5} className={styles.Title}>
          {t("visacard_processing_details", templateVariables)}
        </Title>
        <div className={styles.Content}>
          <dl className={styles.Row}>
            <dt className={styles.Label}>
              {t("visacard_processing_details_asfastas", templateVariables)}
            </dt>
            <dd className={styles.Value}>{selected.processing}</dd>
          </dl>
          <dl className={styles.Row}>
            <dt className={styles.Label}>
              {t(
                "visacard_processing_details_durationofstay",
                templateVariables
              )}
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
          {t("buttons_visa", templateVariables)}
        </Button.Primary>
      </div>
    </div>
  );
};
export default Visa;
