import { Button } from "antd";
import { Button as ButtonComponent } from "../../../models/components/Button";
import { ActionButtonColors } from "../../../static/ActionButtonColors";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Extended.module.css";
const Extended: typeof ButtonComponent.Extended = ({
  className,
  children,
  color,
  leftContent,
  rightContent,
  ...props
}) => {
  return (
    <button
      className={concatStyles(
        styles.Extended,
        className,
        color ? colorPaletteAssigner(color) : undefined
      )}
      {...props}
    >
      <div className={styles.LeftContent}>{leftContent}</div>
      <div className={styles.MidContent}> {children}</div>
      <div className={styles.RightContent}>{rightContent}</div>
    </button>
  );
};

const colorPaletteAssigner = (color: ActionButtonColors) =>
  styles[ActionButtonColors[color]];

export default Extended;
