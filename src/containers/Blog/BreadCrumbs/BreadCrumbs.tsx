import { Blog } from "../../../models/containers/Blog";
import { concatStyles } from "../../../utils/Concatinator";
import { t } from "../../../utils/Localization";
import styles from "./BreadCrumbs.module.css";

const BreadCrumbs: typeof Blog.BreadCrumbs = ({
  className,
  children,
  categoryContent,
  postContent,
  templateVariables,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <a className={styles.Link} href={"/"}>
        {t("nav_menu_home", templateVariables)}
      </a>
      <a
        className={concatStyles(styles.Link, styles.CategoryTitle)}
        href={categoryContent.href}
      >
        {categoryContent.title}
      </a>
      <a className={styles.Link}>{postContent.title}</a>
    </div>
  );
};
export default BreadCrumbs;
