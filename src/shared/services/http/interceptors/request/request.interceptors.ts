import { AxiosRequestConfig } from "axios";
import { baseUrlInterceptor } from "./base-url.interceptor";

export type RequestInterceptors = (config: AxiosRequestConfig) => AxiosRequestConfig;

export const requestInterceptors: RequestInterceptors[] = [baseUrlInterceptor];
