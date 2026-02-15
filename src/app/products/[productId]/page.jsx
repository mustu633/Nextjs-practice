// Dynamic route example:

"use client"

import { useParams } from "next/navigation";

function SingleProduct() {
    const { productId } = useParams();
    return (
        <>
            <h2>This is detail page for SingleProduct : {productId} .</h2>
        </>
    )
}


export default SingleProduct;