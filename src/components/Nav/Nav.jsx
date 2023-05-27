import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/Theme-context";
import { PageContext } from "../../context/Page-context";
import { useContext } from "react";

const Nav = () => {
  const { changePage, page } = useContext(PageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={classes.nav_main}>
      <ul>
        <Link to="/">
          <li
            style={{
              borderTop: page === "home" ? `1px solid ${theme.border}` : "",
            }}
            onClick={() => changePage("home")}
          >
            <img
              className={classes.icon}
              src="./assets/icon/react.svg"
              alt="icone react"
            />
            home.jsx
          </li>
        </Link>
        <Link to="/about">
          <li
            style={{
              borderTop: page === "about" ? `1px solid ${theme.border}` : "",
            }}
            onClick={() => changePage("about")}
          >
            <img
              className={classes.icon}
              src="./assets/icon/html_icon.svg"
              alt="icone html"
            />
            about.html
          </li>
        </Link>
        <Link to="/contact">
          <li
            style={{
              borderTop: page === "contact" ? `1px solid ${theme.border}` : "",
            }}
            onClick={() => changePage("contact")}
          >
            <img
              className={classes.icon}
              src="./assets/icon/css_icon.svg"
              alt="icone css"
            />
            contact.css
          </li>
        </Link>
        <Link to="/projects">
          <li
            style={{
              borderTop: page === "projects" ? `1px solid ${theme.border}` : "",
            }}
            onClick={() => changePage("projects")}
          >
            <img
              className={classes.icon}
              src="./assets/icon/js_icon.svg"
              alt="icone javascript"
            />
            projects.js
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
