/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { useGlobalContext } from "../../../context/GlobalContext";
import Locales from "../../../localization/locales";
import { Banner } from "../../../models/components/Banner";
import { Home } from "../../../models/containers/Home";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Base.module.css";
const Base: typeof Home.Base = ({
  className,
  children,
  routerProps: { locale },
  links,
  steps,
  ...props
}) => {
  const { setStepTwoDetails } = useGlobalContext()!;

  useEffect(() => {
    setStepTwoDetails({
      from: "AZZZZZ",
      residence: "ARRRRR",
      to: "SSSSSSSSSSSSS",
    });
  }, []);

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Banner.Primary
        heading={Locales[locale].Banners_Home_Text}
        imageUrl="/assets/images/banner/2.png"
      />
      <img
        alt="plane"
        className={styles.Plane}
        src="/assets/images/vectors/Plane.svg"
      />
      <Wrapper>
        <Home.Steps items={steps} />
        <Home.UsefulLinks items={links} />
      </Wrapper>
    </div>
  );
};
export default Base;
