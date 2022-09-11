import { AxiosRequestConfig } from "axios";

export function baseUrlInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
  const { url } = config;
  const updatedUrl = url?.startsWith("/") ? process.env.REACT_APP_BASE_URL + url : url;

  return { ...config, url: updatedUrl };
}
