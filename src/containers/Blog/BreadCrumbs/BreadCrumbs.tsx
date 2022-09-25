import { useRouter } from "next/router";
import Locales from "../../../localization/locales";
import { Blog } from "../../../models/containers/Blog";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./BreadCrumbs.module.css";
const BreadCrumbs: typeof Blog.BreadCrumbs = ({
  className,
  children,
  categoryContent,
  postContent,
  ...props
}) => {
  const { locale } = useRouter();

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <a className={styles.Link} href={"/"}>
        {Locales[locale as DefaultLocale].Nav_Menu_Home}
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
