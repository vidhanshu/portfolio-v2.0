import Head from "next/head";
import React from "react";

import { useTheme } from "@/context/theme";

function PageWrapperToGetThemes({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div className={theme} id="root">
      <Head>
        <meta name="theme-color" content={theme === "dark" ? "#000" : "#fff"} />
      </Head>

      {children}
    </div>
  );
}

export default PageWrapperToGetThemes;
