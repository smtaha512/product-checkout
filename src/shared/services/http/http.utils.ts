import { AxiosResponse } from "axios";

export function extractData<T>(response: AxiosResponse<T>) {
  return response.data;
}
