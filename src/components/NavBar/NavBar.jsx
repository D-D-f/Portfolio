import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <Link>
          <li>
            <img
              className={classes.iconNav}
              src="./src/assets/icon/react.svg"
              alt="icon react"
            />{" "}
            home.jsx
          </li>
        </Link>
        <Link to="/about">
          <li>
            <img
              className={classes.iconNav}
              src="./src/assets/icon/html_icon.svg"
              alt="icon react"
            />{" "}
            about.html
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <img
              className={classes.iconNav}
              src="./src/assets/icon/css_icon.svg"
              alt="icon react"
            />{" "}
            contact.css
          </li>
        </Link>
        <Link to="/projects">
          <li>
            <img
              className={classes.iconNav}
              src="./src/assets/icon/js_icon.svg"
              alt="icon react"
            />{" "}
            projets.js
          </li>
        </Link>
        <Link to="/github">
          <li>
            <img
              className={classes.iconNav}
              src="./src/assets/icon/markdown_icon.svg"
              alt="icon react"
            />{" "}
            github.md
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
