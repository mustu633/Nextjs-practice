// These components are not treated as route b/c we make them outside the /app folder.

"use client";

import { usePathname } from "next/navigation";

function Navbar() {

    const navItems = [
        {
            label: "About us",
            path: "/about"
        },
        {
            label: "Blogs",
            path: "/blogs"
        },
        {
            label: "Profile",
            path: "/profile"
        },
    ]


    const currPath = usePathname(); // It is used to get the current path

    return (
        <>
            <h1>This is the Navbar component</h1>
            <p>
                {
                    navItems.map((item, index) =>
                        <span key={index} className={((item.path === currPath) && (item.path !== "/")) ? "active" : null}>{item.label}</span>
                    )
                }
            </p>
        </>
    )
}

export default Navbar;