// Example for dynamic route with client component

"use client";

import { useState } from "react";

export default function ProductClient({ product }) {
  const [count, setCount] = useState(1);

  return (
    <>
      <h2>Product ID: {product.id}</h2>
      <h3>Name: {product.name}</h3>
      <p>Price: ${product.price}</p>

      <hr />

      <h4>Quantity: {count}</h4>
      <button onClick={() => setCount(count + 1)}>
        Increase Quantity
      </button>
    </>
  );
}
