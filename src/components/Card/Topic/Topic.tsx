/* eslint-disable @next/next/no-img-element */
import Title from "antd/lib/typography/Title";
import Link from "next/link";
import { Card } from "../../../models/components/Card";
import { concatStyles } from "../../../utils/Concatinator";
import styles from "./Topic.module.css";
const Topic: typeof Card.Topic = ({
  children,
  className,
  title,
  href,
  imageUrl,
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
        <Link href={href ?? "/"}>
          <a>
            <Title className={styles.Title} level={5}>
              {title}
            </Title>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Topic;
