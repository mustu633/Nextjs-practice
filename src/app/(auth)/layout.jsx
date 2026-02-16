// we group our routes as auth and pages to implement the concept of multiple root layouts now auth group layouts have only footer and pages group layout have both Navbar and footer 

import Footer from "@/components/common/Footer";
import "../../styling/global.css";

export const metadata = {
  title: "Hello-world | (from auth route group)",
  description: "This is route is from auth route group.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
