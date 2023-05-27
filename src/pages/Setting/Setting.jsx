import { useContext } from "react";
import classes from "./Setting.module.css";
import { ThemeContext } from "../../context/Theme-context";

const Setting = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <section className={classes.section}>
      <h3>Choix du thème</h3>
      <div className={classes.containerTheme}>
        <div className={classes.theme}>
          <img
            className={classes.icon}
            src="assets/img/ayu.webp"
            alt="icon ayu"
          />
          <button
            className={classes.btnTheme}
            onClick={() => changeTheme("ayu")}
          >
            Ayu
          </button>
        </div>

        <div className={classes.theme}>
          <img
            className={classes.icon}
            src="assets/img/dracula.webp"
            alt="icon dracula"
          />
          <button
            className={classes.btnTheme}
            onClick={() => changeTheme("dracula")}
          >
            Dracula
          </button>
        </div>

        <div className={classes.theme}>
          <img
            className={classes.icon}
            src="assets/img/nord.webp"
            alt="icon nord"
          />
          <button
            className={classes.btnTheme}
            onClick={() => changeTheme("nord")}
          >
            Nord
          </button>
        </div>
      </div>
    </section>
  );
};

export default Setting;
