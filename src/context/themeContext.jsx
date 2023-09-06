import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
