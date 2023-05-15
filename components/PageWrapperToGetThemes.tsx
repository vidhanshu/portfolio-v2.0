import React from "react";
import { useTheme } from "@/context/theme";

function PageWrapperToGetThemes({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div className={theme} id="root">
      {children}
    </div>
  );
}

export default PageWrapperToGetThemes;
