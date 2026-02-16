// These components are not treated as route b/c we make them outside the /app folder.
import Link from "next/link";

function Footer() {

    return (
        <>
            <h1>This is the Footer component</h1>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
            </ul>
        </>
    )
}

export default Footer;