import { ArrowDownRight, GlobeSimple } from "phosphor-react";
import { concatStyles } from "../../utils/Concatinator";
import styles from "./QuickLink.module.css";
const QuickLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <a className={concatStyles(styles.Body, className)} {...props}>
      <GlobeSimple className={concatStyles(styles.GlobeIcon, styles.Icon)} />
      <span className={styles.Content}>{children}</span>
      <ArrowDownRight
        weight="bold"
        className={concatStyles(styles.LinkIcon, styles.Icon)}
      />
    </a>
  );
};
export default QuickLink;
