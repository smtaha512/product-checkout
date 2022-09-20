import { GetProductsResponse } from "./products.http.service";

export const productMockedResponse: GetProductsResponse = {
  requestId: "12344556",
  products: [
    {
      id: 1,
      name: "Product A",
      price: 40.5,
      currency: "THB",
    },
    {
      id: 2,
      name: "Product B",
      price: 20.6,
      currency: "THB",
    },
    {
      id: 3,
      name: "Product C",
      price: 43,
      currency: "THB",
    },
    {
      id: 4,
      name: "Product D",
      price: 25,
      currency: "THB",
    },
    {
      id: 5,
      name: "Product E",
      price: 72,
      currency: "THB",
    },
    {
      id: 6,
      name: "Product F",
      price: 80,
      currency: "THB",
    },
  ],
};
