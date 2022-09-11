import { CartButton } from "../../cart/cart-button";
import { ProductCounter } from "../product-counter/product-counter";
import { Product } from "../product/product";
import { useFetchProduct } from "./hooks/use-fetch-products.hook";
import "./styles.scss";

export interface ProductsProps {}

export function Products(props: ProductsProps) {
  const { data } = useFetchProduct();
  return (
    <div className="products-page">
      <header>
        <h1>Products</h1>
      </header>
      <main className="products-section">
        {data.map(product => (
          <ProductCounter key={product.id}>
            <Product
              currency={product.currency}
              imageSize="lg"
              infoPosition="bottom"
              price={product.price}
              title={product.name}
            />
          </ProductCounter>
        ))}
      </main>
      <footer className="products-footer">
        <CartButton itemsCount={1} onClick={() => {}}></CartButton>
      </footer>
    </div>
  );
}
