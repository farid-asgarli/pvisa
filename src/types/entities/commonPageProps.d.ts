/**
 * This type will be a common ground of all API Requests,
 * so the errors can be handled and Router props can be
 * accessed on the fly, regardless of the page.
 */
declare type CommonPageProps = {
  routerProps: RouterProps;
};

declare namespace Pages {
  namespace Apply {
    namespace StepOne {
      type PageProps = {
        filterResponse: Nullable<CombinationsType.FilterResponse>;
        queryParams: QueryParams;
      };
      type QueryParams = {
        from: string;
        to: string;
        residence: string;
      };
    }
    namespace StepTwo {
      type PageProps = {
        details: AttributesType.AttributeResponse;
        eligibilityFields: FormsType.DetailsResponse;
        queryParams: QueryParams;
        formsData: FormsType.DetailsResponse;
        filterResponse: Nullable<CombinationsType.FilterResponse>;
      };
      type QueryParams = StepOne.QueryParams & {
        type: number;
      };
    }
    namespace StepThree {
      type PageProps = {
        orderData: OrdersType.MultipleOrderResponse["data"];
      };
      type QueryParams = {
        id: number;
      };
    }
  }
  namespace Blog {
    namespace Index {
      type PageProps = {
        posts: BlogsType.Post[];
        categories: BlogsType.Category[];
        featuredPosts: BlogsType.Post[];
      };
    }
    namespace ByCategory {
      type PageProps = {
        categories: BlogsType.Category[];
        posts: BlogsType.Post[];
        currentCategory?: BlogsType.Category;
      };
    }
    namespace Details {
      type PageProps = {
        recentPosts: BlogsType.Post[];
        currentPost: BlogsType.Post;
        relatedPosts: BlogsType.Post[];
      };
    }
  }
  namespace FAQ {
    type PageProps = {
      data: FAQType.AllResponse;
    };
  }
}
