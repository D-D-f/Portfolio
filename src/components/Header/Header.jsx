import { useState } from "react";
import classes from "./Header.module.css";
import Themes from "./Themes/Themes";
import ListeNav from "./ListeNav/ListeNav";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const burgerHandler = () => {
    setBurger(!burger);
  };

  return (
    <>
      <header className={classes.Header}>
        <div className="logo">
          <h1>Développeur Web</h1>
          <span className={classes.logo}>DDf</span>
        </div>

        <nav className={classes.header_nav}>
          <ListeNav />
        </nav>
        <div className={`${classes.themes} ${burger ? classes.active : ""}`}>
          <Themes />
        </div>
        <div
          onClick={burgerHandler}
          className={`${classes.burger} ${burger ? classes.active : ""}`}
        >
          <span></span>
        </div>
      </header>
      <div className={`${classes.headband} ${burger ? classes.active : ""}`}>
        <ListeNav />
        <div className={classes.themes_headband}>
          <Themes />
        </div>
      </div>
    </>
  );
};

export default Header;
