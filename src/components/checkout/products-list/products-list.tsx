import { Product as ProductComponent } from "../../products/product/product";
import { Product as ProductInterface } from "../../products/products/services/products.http.service";
import "./styles.scss";

interface ProductsListProps {
  products: ProductInterface[];
}

export function ProductsList(props: ProductsListProps) {
  return (
    <>
      {props.products.map(product => (
        <div className="product-item">
          <ProductComponent
            currency={product.currency}
            imageSize="sm"
            infoPosition="right"
            price={product.price}
            title={product.name}
          />
        </div>
      ))}
    </>
  );
}
