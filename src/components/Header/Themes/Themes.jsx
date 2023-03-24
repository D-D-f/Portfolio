import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import classes from "./Theme.module.css";

const Themes = () => {
  const [themes, setThemes] = useState(false);

  const changeThemeHandler = () => {
    setThemes(!themes);
  };

  return (
    <div className={classes.iconTheme}>
      {themes !== false ? (
        <FaSun onClick={changeThemeHandler} />
      ) : (
        <FaMoon onClick={changeThemeHandler} />
      )}
    </div>
  );
};

export default Themes;
