/* eslint-disable @next/next/no-img-element */
import Wrapper from "../../../components/Wrapper/Wrapper";
import { Banner } from "../../../models/components/Banner";
import { Home } from "../../../models/containers/Home";
import { getAppConfig } from "../../../utils/CommonContent";
import { concatStyles } from "../../../utils/Concatinator";
import { t } from "../../../utils/Localization";
import styles from "./Base.module.css";
const Base: typeof Home.Base = ({
  className,
  children,
  routerProps,
  links,
  steps,
  templateVariables,
  countries,
  currentCountry,
  ...props
}) => {
  const { hero_image } = getAppConfig();

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Banner.Primary
        heading={t("banners_home_text", templateVariables)}
        imageUrl={hero_image.file}
        templateVariables={templateVariables}
        countries={countries}
        currentCountry={currentCountry}
      />
      <img
        alt="plane"
        className={styles.Plane}
        src="/assets/images/vectors/Plane.svg"
      />
      <Wrapper>
        <Home.Steps items={steps} templateVariables={templateVariables} />
        <Home.UsefulLinks items={links} />
      </Wrapper>
    </div>
  );
};
export default Base;
