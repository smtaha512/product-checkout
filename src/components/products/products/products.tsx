import { CartButton } from "../../cart/cart-button";
import { ProductCounter } from "../product-counter/product-counter";
import { Product } from "../product/product";
import "./styles.scss";

export interface ProductsProps {}

export function Products(props: ProductsProps) {
  return (
    <div className="products-page">
      <header><h1>Products</h1></header>
      <main className="products-section">
        {[...new Array(9)].map((_, idx) => (
          <ProductCounter>
            <Product
              currency="THB"
              imageSize="lg"
              infoPosition="bottom"
              price={40}
              title="Product A"
              key={idx}
            />
          </ProductCounter>
        ))}
      </main>
      <footer className="products-footer">
        <CartButton itemsCount={1} onClick={()=>{}}></CartButton>
      </footer>
    </div>
  );
}
