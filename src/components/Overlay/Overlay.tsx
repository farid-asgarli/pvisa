import React from "react";
import { concatStyles } from "../../utils/Concatinator";
import styles from "./Overlay.module.css";
const Overlay: DivElement = ({ children, className, ...props }) => {
  return <div className={concatStyles(styles.Body, className)} {...props} />;
};
export default Overlay;
