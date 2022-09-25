import { ArrowRight } from "phosphor-react";
import React from "react";
import { Carousel } from "../../../models/components/Carousel";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Buttons.module.css";

const Buttons: typeof Carousel.Buttons = ({ classes }) => {
  return (
    <div
      className={concatStyles("splide__arrows", styles.Arrows, classes?.arrows)}
    >
      <button
        className={concatStyles(
          "splide__arrow splide__arrow--prev",
          styles.Arrow,
          styles.ArrowLeft,
          classes?.arrow,
          classes?.leftArrow
        )}
      >
        <ArrowRight weight="bold" className={styles.Icon} />
      </button>
      <button
        className={concatStyles(
          "splide__arrow splide__arrow--next",
          styles.Arrow,
          styles.ArrowRight,
          classes?.arrow,
          classes?.rightArrow
        )}
      >
        <ArrowRight weight="bold" className={styles.Icon} />
      </button>
    </div>
  );
};

export default Buttons;
