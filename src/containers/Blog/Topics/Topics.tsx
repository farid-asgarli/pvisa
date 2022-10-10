import {
  Splide,
  SplideProps,
  SplideSlide,
  SplideTrack,
} from "@splidejs/react-splide";
import { useRouter } from "next/router";
import React from "react";
import Wrapper from "../../../components/Wrapper/Wrapper";

import { Card } from "../../../models/components/Card";
import { Carousel } from "../../../models/components/Carousel";
import { Heading } from "../../../models/components/Heading";
import { Blog } from "../../../models/containers/Blog";
import { commonSlideProps } from "../../../static/CommonSlideProps";
import { UriGenerator } from "../../../static/UriGenerator";
import { concatStyles } from "../../../utils/Concatinator";
import { t } from "../../../utils/Localization";
import styles from "./Topics.module.css";
const Topics: typeof Blog.Topics = ({
  className,
  children,
  items,
  templateVariables,
  ...props
}) => {
  const slideProps: SplideProps = {
    ...commonSlideProps,
    options: {
      ...commonSlideProps.options,
      perPage: 7,
      gap: 30,
      breakpoints: {
        1440: {
          perPage: 5,
        },
        1300: {
          perPage: 5,
        },
        1200: {
          perPage: 4,
        },
        868: {
          perPage: 3,
        },
        768: {
          perPage: 2,
          arrows: false,
        },
        490: {
          perPage: 1,
        },
      },
    },
  };

  const slideRef = React.useRef<Splide>(null);
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <Heading.Secondary size="lg">
          {t("blog_topics", templateVariables)}
        </Heading.Secondary>
        <div className={styles.Collection}>
          <Splide ref={slideRef} {...slideProps}>
            <SplideTrack>
              {items.map((x, i) => (
                <SplideSlide key={i}>
                  <Card.Topic className={styles.Card} {...x} />
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
      </Wrapper>
    </div>
  );
};
export default Topics;
