import { useEffect } from "react";

import Footer from "./Footer";
import Navbar from "./Header";
import { useTheme } from "@/context/theme";

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#0e1724";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
  }, [theme]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
