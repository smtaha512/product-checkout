import { ProductImage } from "../../product-image/product-image";
import { ProductPrice } from "../../product-price/product-price";
import { ProductTitle } from "../../product-title/product-title";
import { ProductWithInfoPositionProps } from "../product-with-info-position.props.interface";

export function ProductWithRightInfoPosition(props: ProductWithInfoPositionProps) {
  return (
    <div className="d-flex">
      <ProductImage imageURL={props.imageURL} srcset={props.srcset} size={props.imageSize} />
      <div className="d-flex flex-column align-items-start justify-content-center ml-21">
        <ProductTitle title={props.title} />
        <ProductPrice currency={props.currency} price={props.price} />
      </div>
    </div>
  );
}
