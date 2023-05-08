import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.nav_main}>
      <ul>
        <li>
          <Link to="/">
            <img
              className={classes.icon}
              src="./src/assets/icon/react.svg"
              alt="icone react"
            />
            home.jsx
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img
              className={classes.icon}
              src="./src/assets/icon/html_icon.svg"
              alt="icone html"
            />
            about.html
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img
              className={classes.icon}
              src="./src/assets/icon/css_icon.svg"
              alt="icone css"
            />
            contact.css
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <img
              className={classes.icon}
              src="./src/assets/icon/js_icon.svg"
              alt="icone javascript"
            />
            projects.js
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
