import classes from "./Explorer.module.css";
import { Link } from "react-router-dom";
import { PageContext } from "../../context/Page-context";
import { useContext } from "react";
const Explorer = () => {
  const { changePage } = useContext(PageContext);
  return (
    <nav className={classes.nav}>
      <p>EXPLORER</p>
      <ul className={classes.navPage}>
        <li onClick={() => changePage("home")}>
          <Link to="/">
            <img
              className={classes.icon}
              src="./assets/icon/react.svg"
              alt="icone react"
            />
            home.jsx
          </Link>
        </li>
        <li onClick={() => changePage("about")}>
          <Link to="/about">
            <img
              className={classes.icon}
              src="./assets/icon/html_icon.svg"
              alt="icone html"
            />
            about.html
          </Link>
        </li>
        <li onClick={() => changePage("contact")}>
          <Link to="/contact">
            <img
              className={classes.icon}
              src="./assets/icon/css_icon.svg"
              alt="icone css"
            />
            contact.css
          </Link>
        </li>
        <li onClick={() => changePage("projects")}>
          <Link to="/projects">
            <img
              className={classes.icon}
              src="./assets/icon/js_icon.svg"
              alt="icone javascript"
            />
            projects.js
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Explorer;
