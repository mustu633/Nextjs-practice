// Dynamic route example:

"use client"

import { useParams } from "next/navigation";

function singleProduct() {
    const { productId } = useParams();
    return (
        <>
            <h2>This is detail page for singleProduct : {productId} .</h2>
        </>
    )
}


export default singleProduct;