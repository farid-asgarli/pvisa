import { GetServerSideProps, NextPage } from "next";
import agent from "../../../api/agent";
import Wrapper from "../../../components/Wrapper/Wrapper";
import { Page } from "../../../models/components/Page";
import { Blog } from "../../../models/containers/Blog";
import { BackgroundColors } from "../../../static/PageColors";
import { UriGenerator } from "../../../static/UriGenerator";
import { mapPageHead } from "../../../utils/PageHeadMapper";

const ByCategory: NextPage<
  CommonPageProps & Pages.Blog.ByCategory.PageProps
> = ({ posts, categories, currentCategory, templateVariables }) => {
  return (
    <Page.Item backgroundColor={BackgroundColors.Blue}>
      {mapPageHead(currentCategory?.name)}
      <Wrapper>
        <Blog.Categories.CategoryNavigation
          items={categories.map((x) => ({
            title: x.name,
            href: encodeURI(UriGenerator.Blog.ByCategory(x.slug)),
            isActive: x.slug === currentCategory?.slug,
          }))}
          templateVariables={templateVariables}
        />
        <Blog.Posts.PostsByCategory
          categoryTitle={currentCategory?.name}
          posts={posts.map((p, i) => ({
            authorContent: p.blogger.name,
            dateContent: p.post_date,
            imageUrl: p.cover_photo.url,
            title: p.title,
            content: p.preview_content,
            positionNumber: String(i + 1).padStart(2, "0"),
            href: UriGenerator.Blog.Details(p.slug),
          }))}
          templateVariables={templateVariables}
        />
      </Wrapper>
    </Page.Item>
  );
};

export default ByCategory;

export const getServerSideProps: GetServerSideProps<
  Pages.Blog.ByCategory.PageProps
> = async (context) => {
  const locale = context.locale!;
  try {
    const categorySlug = context.query?.slug?.[0];
    const blogsResponse = await agent.Blogs.Posts({
      lang: locale,
      pageSize: 20,
      category: categorySlug,
      currentPage: Number(context.query?.current) ?? 1,
    });

    const categoriesResponse = await agent.Blogs.Categories(locale);

    const currentCategory = categoriesResponse.data.find(
      (x) => x.slug === categorySlug
    );

    return {
      props: {
        posts: blogsResponse.data,
        categories: categoriesResponse.data,
        currentCategory,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};
