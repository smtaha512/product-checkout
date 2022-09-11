import { useEffect, useState } from "react";
import { getProducts, Product } from "../services/products.http.service";

export function useFetchProduct() {
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(function useFetchProductEffectCallback() {
    (async function fetchProducts() {
      try {
        setData(await getProducts());
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
}
