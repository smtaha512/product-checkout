import { ProductButton } from "../../product-button/product-button";

export interface ProductIncrementorButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export function ProductIncrementorButton(props: ProductIncrementorButtonProps) {
  return <ProductButton onClick={props.onClick} label="+" disabled={props.disabled} />;
}
