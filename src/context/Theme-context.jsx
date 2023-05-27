import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const allThemes = {
    ayu: {
      background: "#0a0e14",
      color: "#efefef",
      border: "#e6b450",
    },
    dracula: {
      background: "#282a36",
      color: "#f1fa8c",
      border: "#bd93f9",
    },
    nord: {
      background: "#2e3440",
      color: "#a3be8c",
      border: "#5e81ac",
    },
  };

  const getTheme = localStorage.getItem("theme")
    ? allThemes[localStorage.getItem("theme")]
    : allThemes.ayu;

  const [theme, setTheme] = useState(getTheme);

  const changeTheme = (value) => {
    setTheme(allThemes[value]);
    localStorage.setItem("theme", value);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
