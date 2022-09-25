import * as React from "react";
import styles from "./Bar.module.css";

const Bar = ({
  progress,
  animationDuration,
}: {
  progress: number;
  animationDuration: number;
}) => (
  <div
    className={styles.Body}
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`,
    }}
  >
    <div className={styles.Inner} />
  </div>
);

export default Bar;
