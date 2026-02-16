// Example for dynamic metadata with server component

import ProductClient from "./ProductClient";

// Dynamic Metadata
export async function generateMetadata({ params }) {
  const { productId } = await params;

  return {
    title: `Product ${productId}`,
    description: `Details for product ${productId}`,
  };
}

// Server Component
export default async function SingleProduct({ params }) {
  const { productId } = await params;

  const product = {
    id: productId,
    name: `Product ${productId}`,
    price: 1000,
  };

  return <ProductClient product={product} />;
}
