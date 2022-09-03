import "./styles.scss";

export interface ProductCountDisplayProps {
  count: number;
}

export function ProductCountDisplay(props: ProductCountDisplayProps) {
  return <p className="product-count">{props.count}</p>;
}
