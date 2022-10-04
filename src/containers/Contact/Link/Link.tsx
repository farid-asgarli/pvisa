import { Contact } from "../../../models/containers/Contact";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Link.module.css";
const Link: typeof Contact.Link = ({
  className,
  children,
  href,
  icon: Icon,
  content,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.IconWrapper}>
        <Icon className={styles.Icon} />
      </div>
      <a href={href} className={styles.Anchor} children={content} />
    </div>
  );
};
export default Link;
