import classes from "./Contact.module.css";
import { ThemeContext } from "../../context/Theme-context";
import { useContext } from "react";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={classes.section}>
      <ul>
        <li>.socials {"{"} </li>
        <ul className={classes.ul_contact}>
          <li>
            email:
            <a
              href="mailto:daviddefreitas0192@gmail.com"
              style={{ color: theme.border }}
            >
              daviddefreitas0192@gmail.com
            </a>
            ;
          </li>
          <li>
            linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/david-de-freitas-a85467206/"
              style={{ color: theme.border }}
            >
              David de Freitas
            </a>
            ;
          </li>
          <li>
            github:{" "}
            <a href="https://github.com/D-D-f" style={{ color: theme.border }}>
              D-D-f
            </a>
            ;
          </li>
        </ul>
        <li>{"}"}</li>
      </ul>
    </section>
  );
};

export default Contact;
