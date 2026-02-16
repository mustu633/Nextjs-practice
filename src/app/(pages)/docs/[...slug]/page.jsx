// catch all example:

"use client"

import { useParams } from "next/navigation";

function docsInner() {
    const { slug } = useParams();
    if (slug?.length === 4) {
        return (
            <>
                <h3>This is the Detail note for Grade : {slug[0]} and Subjet : {slug[1]} and Unit : {slug[2]} and Topic : {slug[3]}. </h3>
            </>
        )
    }
    if (slug?.length === 3) {
        return (
            <>
                <h3>This is the Detail note for Grade : {slug[0]} and Subjet : {slug[1]} and Unit : {slug[2]}. </h3>
            </>
        )
    }
    if (slug?.length === 2) {
        return (
            <>
                <h3>This is the Detail note for Grade : {slug[0]} and Subjet : {slug[1]}.</h3>
            </>
        )
    }
    if (slug?.length === 1) {
        return (
            <>
                <h3>This is the Detail note for Grade : {slug[0]}.</h3>
            </>
        )
    }
    return (
        <>
            <h3>This is the docs list.</h3>
        </>
    )

}

export default docsInner;