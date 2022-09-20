import { AxiosError } from "axios";
import { HttpStatus } from "../../../../shared/services/http/http-error-responses";
import { httpService } from "../../../../shared/services/http/http.service";
import { extractData } from "../../../../shared/services/http/http.utils";
import { pluck } from "../../../../shared/utils/pluck";
import { productMockedResponse } from "./products.response.mock";

const BASE = "/products";

interface BaseApiResponse {
  requestId: string;
}

export interface GetProductsResponse extends BaseApiResponse {
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
}

export function getProducts(): Promise<Product[]> {
  return httpService
    .get<GetProductsResponse>(BASE)
    .then(extractData)
    .then(pluck("products"))
    .catch(error => {
      const err = error as AxiosError;
      if (err.response?.status === HttpStatus.ERR_BAD_REQUEST) {
        return productMockedResponse.products;
      }
      throw error;
    });
}
