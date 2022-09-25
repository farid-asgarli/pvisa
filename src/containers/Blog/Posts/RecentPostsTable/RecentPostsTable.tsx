import { useRouter } from "next/router";
import Locales from "../../../../localization/locales";
import { Heading } from "../../../../models/components/Heading";
import { Blog } from "../../../../models/containers/Blog";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./RecentPostsTable.module.css";
const RecentPostsTable: typeof Blog.Posts.RecentPostsTable = ({
  className,
  items,
  children,
  ...props
}) => {
  const { locale } = useRouter();

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Heading.Secondary className={styles.Heading}>
        {Locales[locale as DefaultLocale].Blog_RecentPost}
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
