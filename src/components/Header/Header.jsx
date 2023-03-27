import { useState } from "react";
import classes from "./Header.module.css";
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
        <div
          onClick={burgerHandler}
          className={`${classes.burger} ${burger ? classes.active : ""}`}
        >
          <span></span>
        </div>
      </header>
      <div className={`${classes.headband} ${burger ? classes.active : ""}`}>
        <ListeNav />
      </div>
    </>
  );
};

export default Header;
