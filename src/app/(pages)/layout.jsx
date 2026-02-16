import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export const metadata = {
  title: {
    default: "hello-world",
    template: "%s | hello-world",  // it is display after the title which we add to a specific page eg Blogs | hello-world
  },
  description: "This route is from pages route group",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
