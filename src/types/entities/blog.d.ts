declare namespace BlogsType {
  type PostListResponse = Result<PostsMeta, Post[]>;
  type PostDetailsResponse = Result<DetailsMeta, Post>;

  type CategoriesResponse = {
    meta: PostsMeta;
    data: Category[];
  };

  type PostsMeta = {
    total_posts: number;
    total_pages: number;
  };

  type DetailsMeta = {
    translations: {
      [K in DefaultLocale]: string;
    };
  };

  type Post = {
    title: string;
    slug: string;
    id: number;
    post_date: string;
    preview_content: string;
    content: string;
    cover_photo: CoverPhoto;
    is_featured: false;
    blogger: Blogger;
    categories: Category[];
    views: string;
    seo: SEO;
    tags: Tag[];
  };

  type CoverPhoto = {
    id: number;
    title: string;
    filename: string;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: StreamPipeOptions;
    name: string;
    status: string;
    uploaded_to: number;
    date: Date;
    modified: Date;
    menu_order: number;
    mime_type: "image/jpeg";
    type: "image";
    subtype: "jpeg";
    icon: string;
    width: number;
    height: number;
    sizes: CoverPhotoSize;
  };

  type CoverPhotoSize = {
    thumbnail: string;
    "thumbnail-width": number;
    "thumbnail-height": number;
    medium: string;
    "medium-width": number;
    "medium-height": number;
    medium_large: string;
    "medium_large-width": number;
    "medium_large-height": number;
    large: string;
    "large-width": number;
    "large-height": number;
    "1536x1536": string;
    "1536x1536-width": number;
    "1536x1536-height": number;
    "2048x2048": string;
    "2048x2048-width": number;
    "2048x2048-height": number;
  };

  type Blogger = {
    slug: string;
    name: string;
    image: string;
  };

  type Category = {
    name: string;
    slug: string;
    description: string;
    image: Nullable<string>;
  };

  type Tag = {
    name: string;
    slug: string;
  };

  type SEO = {
    meta_title: string;
    meta_keywords: string;
    meta_description: string;
  };
}
