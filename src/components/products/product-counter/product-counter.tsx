import React, { useState } from "react";
import { ProductCountDisplay } from "../product-count-display/product-count-display";
import { ProductDecrementerButton } from "../scenarios/product-decrementer-button/product-decrementer-button";
import { ProductIncrementorButton } from "../scenarios/product-incrementor-button/product-incrementor-button";
import "./styles.scss";

export interface ProductCounterProps {
  children: React.ReactElement;
}

export function ProductCounter(props: ProductCounterProps) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        {props.children}
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex justify-content-space-evenly w-100">
            <ProductDecrementerButton disabled={count < 1} onClick={() => setCount(count - 1)} />
            <ProductCountDisplay count={count} />
            <ProductIncrementorButton disabled={count > 10} onClick={() => setCount(count + 1)} />
          </div>
          <p className="product-counter-text m-0">quantity</p>
        </div>
      </div>
    </>
  );
}
