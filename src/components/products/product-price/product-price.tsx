import "./styles.scss";

export interface ProductPriceProps {
  price: number;
  currency: string;
}

export function ProductPrice(props: ProductPriceProps) {
  return (
    <p className="product-price text-very-light-blue">
      {props.price} {props.currency}
    </p>
  );
}
