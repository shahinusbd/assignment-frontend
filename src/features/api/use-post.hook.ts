import { RequestOptions, useMutation } from "./use-mutation.hook";
import { ServiceTypes } from "./constants";

/**
 * Wrapper for POST request to the API.
 *
 * Provides way to mutate remote data by trigger function.
 *
 * @template RequestType - Type of the request payload
 * @template ResponseType - Type of the server response
 * @param url - API endpoint. i.e - /api/user/me
 * @param [options] - Options to pass to axios
 * @param servicename
 */
export function usePost<
  RequestType = Record<string, unknown>,
  ResponseType = Record<string, unknown>
>(url: string, options?: RequestOptions<RequestType> , servicename?: ServiceTypes) {
  const ctx = useMutation<RequestType, ResponseType>(url, "POST", options, servicename);
  return ctx;
}
