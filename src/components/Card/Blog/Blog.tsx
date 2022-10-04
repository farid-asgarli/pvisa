import { useRouter } from "next/router";
import { Button } from "../../../models/components/Button";
import { Card } from "../../../models/components/Card";
import { Heading } from "../../../models/components/Heading";
import { quickShareLinks } from "../../../static/QuickShareIcons";
import { concatStyles } from "../../../utils/Concatinator";
import { quickShareLinksMapper } from "../../../utils/IconMapper";
import styles from "./Blog.module.css";
const Blog: typeof Card.Blog = ({
  className,
  children,
  title,
  categoryContent,
  authorContent,
  dateContent,
  buttonProps,
  href,
  ...props
}) => {
  const { push } = useRouter();
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <div className={styles.Head}>
        <span className={styles.Category}>{categoryContent}</span>
        <Heading.Secondary
          as="anchor"
          href={href}
          className={styles.Title}
          size="lg"
        >
          {title}
        </Heading.Secondary>
      </div>
      <div className={styles.Bottom}>
        <div className={styles.Left}>
          <span className={styles.Author}>{authorContent}</span>
          {dateContent && <span className={styles.Date}>{dateContent}</span>}
          <div className={styles.QuickShare}>
            {quickShareLinks.map((x, i) =>
              quickShareLinksMapper(x, i, {
                className: styles.Icon,
              })
            )}
          </div>
        </div>
        <div className={styles.Right}>
          <Button.Primary
            {...buttonProps}
            onClick={() => push(href)}
            className={concatStyles(styles.Button, buttonProps?.className)}
          />
        </div>
      </div>
    </div>
  );
};
export default Blog;
