import { Divider } from "antd";
import Title from "antd/lib/typography/Title";
import Link from "next/link";
import Paragraph from "../../../../components/Paragraph/Paragraph";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import { SampleData } from "../../../../data/data";
import { StringExtensions } from "../../../../extensions/String";
import Locales from "../../../../localization/locales";
import { Banner } from "../../../../models/components/Banner";
import { Heading } from "../../../../models/components/Heading";
import { Blog } from "../../../../models/containers/Blog";
import { UriGenerator } from "../../../../static/UriGenerator";
import { concatStyles } from "../../../../utils/Concatinator";
import { socialNetworkIconMapper } from "../../../../utils/IconMapper";
import styles from "./SinglePost.module.css";
const Post: typeof Blog.Posts.SinglePost = ({
  className,
  title,
  category,
  author,
  date,
  imageUrl,
  recentPosts,
  children,
  routerProps: { locale },
  content,
  ...props
}) => {
  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <div className={styles.MainContent}>
          <div className={styles.Left}>
            <Title className={styles.CategoryTitle}>{category?.name}</Title>
            <Heading.Secondary size="lg">{title}</Heading.Secondary>
            <div className={styles.PostProperties}>
              <div className={styles.Text}>
                <span className={styles.Author}>{author}</span>
                <span className={styles.Date}>{date}</span>
              </div>
              <div className={styles.SocialContent}>
                {SampleData.SocialNetworkLinks.map((x, i) => {
                  let IconElement = socialNetworkIconMapper(x.type);
                  return (
                    <Link key={i} href={`https://${x.path}.com`}>
                      <a target={"_blank"}>
                        <IconElement
                          weight="duotone"
                          className={styles.SocialIcon}
                        />
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Divider />
            <Blog.BreadCrumbs
              categoryContent={{
                href: category?.slug
                  ? UriGenerator.Blog.ByCategory(category?.slug, 1)
                  : StringExtensions.Empty,
                title: category?.name,
              }}
              postContent={{
                title: title,
              }}
            />
            <div
              className={styles.Content}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
          <div className={styles.Right}>
            <Blog.Posts.RecentPostsTable
              className={styles.RecentPostsTable}
              items={recentPosts}
            />
            <Banner.Small
              className={styles.Banner}
              buttonProps={{
                children: Locales[locale].Buttons_Apply,
              }}
              imageUrl="/assets/images/banner/4.png"
            >
              {Locales[locale].Banners_Promotion_Text}
            </Banner.Small>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Post;
