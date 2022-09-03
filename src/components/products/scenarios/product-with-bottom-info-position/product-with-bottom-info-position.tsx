import { ProductImage } from "../../product-image/product-image";
import { ProductPrice } from "../../product-price/product-price";
import { ProductTitle } from "../../product-title/product-title";
import { ProductWithInfoPositionProps } from "../product-with-info-position.props.interface";

export function ProductWithBottomInfoPosition(props: ProductWithInfoPositionProps) {
  return (
    <div className="d-flex flex-column align-items-center">
      <ProductImage
        className="mb-7" 
        imageURL={props.imageURL}
        srcset={props.srcset}
        size={props.imageSize}
      />
        <ProductTitle className= "mb-12" title={props.title} />
        <ProductPrice currency={props.currency} price={props.price} />
    </div>
  );
}