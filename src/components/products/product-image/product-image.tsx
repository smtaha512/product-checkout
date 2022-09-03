import clsx from "clsx";
import "./styles.scss";

export interface ProductImageProps {
  imageURL: string;
  alt: string;
  srcset: string;
  height: number;
  width: number;
}

const DEFAULT_DIMENSION = 69;

export function ProductImage(props: Partial<ProductImageProps>) {
  return (
    <div
      className={clsx("border border-rounded border-purple", { "bg-white": !props.imageURL })}
      style={{
        height: props.height ?? DEFAULT_DIMENSION,
        width: props.width ?? DEFAULT_DIMENSION,
      }}
    >
      {props.imageURL && (
        <img src={props.imageURL} alt={props.alt} {...(props.srcset && { srcset: props.srcset })} />
      )}
    </div>
  );
}
