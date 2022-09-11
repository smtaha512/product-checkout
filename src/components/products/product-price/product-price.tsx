import clsx from "clsx";
import "./styles.scss";

export interface ProductPriceProps {
  price: number;
  currency: string;
  className?: string;
}

export function ProductPrice(props: ProductPriceProps) {
  return (
    <p className={clsx("product-price text-very-light-blue", props.className)}>
      {props.price} {props.currency}
    </p>
  );
}
