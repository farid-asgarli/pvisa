import { Divider } from "antd";
import Title from "antd/lib/typography/Title";
import Link from "next/link";
import { useEffect } from "react";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import { SampleData } from "../../../../data/data";
import { StringExtensions } from "../../../../extensions/String";
import { Banner } from "../../../../models/components/Banner";
import { Heading } from "../../../../models/components/Heading";
import { Blog } from "../../../../models/containers/Blog";
import { SocialNetworks } from "../../../../static/EntityTypes";
import { UriGenerator } from "../../../../static/UriGenerator";
import { getCallToActionByKey } from "../../../../utils/CommonContent";
import { concatStyles } from "../../../../utils/Concatinator";
import { RenderIcon } from "../../../../utils/IconMapper";
import { t } from "../../../../utils/Localization";
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
  content,
  templateVariables,
  callToActions,
  ...props
}) => {
  const sideCTA = getCallToActionByKey("call_to_action_side", callToActions);

  function parseContentHeadings() {
    const contentTitles: string[] = [];
    let parser = new DOMParser();
    const document = parser.parseFromString(content, "text/html");
    const elements = document.getElementsByTagName("h2");

    for (const key in elements) {
      let title = elements[key].innerText;
      title !== undefined && contentTitles.push(title);
    }
    return contentTitles;
  }

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
                {SampleData.SocialNetworkLinks.map((x, i) => (
                  <Link key={i} href={`https://${x.path}.com`}>
                    <a target={"_blank"}>
                      <RenderIcon
                        weight="fill"
                        iconName={
                          (SocialNetworks[x.type] + "Logo") as "YoutubeLogo"
                        }
                        className={styles.SocialIcon}
                      />
                    </a>
                  </Link>
                ))}
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
              templateVariables={templateVariables}
            />
            <div
              className={styles.Content}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
          <div className={styles.Right}>
            <Blog.Posts.TableOfContents
              className={styles.TableOfContents}
              titles={parseContentHeadings()}
            />
            <Blog.Posts.RecentPostsTable
              className={styles.RecentPostsTable}
              items={recentPosts}
              templateVariables={templateVariables}
            />
            <Banner.Small
              className={styles.Banner}
              buttonProps={{
                children: t("buttons_apply", templateVariables),
              }}
              imageUrl={sideCTA?.background}
              href={sideCTA?.url}
            >
              {sideCTA?.name}
            </Banner.Small>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Post;
