import { useState } from "react";
import classes from "./Header.module.css";
import Themes from "./Themes/Themes";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const burgerHandler = () => {
    setBurger(!burger);
  };

  return (
    <header className={classes.Header}>
      <div className="logo">LOGO</div>
      <nav className={classes.header_nav}>
        <ul>
          <li>Accueil</li>
          <li>Compétences</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className={classes.themes}>
        <Themes />
      </div>
      <div
        onClick={burgerHandler}
        className={`${classes.burger} ${burger ? classes.active : ""}`}
      >
        <span></span>
      </div>
    </header>
  );
};

export default Header;
