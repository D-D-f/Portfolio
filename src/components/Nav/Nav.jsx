import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.nav_main}>
      <ul>
        <li>
          <Link to="/">home.jsx</Link>
        </li>
        <li>
          <Link to="/about">about.html</Link>
        </li>
        <li>
          <Link to="/contact">contact.css</Link>
        </li>
        <li>
          <Link to="/projects">projects.js</Link>
        </li>
        <li>
          <Link to="/github">github.md</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
