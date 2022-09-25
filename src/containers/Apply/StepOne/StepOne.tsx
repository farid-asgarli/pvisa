/* eslint-disable @next/next/no-img-element */
import {
  Splide,
  SplideProps,
  SplideSlide,
  SplideTrack,
} from "@splidejs/react-splide";
import { useRouter } from "next/router";
import { Planet } from "phosphor-react";
import Wrapper from "../../../components/Wrapper/Wrapper";
import Locales from "../../../localization/locales";
import { Banner } from "../../../models/components/Banner";
import { Button } from "../../../models/components/Button";
import { Card } from "../../../models/components/Card";
import { Carousel } from "../../../models/components/Carousel";
import { Apply } from "../../../models/containers/Apply";
import { commonSlideProps } from "../../../static/CommonSlideProps";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./StepOne.module.css";
const StepOne: typeof Apply.StepOne = ({
  className,
  children,
  queryParams,
  items,
  ...props
}) => {
  const slideProps: SplideProps = {
    ...commonSlideProps,
    options: {
      ...commonSlideProps.options,
      perPage: 3,
      gap: 30,
      breakpoints: {
        1200: {
          perPage: 2,
        },
        768: {
          perPage: 1,
          arrows: false,
          pagination: true,
        },
      },
    },
  };

  const { push, locale } = useRouter();

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Banner.Visa
        heading={"Turkey Visa"}
        imageUrl="/assets/images/banner/2.png"
        queryParams={queryParams}
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
      />
      <Wrapper>
        {items ? (
          <div className={styles.Collection}>
            <Splide {...slideProps}>
              <SplideTrack>
                {items.map((o) => (
                  <SplideSlide key={o.id}>
                    <Card.Visa itemProps={o} queryParams={queryParams} />
                  </SplideSlide>
                ))}
              </SplideTrack>
              <Carousel.Buttons
                classes={{
                  arrow: styles.Arrow,
                  leftArrow: styles.ArrowLeft,
                  rightArrow: styles.ArrowRight,
                }}
              />
            </Splide>
          </div>
        ) : (
          <div className={styles.Error}>
            <Planet weight="duotone" className={styles.Icon} />
            <span className={styles.Message}>
              {Locales[locale as DefaultLocale].Error_NoFittingContent}
            </span>
            <Button.Primary className={styles.Button} onClick={() => push("/")}>
              {Locales[locale as DefaultLocale].Nav_Menu_Home}
            </Button.Primary>
          </div>
        )}
      </Wrapper>
    </div>
  );
};
export default StepOne;
