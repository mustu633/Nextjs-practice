import { products } from "../_data/data";
import Link from "next/link";

function Products() {

    return (
        <>
            <h2>This is the list of Products.</h2>
            <ul>
                {products.map((item) =>
                    <li key={item.id}><Link href={`/products/${item.name}`}>{item.name}</Link></li>
                )}
            </ul>
            <hr />
            {/* due to replace keyword when hit back button it take use to home rout "/" */}
            <ul>
                <li><Link href={"/products/phone"} replace>Phone</Link></li>
            </ul>
        </>
    )
}


export default Products;