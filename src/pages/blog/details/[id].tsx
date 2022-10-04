import { GetServerSideProps, NextPage } from "next";
import React from "react";
import agent from "../../../api/agent";
import { Page } from "../../../models/components/Page";
import { Blog } from "../../../models/containers/Blog";
import { UriGenerator } from "../../../static/UriGenerator";
import { mapPageHead } from "../../../utils/PageHeadMapper";

const Details: NextPage<CommonPageProps & Pages.Blog.Details.PageProps> = ({
  currentPost: { blogger, categories, post_date, title, cover_photo, content },
  recentPosts,
  relatedPosts,
  callToActions,
  templateVariables,
}) => {
  return (
    <Page.Item>
      {mapPageHead(title)}
      <Blog.Posts.SinglePost
        author={blogger.name}
        category={categories?.[0]}
        date={post_date}
        imageUrl={cover_photo.url}
        recentPosts={recentPosts.map(
          ({ blogger, post_date, slug, cover_photo, title }) => ({
            author: blogger.name,
            date: post_date,
            href: UriGenerator.Blog.Details(slug),
            imageUrl: cover_photo.url,
            title: title,
          })
        )}
        title={title}
        content={content}
        templateVariables={templateVariables}
        callToActions={callToActions}
      />
      <Blog.Posts.RelatedPosts
        items={relatedPosts.map(
          ({ blogger, post_date, slug, cover_photo, title, categories }) => ({
            author: blogger.name,
            date: post_date,
            href: UriGenerator.Blog.Details(slug),
            imageUrl: cover_photo.url,
            title: title,
            categoryContent: categories[0].name,
          })
        )}
        templateVariables={templateVariables}
      />
    </Page.Item>
  );
};

export default Details;

export const getServerSideProps: GetServerSideProps<
  Pages.Blog.Details.PageProps
> = async (context) => {
  const locale = context.locale as DefaultLocale;

  try {
    const recentPostsResponse = await agent.Blogs.Posts({
      lang: locale,
      pageSize: 3,
      currentPage: 1,
    });

    const blogSlug = context.params?.id;
    const currentBlog = await agent.Blogs.Details(blogSlug as string, locale);

    const relatedPostsResponse = await agent.Blogs.Posts({
      lang: locale,
      pageSize: 10,
      currentPage: 1,
      category: currentBlog.data?.categories?.[0].slug,
    });

    return {
      props: {
        recentPosts: recentPostsResponse.data,
        currentPost: currentBlog.data,
        relatedPosts: relatedPostsResponse.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
