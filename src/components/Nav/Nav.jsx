import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav_main}>
      <ul>
        <li>home.jsx</li>
        <li>about.html</li>
        <li>contact.css</li>
        <li>projects.js</li>
        <li>github.md</li>
      </ul>
    </nav>
  );
};

export default Nav;
