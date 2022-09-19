import "./styles.scss";

export interface ProductCountDisplayProps {
  count: number;
}

export function ProductCountDisplay(props: ProductCountDisplayProps) {
  return <p className="product-count m-0 font-weight-500 font-14px">{props.count}</p>;
}
