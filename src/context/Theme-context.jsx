import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const allThemes = {
    ayu: {
      background: "black",
      color: "white",
    },
    dracula: {
      background: "white",
      color: "red",
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
