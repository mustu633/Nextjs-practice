// Example for dynamic route with client component

"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ProductClient({ product }) {
  const [count, setCount] = useState(1);

  // Example to understand difference btw params and searchParams in client component (we use "useParams and useSearchParams" hooks from react to get values of params and searchParams in client components as it does not support async await method.)
  const { productId } = useParams()
  const { lang } = useSearchParams()

  console.log(`productId : ${productId}`);
  console.log(`Lang : ${lang}`);

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
