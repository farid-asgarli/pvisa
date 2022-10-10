import axios, {
  AxiosInstance,
  AxiosRequestTransformer,
  AxiosResponse,
} from "axios";
import localData from "../data/countries.json";
import { AuthTokens, UrlCollection } from "../globals";
import { StringExtensions } from "../extensions/String";

//#region Utils
const commonHeaders = {
  Authorization: AuthTokens.COMBINATIONSTOKEN!,
  website: "pickvisa",
  "Content-Type": "application/json",
};

const removeRedundantHeader:
  | AxiosRequestTransformer
  | AxiosRequestTransformer[]
  | undefined = (data, headers) => {
  delete headers?.["website"];
  return data;
};

//#endregion

//#region API Instances

const AboenaApi = axios.create({
  baseURL: UrlCollection.ABOENAURL,
  headers: {
    Authorization: AuthTokens.ABOENATOKEN!,
  },
});

const AceApi = axios.create({ baseURL: UrlCollection.ACEURL });

const BlogsApi = axios.create({
  baseURL: UrlCollection.BLOGSURL,
  headers: commonHeaders,
});

const CombinationsApi = axios.create({
  baseURL: UrlCollection.COMBINATIONSURL,
  headers: {
    Authorization: commonHeaders.Authorization,
  },
});

/**
 * @deprecated
 */
const CombinationsLegacyApi = axios.create({
  baseURL: UrlCollection.COMBINATIONSLEGACYURL,
  headers: commonHeaders,
});

const CommonContentApi = axios.create({
  baseURL: UrlCollection.COMMONCONTENTURL,
});

const FormsApi = axios.create({
  baseURL: UrlCollection.FORMSURL,
  headers: commonHeaders,
});

//#endregion

//#region Interceptors
// FormsApi.interceptors.response.use(
//   async (response) => response,
//   (error: AxiosError) => error
// );
//#endregion

/** This below line might be used unless a custom error handler is registered.
Wrapping the response with Result is optional currently, as we do not know
what type of server response we might receive.
Therefore this section will be revisited as soon as we get our hands on the
API definition (swagger/pick-visa).
 * @param {AxiosResponse<T>} response Raw HTTP response object.
 * @returns {T} Returns {@link T} entity wrapped by {@link T}.
 */
const responseBody = <T>(response: AxiosResponse<T>): T => response.data;

/**
 * Collection of direct HTTP/REST requests.
 */
const requests = (instance: AxiosInstance) => ({
  get: <T>(url: string) => instance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    instance.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) =>
    instance.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => instance.delete<T>(url).then(responseBody),
});

const Aboena = {
  OrderGroupById: (id: number) =>
    requests(AboenaApi).get<OrdersType.MultipleOrderResponse>(id.toString()),
};

const Ace = {
  All: () => requests(AceApi).get<CountryType.Extended[]>("countries/all"),
  Details: (countryCode: string) =>
    requests(AceApi).get<CountryType.Extended>(
      `countries/alpha3-code/${countryCode}`
    ),
};

const AceMock = {
  All: () =>
    new Promise<CountryType.Extended[]>((res) => res(localData.countries)),
};

const Blogs = {
  Categories: (lang: string) =>
    BlogsApi.get<BlogsType.CategoriesResponse>("categories", {
      headers: {
        "Accept-Language": lang,
      },
    }).then(responseBody),
  Details: (slug: string, lang: string) =>
    BlogsApi.get<BlogsType.PostDetailsResponse>(`posts/${slug}`, {
      headers: {
        "Accept-Language": lang,
      },
    }).then(responseBody),
  Posts: ({
    pageSize = 10,
    currentPage = 1,
    featured = false,
    category,
    searchString = StringExtensions.Empty,
    lang = "en",
  }: {
    pageSize?: number;
    currentPage?: number;
    featured?: boolean;
    category?: string;
    searchString?: string;
    lang?: string;
  }) =>
    BlogsApi.get<BlogsType.PostListResponse>(
      `posts/?page=${currentPage}&posts_per_page=${pageSize}&category=${
        category ?? StringExtensions.Empty
      }&featured=${featured}&s=${searchString}`,
      {
        headers: {
          "Accept-Language": lang,
        },
      }
    ).then(responseBody),
};

const Combinations = {
  Filter: (reqArgs: {
    travel_to: string;
    citizen_of: string;
    resident_of: string;
  }) =>
    requests(CombinationsApi).get<CombinationsType.FilterResponse>(
      "api/v1/combinations/filter?" + new URLSearchParams(reqArgs)
    ),
  Attributes: (id: number) =>
    CombinationsApi.get<AttributesType.AttributeResponse>(
      `/api/v1/combinations/attrs/${id}`
    ),
  Details: (id: number) =>
    requests(
      CombinationsLegacyApi
    ).get<AttributesType.AttributesDetailsResponse>(id.toString()),
};

const CommonContent = {
  ApplicationSteps: (languageId: number) =>
    requests(CommonContentApi).get<
      CommonContent.CommonContentResponse<"application_steps">
    >(`${languageId}/application_steps`),
  CallToActions: (languageId: number) =>
    requests(CommonContentApi).get<
      CommonContent.CommonContentResponse<"call_to_actions">
    >(`${languageId}/call_to_actions`),
  FAQCategories: (languageId: number) =>
    requests(CommonContentApi).get<
      CommonContent.CommonContentResponse<"faq_categories">
    >(`${languageId}/faq_categories`),
  StaticContent: (languageId: number) =>
    requests(CommonContentApi).get<
      CommonContent.CommonContentResponse<"static_contents">
    >(`${languageId}/static_contents`),
  TemplateVariables: (languageId: number) =>
    requests(CommonContentApi).get<
      CommonContent.CommonContentResponse<"template_variables">
    >(`${languageId}/template_variables`),
  UsefulLinks: (languageId: number) =>
    requests(CommonContentApi).get<
      CommonContent.CommonContentResponse<"usefull_links">
    >(`${languageId}/usefull_links`),
};

const Forms = {
  GetEvisaFieldsStepOne: (serviceId: number) =>
    requests(FormsApi).get<FormsType.DetailsResponse>(
      `v2/evisa/forms/steps/1?service_id=${serviceId}`
    ),
  SubmitFieldsStepOne: (
    serviceId: number,
    body: { [key: string]: string | undefined }
  ) =>
    FormsApi.post(`v2/evisa/forms/steps/1?service_id=${serviceId}`, body, {
      transformRequest: removeRedundantHeader,
    }),
  GetEvisaFieldsStepTwo: (serviceId: number) =>
    requests(FormsApi).get<FormsType.DetailsResponse>(
      `v2/evisa/forms/steps/2?service_id=${serviceId}`
    ),
  GetRegularFieldsStepTwo: () =>
    requests(FormsApi).get<FormsType.DetailsResponse>("v1/regular/forms"),
  SubmitFieldsStepTwo: (data: any) =>
    FormsApi.post<FormsType.StepTwoResponse>(
      "v2/multiple-forms",
      JSON.stringify(data),
      {
        transformRequest: removeRedundantHeader,
      }
    ),
  GetFieldsStepThree: (data: {
    form_type: string | null;
    submitted_form_id: string;
    service_id: number;
  }) =>
    FormsApi.get<FormsType.StepThreeResponse>("v2/multiple-forms/get_fields", {
      params: data,
      transformRequest: removeRedundantHeader,
    }),
  SubmitFieldsStepThree: (data: FormsType.StepThreeRequest) =>
    FormsApi.post("v2/multiple-forms/update_fields", JSON.stringify(data), {
      transformRequest: removeRedundantHeader,
    }),
};

const GeoLocation = {
  LocateCurrentCountry: () => Intl.DateTimeFormat().resolvedOptions().timeZone,
};

const agent = {
  Aboena,
  Ace,
  AceMock,
  Blogs,
  Combinations,
  CommonContent,
  Forms,
  GeoLocation,
};

export default agent;
