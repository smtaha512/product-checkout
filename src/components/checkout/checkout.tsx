import { useFetchProduct } from "../products/products/hooks/use-fetch-products.hook";
import { Wrapper } from "../shared/wrapper";
import { ProductsList } from "./products-list/products-list";
import "./styles.scss";

interface CheckoutProps {}

export function Checkout(props: CheckoutProps) {
  const { data } = useFetchProduct();

  return (
    <Wrapper
      title="Checkout"
      footerElement={<div></div>}
      mainElement={<ProductsList products={data} />}
    ></Wrapper>
  );
}
