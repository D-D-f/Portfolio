import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const allThemes = {
    ayu: {
      background: "#212733",
      color: "#B3B454",
      border: "#FFCF9D",
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

  const [theme, setTheme] = useState(allThemes.ayu);

  const changeTheme = (value) => {
    setTheme(allThemes[value]);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
