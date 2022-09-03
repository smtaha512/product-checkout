import { ProductImageProps } from "../product-image/product-image";
import { ProductPriceProps } from "../product-price/product-price";
import { ProductTitleProps } from "../product-title/product-title";

type ProductImagePropsForProduct = Partial<Pick<ProductImageProps, "imageURL" | "srcset">>;
type ProductPricePropsForProduct = Pick<ProductPriceProps, "currency" | "price">;
type ProductTitlePropsForProduct = Pick<ProductTitleProps, "title">;

export interface ProductWithInfoPositionProps
  extends ProductImagePropsForProduct,
    ProductPricePropsForProduct,
    ProductTitlePropsForProduct {
  imageSize: ProductImageProps["size"];
}
