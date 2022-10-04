/* eslint-disable @next/next/no-img-element */
import Title from "antd/lib/typography/Title";
import { Card } from "../../../models/components/Card";
import { Heading } from "../../../models/components/Heading";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./RelatedPost.module.css";
const RelatedPost: typeof Card.RelatedPost = ({
  children,
  className,
  title,
  imageUrl,
  categoryContent,
  categoryContentProps,
  href,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.ImageWrapper}>
        {imageUrl && (
          <img className={styles.Image} alt={title} src={imageUrl} />
        )}
      </div>
      <div className={styles.Content}>
        <div
          {...categoryContentProps}
          className={concatStyles(
            styles.Category,
            categoryContentProps?.className
          )}
        >
          {categoryContent}
        </div>
        <Heading.Secondary
          size="sm"
          as="anchor"
          href={href}
          className={styles.Title}
        >
          {title}
        </Heading.Secondary>
      </div>
    </div>
  );
};
export default RelatedPost;
