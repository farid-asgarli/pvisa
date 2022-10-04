/* eslint-disable @next/next/no-img-element */
import Title from "antd/lib/typography/Title";
import Link from "next/link";
import { Card } from "../../../models/components/Card";
import { Heading } from "../../../models/components/Heading";
import { quickShareLinks } from "../../../static/QuickShareIcons";
import { concatStyles } from "../../../utils/Concatinator";
import { quickShareLinksMapper } from "../../../utils/IconMapper";
import Paragraph from "../../Paragraph/Paragraph";
import styles from "./BlogWide.module.css";

const BlogWide: typeof Card.BlogWide = ({
  className,
  children,
  title,
  content,
  authorContent,
  dateContent,
  imageUrl,
  positionNumber,
  url,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Left}>
        <Title level={4} className={styles.PositionNumber}>
          {positionNumber}
        </Title>
      </div>
      <div className={styles.Middle}>
        <div className={styles.MiddleLeft}>
          <Heading.Secondary as="anchor" href={url ?? ""} size="md">
            {title}
          </Heading.Secondary>
          {content && (
            <Paragraph
              className={styles.Content}
              ellipsis={3}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          )}

          <div className={styles.Bottom}>
            <span className={styles.Author}>{authorContent}</span>
            {dateContent && <span className={styles.Date}>{dateContent}</span>}
          </div>
        </div>
        <div className={styles.MiddleRight}>
          <div className={styles.QuickShare}>
            {quickShareLinks.map((x, i) =>
              quickShareLinksMapper(x, i, {
                className: styles.Icon,
              })
            )}
          </div>
        </div>
      </div>
      <div className={styles.Right}>
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};
export default BlogWide;
