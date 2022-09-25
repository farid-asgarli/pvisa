import { AxiosError, AxiosResponse } from "axios";
import { GetServerSidePropsResult } from "next";

export const dynamicErrorHandler = async <TResponse, TProps>(
  apiCall: () => Promise<TResponse>,
  onSuccess: (data: TResponse) => TProps,
  onError?: (
    error: AxiosError<TResponse>
  ) => GetServerSidePropsResult<TProps> | undefined
): Promise<GetServerSidePropsResult<TProps>> => {
  try {
    const data = await apiCall();
    return {
      props: onSuccess?.(data),
    };
  } catch (error) {
    const { response } = error as AxiosError<TResponse>;

    const errorHandledResult = onError?.(error as AxiosError<TResponse>);
    if (errorHandledResult) return errorHandledResult;
    else if (response?.status === 404)
      return {
        notFound: true,
      };
    else {
      return {
        redirect: {
          permanent: true,
          destination: "/500",
        },
      };
    }
  }
};
