import * as axios from "axios";
import {
  requestInterceptors,
  RequestInterceptors,
} from "./interceptors/request/request.interceptors";

export const httpService = axios.default.create({});

httpService.interceptors.request.use(interceptedConfigReducer(requestInterceptors));

export function interceptedConfigReducer(interceptors: RequestInterceptors[]) {
  return function (config: axios.AxiosRequestConfig) {
    return interceptors.reduce(
      (accumulatedConfig, currentInterceptor) => ({
        ...accumulatedConfig,
        ...currentInterceptor(config),
      }),
      {}
    );
  };
}
