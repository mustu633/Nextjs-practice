import { articles } from "../_data/data";
import Link from "next/link";

function Articles() {
    return (
        <>
            <h3>This is the Articles route</h3>
            <ul>
                {articles.map((item)=>
                    <li key={item.id}><Link href={`/articles/${item.id}`}>{item.id}</Link></li>
                )}
            </ul>
        </>
    )
}

export default Articles;