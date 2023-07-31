import { useEffect } from "react";

import Footer from "./Footer";
import Navbar from "./Header";
import { useTheme } from "@/context/theme";
import NoSSR from "./NoSSR";

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
      <NoSSR>
        <Navbar />
      </NoSSR>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
