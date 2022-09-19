import clsx from "clsx";
import "./styles.scss";
export interface ProductTitleProps {
  title: string;
  className?: string;
}

export function ProductTitle(props: ProductTitleProps) {
  return <p className={clsx("product-title text-dark-gray font-weight-700 font-14px", props.className)}>
    {props.title}
  </p>
}