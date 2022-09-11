import clsx from "clsx";
import "./styles.scss";

export interface ProductButtonProps {
  label: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function ProductButton(props: ProductButtonProps) {
  return (
    <button
      type="button"
      disabled={props.disabled}
      className={clsx(
        "product-button d-flex justify-content-center align-items-center cursor-pointer",
        { "btn-disabled": props.disabled }
      )}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
