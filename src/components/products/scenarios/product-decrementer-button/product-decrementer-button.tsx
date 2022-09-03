import { ProductButton } from "../../product-button/product-button";

export interface ProductDecrementerButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export function ProductDecrementerButton(props: ProductDecrementerButtonProps) {
  return <ProductButton onClick={props.onClick} label="-" disabled={props.disabled} />;
}
