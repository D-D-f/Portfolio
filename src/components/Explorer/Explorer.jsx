import classes from "./Explorer.module.css";

const Explorer = () => {
  return (
    <nav className={classes.nav}>
      <p>EXPLORER</p>
      <ul className={classes.navPage}>
        <li>
          <img
            className={classes.icon}
            src="./src/assets/icon/react.svg"
            alt="icone react"
          />
          home.jsx
        </li>
        <li>
          <img
            className={classes.icon}
            src="./src/assets/icon/html_icon.svg"
            alt="icone html"
          />
          about.html
        </li>
        <li>
          <img
            className={classes.icon}
            src="./src/assets/icon/css_icon.svg"
            alt="icone css"
          />
          contact.css
        </li>
        <li>
          <img
            className={classes.icon}
            src="./src/assets/icon/js_icon.svg"
            alt="icone javascript"
          />
          projects.jsx
        </li>
        <li>
          <img
            className={classes.icon}
            src="./src/assets/icon/markdown_icon.svg"
            alt="icone markdown"
          />
          github.md
        </li>
      </ul>
    </nav>
  );
};

export default Explorer;
