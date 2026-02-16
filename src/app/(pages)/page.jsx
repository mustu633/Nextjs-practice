import Link from "next/link";

function Home() {
  return (
    <>
      <h1>This is Home</h1>
      <ul>
        <li><Link href={"/profile"}>Profile</Link></li>
        <li><Link href={"/dashboard"}>Dashboard</Link></li>
        <li><Link href={"/blogs"}>Blogs</Link></li>
        <li><Link href={"/docs"}>Docs</Link></li>
        <li><Link href={"/products"}>Products</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/_test"}>_test</Link></li>
      </ul>
      <hr />
      <ul>
        <li><Link href={"/login"}>Login</Link></li>
        <li><Link href={"/register"}>Register</Link></li>
        <li><Link href={"/forgot-password"}>Forgot-Password</Link></li>
      </ul>
    </>
  );
}

export default Home;