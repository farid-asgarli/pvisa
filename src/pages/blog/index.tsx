import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import agent from "../../api/agent";
import Wrapper from "../../components/Wrapper/Wrapper";
import Locales from "../../localization/locales";
import { Banner } from "../../models/components/Banner";
import { Page } from "../../models/components/Page";
import { Blog } from "../../models/containers/Blog";
import { BackgroundColors } from "../../static/PageColors";
import { UriGenerator } from "../../static/UriGenerator";

const Index: NextPage<CommonPageProps & Pages.Blog.Index.PageProps> = ({
  routerProps: { locale },
  categories,
  featuredPosts,
  posts,
  ...props
}) => {
  const postsWithSingleCategory = posts.map((x) => {
    const categoryMain = x.categories[0];
    return {
      ...x,
      categoryName: categoryMain.name,
      categorySlug: categoryMain.slug,
    };
  });

  const customGroupBy = (
    key: keyof typeof postsWithSingleCategory[0] = "categorySlug"
  ) => {
    return postsWithSingleCategory.reduce(
      (acc, currentValue) => {
        let groupKey = currentValue[key];
        if (!acc[groupKey as string]) {
          acc[groupKey as string] = {
            categoryName: currentValue.categoryName,
            items: [],
          };
        }
        acc[groupKey as string].items.push(currentValue);
        return acc;
      },
      {} as {
        [key: string]: {
          items: BlogsType.Post[];
          categoryName: string;
        };
      }
    );
  };

  const groupPostsByCategory = () => {
    const obj = customGroupBy();

    const elementsToReturn: React.ReactElement[] = [];

    for (const key in obj) {
      const currentObject = obj[key];
      elementsToReturn.push(
        <Blog.Posts.GroupedPosts
          key={key}
          categoryUrl={UriGenerator.Blog.ByCategory(key)}
          categoryTitle={currentObject.categoryName}
          posts={currentObject.items.map((p, i) => ({
            authorContent: p.blogger.name,
            dateContent: p.post_date,
            imageUrl: p.cover_photo.url,
            title: p.title,
            content: p.preview_content,
            positionNumber: String(i + 1).padStart(2, "0"),
            href: UriGenerator.Blog.Details(p.slug),
          }))}
        />
      );
    }
    return elementsToReturn;
  };

  return (
    <Page.Item {...props}>
      <Head>
        <title>{Locales[locale].Nav_Menu_Blog} &nbsp;| Pick Visa</title>
      </Head>
      <Blog.Categories.CategoryNavigation
        items={categories.map((x) => ({
          title: x.name,
          href: UriGenerator.Blog.ByCategory(x.slug),
        }))}
      />
      <Banner.Blog
        items={featuredPosts.map((p) => ({
          authorContent: p.blogger.name,
          categoryContent: p.categories[0].name,
          dateContent: p.post_date,
          imageUrl: p.cover_photo.url,
          title: p.title,
          url: UriGenerator.Blog.Details(p.slug),
        }))}
        locale={locale}
        style={{
          marginBottom: 100,
        }}
      />
      <Page.Item backgroundColor={BackgroundColors.Blue}>
        <Wrapper>{groupPostsByCategory()}</Wrapper>
      </Page.Item>
      <Blog.Topics
        items={categories.map((x) => ({
          href: UriGenerator.Blog.ByCategory(x.slug, 1),
          imageUrl: "",
          title: x.name,
        }))}
      />
    </Page.Item>
  );
};
export default Index;

export const getStaticProps: GetStaticProps<
  Pages.Blog.Index.PageProps
> = async (context) => {
  const locale = context.locale as DefaultLocale;
  try {
    const blogsResponse = await agent.Blogs.Posts({
      lang: locale,
      pageSize: 20,
    });
    const categoriesResponse = await agent.Blogs.Categories(locale);

    const featuredBlogsResponse = await agent.Blogs.Posts({
      lang: locale,
      featured: true,
    });

    return {
      props: {
        posts: blogsResponse.data,
        categories: categoriesResponse.data,
        featuredPosts: featuredBlogsResponse.data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};
