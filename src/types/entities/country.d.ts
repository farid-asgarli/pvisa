declare namespace CountryType {
  type Item = {
    alpha_2_code: string;
    alpha_3_code: string;
    name: string;
  };

  type Extended = Item & {
    status: string;
    numeric_code: string;
    slug: string;
    display_name: string;
    flag_icon: Nullable<string>;
    details: Details[];
  };

  type Details = {
    locale: string;
    name: string;
    slug: string;
    display_name: string;
    keywords: string;
  };
}
