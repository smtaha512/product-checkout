import clsx from "clsx";
import "./styles.scss";

export type ProductImageSize = "sm" | "lg";
type ProductImageDimension<T extends ProductImageSize> = T extends "sm" ? 36 : 69;

export interface ProductImageProps {
  imageURL: string;
  alt: string;
  srcset: string;
  size: ProductImageSize;
  className: string;
}

function getDimensionBySize<T extends ProductImageSize, U extends ProductImageDimension<T>>(
  size: T
): U {
  return (size === "sm" ? 36 : 69) as U;
}

export function ProductImage(props: Partial<ProductImageProps>) {
  const DEFAULT_SIZE: ProductImageSize = "lg";
  const dimension = getDimensionBySize(props.size ?? DEFAULT_SIZE);

  return (
    <div
      className={clsx("border border-rounded border-very-light-blue", props.className, {
        "bg-white": !props.imageURL,
      })}
      style={{ height: dimension, width: dimension }}
    >
      {props.imageURL && (
        <img src={props.imageURL} alt={props.alt} {...(props.srcset && { srcset: props.srcset })} />
      )}
    </div>
  );
}
