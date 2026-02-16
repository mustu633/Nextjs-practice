// Nested dynamic route example:

"use client"

import { useParams } from "next/navigation";

function singleReview() {
    const { productId, reviewId } = useParams();
    return (
        <>
            <h2>This is detail page for SingleProduct : {productId} and its Review : {reviewId}.</h2>
        </>
    )
}


export default singleReview;