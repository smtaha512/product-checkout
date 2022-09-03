import { ProductImageProps } from "../product-image/product-image";
import { ProductWithBottomInfoPosition } from "../scenarios/product-with-bottom-info-position/product-with-bottom-info-position";
import { ProductWithInfoPositionProps } from "../scenarios/product-with-info-position.props.interface";
import { ProductWithRightInfoPosition } from "../scenarios/product-with-right-info-position/product-with-right-info-position";
import "./styles.scss";

type ProductInfoPosition = "bottom" | "right";

export interface ProductProps extends ProductWithInfoPositionProps {
  infoPosition: ProductInfoPosition;
  imageSize: ProductImageProps["size"];
}

export function Product(props: ProductProps) {
  const { infoPosition, ...propsWithoutInfoPosition } = props;

  const isInfoPositionBottom = infoPosition === "bottom";
  const isInfoPositionRight = infoPosition === "right";

  if (isInfoPositionBottom) {
    return <ProductWithBottomInfoPosition {...propsWithoutInfoPosition} />;
  } else if (isInfoPositionRight) {
    return <ProductWithRightInfoPosition {...propsWithoutInfoPosition} />;
  }

  return null;
}
