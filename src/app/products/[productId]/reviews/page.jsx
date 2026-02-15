"use client"
const { useParams } = require("next/navigation")



function Reviews() {
    const { productId } = useParams();
    return (
        <>
            <h3>This is Review list for product : {productId}</h3>
        </>
    )
}

export default Reviews;