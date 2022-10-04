import Title from "antd/lib/typography/Title";
import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import { Card } from "../../../../models/components/Card";
import { Blog } from "../../../../models/containers/Blog";
import { CategoryColors } from "../../../../static/CategoryColors";
import { concatStyles } from "../../../../utils/Concatinator";
import { t } from "../../../../utils/Localization";
import styles from "./GroupedPosts.module.css";

const GroupedPosts: typeof Blog.Posts.GroupedPosts = ({
  className,
  children,
  posts,
  categoryTitle,
  categoryTitleColor = CategoryColors.Blue,
  categoryUrl,
  templateVariables,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <div className={styles.Heading}>
          <Title
            className={styles.CategoryTitle}
            style={{
              color: categoryTitleColor,
            }}
          >
            {categoryTitle}
          </Title>
          {categoryUrl && (
            <Link href={categoryUrl}>
              <a className={styles.ViewAll}>
                {t("blog_posts_viewall", templateVariables)}
                <ArrowRight weight="bold" className={styles.ArrowLeftIcon} />
              </a>
            </Link>
          )}
        </div>
      </Wrapper>
      <div className={styles.Collection}>
        {posts.map((x, i) => (
          <Card.BlogWide key={i} {...x} url={x.href} />
        ))}
      </div>
    </div>
  );
};
export default GroupedPosts;
