/* eslint-disable @next/next/no-img-element */
import { Select } from "antd";
import { useRouter } from "next/router";
import { useMemo } from "react";
import agent from "../../../api/agent";
import { UrlCollection } from "../../../globals";
import { Banner } from "../../../models/components/Banner";
import { Heading } from "../../../models/components/Heading";
import { SearchBar } from "../../../models/components/SearchBar";
import { concatStyles } from "../../../utils/Concatinator";
import Overlay from "../../Overlay/Overlay";
import Wrapper from "../../Wrapper/Wrapper";
import styles from "./Visa.module.css";
const Visa: typeof Banner.Visa = ({
  className,
  children,
  imageUrl,
  heading,
  flagImage,
  queryParams,
  style,
  ...props
}) => {
  const router = useRouter();
  const countries = useMemo(() => agent.AceMock.All(), []);
  const handleParamsChange = (type: "from" | "residence", val: string) => {
    const urlToRedirect =
      type === "from"
        ? `from=${val}&residence=${queryParams.residence}`
        : `from=${queryParams.from}&residence=${val}`;

    router.push(`/apply/step-one/params?to=${queryParams.to}&${urlToRedirect}`);
  };

  const optionItems = useMemo(
    () =>
      countries?.map((c) => {
        const keyword = c.details
          .find((c) => c.locale === router.locale)
          ?.keywords.concat();

        return (
          <Select.Option key={c.alpha_3_code} value={c.alpha_3_code}>
            <span key={keyword}>{c.display_name}</span>
            {c.flag_icon && UrlCollection.ACEIMAGEURL && (
              <img
                alt={c.display_name}
                className={styles.FlagImage}
                src={UrlCollection.ACEIMAGEURL + c.flag_icon}
              />
            )}
          </Select.Option>
        );
      }),
    [countries, router.locale]
  );

  return (
    <div
      className={concatStyles(styles.Body, className)}
      style={{
        backgroundImage: `url(${imageUrl})`,
        ...style,
      }}
      {...props}
    >
      <Overlay />
      <Wrapper>
        {heading && (
          <Heading.Banner
            elementsToHighlight={[0]}
            additionalContent={flagImage}
          >
            {heading}
          </Heading.Banner>
        )}

        <div className={styles.CountryPicks}>
          <SearchBar.Secondary
            title="I am a citizien of"
            className={styles.SearchBar}
            optionItems={optionItems}
            value={queryParams?.from.toUpperCase()}
            onSelectChange={(val) => handleParamsChange("from", val)}
          />
          <SearchBar.Secondary
            title="Resided in"
            className={styles.SearchBar}
            optionItems={optionItems}
            value={queryParams?.residence.toUpperCase()}
            onSelectChange={(val) => handleParamsChange("residence", val)}
          />
        </div>
      </Wrapper>
    </div>
  );
};
export default Visa;
