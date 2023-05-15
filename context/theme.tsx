import React, { createContext, useCallback, useContext } from "react";

import { ThemeContextType } from "../@types/types";

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type ThemeProviderProps = {
  children: React.ReactNode;
};
function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<"dark" | "light">("light");

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme as "dark" | "light");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const handleTheme = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
