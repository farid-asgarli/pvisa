import React from "react";
import { FAQ } from "../../../models/containers/FAQ";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./CategoryButton.module.css";
const CategoryButton: typeof FAQ.CategoryButton = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={concatStyles(styles.Body, className)} {...props}>
      <span className={styles.Content}>{children}</span>
    </button>
  );
};
export default CategoryButton;
