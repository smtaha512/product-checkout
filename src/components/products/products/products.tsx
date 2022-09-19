import { useNavigate } from "react-router-dom";
import { CartButton } from "../../cart/cart-button";
import { Wrapper } from "../../shared/wrapper";
import { ProductCounter } from "../product-counter/product-counter";
import { Product } from "../product/product";
import { useFetchProduct } from "./hooks/use-fetch-products.hook";
import "./styles.scss";

export interface ProductsProps {}

export function Products(props: ProductsProps) {
  const { data } = useFetchProduct();
  const navigate = useNavigate();

  function navigateToCheckout() {
    return navigate('/checkout');
  }

  return (
    <Wrapper
      className="products-page"
      title="Products"
      mainElement={
        <div className="products-section">
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
        </div>
      }
      footerElement={<CartButton itemsCount={1} onClick={navigateToCheckout}></CartButton>}
    />
  );
}
