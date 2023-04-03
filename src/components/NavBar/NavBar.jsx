import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <img
            className={classes.iconNav}
            src="./src/assets/icon/react.svg"
            alt="icon react"
          />{" "}
          home.jsx
        </li>
        <li>
          <img
            className={classes.iconNav}
            src="./src/assets/icon/html_icon.svg"
            alt="icon react"
          />{" "}
          about.html
        </li>
        <li>
          <img
            className={classes.iconNav}
            src="./src/assets/icon/css_icon.svg"
            alt="icon react"
          />{" "}
          contact.css
        </li>
        <li>
          <img
            className={classes.iconNav}
            src="./src/assets/icon/js_icon.svg"
            alt="icon react"
          />{" "}
          projets.js
        </li>
        <li>
          <img
            className={classes.iconNav}
            src="./src/assets/icon/markdown_icon.svg"
            alt="icon react"
          />{" "}
          github.md
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
