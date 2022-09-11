import { CartIcon } from "../../assets/icons/cart";
import './styles.scss';

export interface CartButtonProps {
  itemsCount: number;
  onClick: () => {};
}

export function CartButton(props: Partial<CartButtonProps>) {
  return <button className="cart-button d-flex justify-content-center align-items-center cursor-pointer" onClick={props.onClick}>
    <CartIcon />
    {(props?.itemsCount ?? 0) > 0 && <div className="products-count">{props.itemsCount}</div>}
  </button>  
}