/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Paragraph from "../../../../components/Paragraph/Paragraph";
import { Blog } from "../../../../models/containers/Blog";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./RecentPost.module.css";
const RecentPost: typeof Blog.Posts.RecentPost = ({
  className,
  children,
  title,
  imageUrl,
  href,
  author,
  date,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Left}>
        <img alt={title} className={styles.Image} src={imageUrl} />
      </div>
      <div className={styles.Right}>
        {href && (
          <Link href={href}>
            <a className={styles.Link}>
              <Paragraph className={styles.Link} ellipsis={2}>
                {title}
              </Paragraph>
            </a>
          </Link>
        )}
        <div className={styles.TextContent}>
          <span className={styles.AuthorContent}>{author}</span>
          <span className={styles.DateContent}>{date}</span>
        </div>
      </div>
    </div>
  );
};
export default RecentPost;
