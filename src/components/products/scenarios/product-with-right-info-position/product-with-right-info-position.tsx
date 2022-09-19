import { ProductImage } from "../../product-image/product-image";
import { ProductPrice } from "../../product-price/product-price";
import { ProductTitle } from "../../product-title/product-title";
import { ProductWithInfoPositionProps } from "../product-with-info-position.props.interface";

export function ProductWithRightInfoPosition(props: ProductWithInfoPositionProps) {
  return (
    <div className="d-flex justify-content-space-between">
      <div className="d-flex">
        <ProductImage imageURL={props.imageURL} srcset={props.srcset} size={props.imageSize} />
        <div className="d-flex flex-column align-items-start justify-content-center text-align-start ml-21">
          <ProductTitle title={props.title} />
          <ProductPrice currency={props.currency} price={props.price} />
        </div>
      </div>
      <div className="d-flex flex-column align-items-end justify-content-center">
      <p className="m-0 text-align-end font-weight-700 font-16px text-very-light-blue">40 THB</p>
      <p className="m-0 text-align-end font-weight-400 font-12px">qty: 2</p>
      </div>
    </div>
  );
}
