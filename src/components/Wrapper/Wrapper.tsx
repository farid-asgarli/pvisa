import { HTMLAttributes, FC } from "react";
import { concatStyles } from "../../utils/Concatinator";
import styles from "./Wrapper.module.css";
const Wrapper: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div {...props} className={concatStyles(styles.Body, className)} />;
};
export default Wrapper;
