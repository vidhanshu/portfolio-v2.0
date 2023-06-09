import { Footer, Navbar, NoSSR } from ".";

import { useEffect } from "react";
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
      <NoSSR>
        <Navbar />
      </NoSSR>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
