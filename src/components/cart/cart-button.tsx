import { CartIcon } from "../../assets/icons/cart";
import "./styles.scss";

export interface CartButtonProps {
  itemsCount?: number;
  onClick: () => void;
}

export function CartButton(props: CartButtonProps) {
  return (
    <div className="cart-button-wrapper d-flex flex-column justify-content-center align-items-center">
      <button
        className="cart-button d-flex justify-content-center align-items-center cursor-pointer"
        onClick={props.onClick}
      >
        <CartIcon />
        {(props?.itemsCount ?? 0) > 0 && <div className="products-count">{props.itemsCount}</div>}
      </button>
      <p onClick={props.onClick}>Checkout</p>
    </div>
  );
}
