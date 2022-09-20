import { CartIcon } from "../../assets/icons/cart";
import "./styles.scss";

export interface CartButtonProps {
  itemsCount?: number;
  onClick: React.MouseEventHandler<HTMLButtonElement | HTMLParagraphElement> | undefined;
}

export function CartButton(props: CartButtonProps) {
  return (
    <div className="cart-button-wrapper d-flex flex-column justify-content-center align-items-center">
      <button
        className="cart-button d-flex justify-content-center align-items-center cursor-pointer"
        onClick={props?.onClick}
      >
        <CartIcon />
        {(props?.itemsCount ?? 0) > 0 && <div className="products-count font-10px text-white">{props.itemsCount}</div>}
      </button>
      <p className="font-weight-500 font-12px text-aurometalsaurus" onClick={props?.onClick}>Checkout</p>
    </div>
  );
}
