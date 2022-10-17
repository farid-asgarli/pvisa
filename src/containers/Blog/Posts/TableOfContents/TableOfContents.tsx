import { Blog } from "../../../../models/containers/Blog";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./TableOfContents.module.css";
const TableOfContents: typeof Blog.Posts.TableOfContents = ({
  className,
  children,
  titles,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Heading}>
        <h3 className={styles.Title}>Table of Contents</h3>
      </div>
      <ul className={styles.Content}>
        {titles.map((x) => (
          <li className={styles.ListItem} key={x}>
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TableOfContents;
