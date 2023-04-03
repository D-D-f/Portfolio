import classes from "./Home.module.css";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <section className={classes.container}>
      <nav>
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
      <div className={classes.pages}>
        <Contact />
      </div>
    </section>
  );
};

export default Home;
