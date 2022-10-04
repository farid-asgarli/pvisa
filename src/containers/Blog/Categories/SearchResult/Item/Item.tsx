import Link from "next/link";
import { CaretRight } from "phosphor-react";
import Paragraph from "../../../../../components/Paragraph/Paragraph";
import { Blog } from "../../../../../models/containers/Blog";
import { concatStyles } from "../../../../../utils/Concatinator";
import styles from "./Item.module.css";
const Item: typeof Blog.Categories.SearchResult.Item = ({
  className,
  children,
  href,
  label,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)}>
      <Link href={href}>
        <a className={styles.Anchor} {...props}>
          <Paragraph ellipsis={1} className={styles.Content}>
            {label}
          </Paragraph>
          <CaretRight weight="bold" className={styles.Icon} />
        </a>
      </Link>
    </div>
  );
};
export default Item;
