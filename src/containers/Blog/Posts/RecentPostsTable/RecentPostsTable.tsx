import { Heading } from "../../../../models/components/Heading";
import { Blog } from "../../../../models/containers/Blog";
import { concatStyles } from "../../../../utils/Concatinator";
import { t } from "../../../../utils/Localization";
import styles from "./RecentPostsTable.module.css";
const RecentPostsTable: typeof Blog.Posts.RecentPostsTable = ({
  className,
  items,
  children,
  templateVariables,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Heading.Secondary className={styles.Heading}>
        {t("blog_recentpost", templateVariables)}
      </Heading.Secondary>
      <div className={styles.Collection}>
        {items.map((x, i) => (
          <Blog.Posts.RecentPost key={i} {...x} />
        ))}
      </div>
    </div>
  );
};
export default RecentPostsTable;
