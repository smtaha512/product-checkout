import clsx from "clsx";
import { ProductImage, ProductImageProps } from "../product-image/product-image";
import { ProductPrice, ProductPriceProps } from "../product-price/product-price";
import { ProductTitle, ProductTitleProps } from "../product-title/product-title";
import "./styles.scss";

type ProductInfoPosition = "bottom" | "right";
type ProductImagePropsForProduct = Partial<Pick<ProductImageProps, "imageURL" | "srcset">>;
type ProductPricePropsForProduct = Pick<ProductPriceProps, "currency" | "price">;
type ProductTitlePropsForProduct = Pick<ProductTitleProps, "title">;

export interface ProductProps
  extends ProductImagePropsForProduct,
    ProductPricePropsForProduct,
    ProductTitlePropsForProduct {
  infoPosition: ProductInfoPosition;
  imageSize: ProductImageProps['size'];
}

export function Product(props: ProductProps) {
  const isInfoPositionBottom = props.infoPosition === "bottom";
  const isInfoPositionRight = props.infoPosition === "right";

  return (
    <div className={clsx("d-flex", { "flex-column align-items-center": isInfoPositionBottom })}>
      <ProductImage
        className={clsx({ "mb-7": isInfoPositionBottom })}
        imageURL={props.imageURL}
        srcset={props.srcset}
        size={props.imageSize}
      />
      <div className={clsx({'d-flex flex-column align-items-start ml-21': isInfoPositionRight})}>
        <ProductTitle className={clsx({ "mb-12": isInfoPositionBottom })} title={props.title} />
        <ProductPrice currency={props.currency} price={props.price} />
      </div>
    </div>
  );
}
