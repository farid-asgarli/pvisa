type RouterProps = {
  locale: DefaultLocale;
  localePathname?: string;
  push: (
    url: string,
    as?: string,
    options?: {
      shallow?: boolean;
      locale?: string | false;
      scroll?: boolean;
    }
  ) => Promise<boolean>;
  pathname: string;
};
