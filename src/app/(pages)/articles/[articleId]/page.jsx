// Example to understand difference btw params and searchParams in server component (we use async await method to get values from params and searchParams in server components)

import Link from "next/link";

async function singleArticle({ params, searchParams }) {
    const {articleId} = await params;

    const {lang="eng"} = await searchParams;

    return (
        <>
            <h3>This is the singleArticle route for article : {articleId}</h3>
            <span>Current language : {lang}</span>
            <hr />
            <ul>
                <li><Link href={`/articles/${articleId}?lang=eng`}>Read in English</Link></li>
                <li><Link href={`/articles/${articleId}?lang=urd`}>Read in Urdu</Link></li>
                <li><Link href={`/articles/${articleId}?lang=arb`}>Read in Arabic</Link></li>
                <li><Link href={`/articles/${articleId}?lang=frs`}>Read in Farsi</Link></li>
            </ul>
        </>
    )
}

export default singleArticle;