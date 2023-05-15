import { Footer, Navbar, NoSSR } from ".";

import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
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
