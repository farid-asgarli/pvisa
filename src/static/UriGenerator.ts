export const UriGenerator = {
  Blog: {
    ByCategory: (slug: string, current: number = 1): string =>
      encodeURI(`/blog/by-category/${slug}?current=${current}`),
    Details: (slug: string) => `/blog/details/${slug}`,
  },
};
