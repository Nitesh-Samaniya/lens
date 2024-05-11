"use client"
import React from "react";

export const ThemeContext = React.createContext();
const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false);

  function changeTheme() {
    setIsDark(!isDark);
  }

  const providerState = {
    isDark: isDark,
    changeTheme: changeTheme,
  };
  return (
    <ThemeContext.Provider value={providerState}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
