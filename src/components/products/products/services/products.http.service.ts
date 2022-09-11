import { httpService } from "../../../../shared/services/http/http.service";
import { extractData } from "../../../../shared/services/http/http.utils";
import { pluck } from "../../../../shared/utils/pluck";

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
  return httpService.get<GetProductsResponse>(BASE).then(extractData).then(pluck("products"));
}
