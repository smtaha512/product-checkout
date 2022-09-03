import "./styles.scss";
export interface ProductTitleProps {
  title: string
}

export function ProductTitle(props: ProductTitleProps) {
  return <p className="product-title text-dark-gray">
    {props.title}
  </p>
}