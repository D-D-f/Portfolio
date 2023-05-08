import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section>
      <ul>
        <li>.socials {"{"} </li>
        <ul className={classes.ul_contact}>
          <li>
            email:
            <a href="mailto:daviddefreitas0192@gmail.com">
              daviddefreitas0192@gmail.com
            </a>
          </li>
          <li>
            linkedin:{" "}
            <a href="https://www.linkedin.com/in/david-de-freitas-a85467206/">
              David de Freitas
            </a>
          </li>
          <li>
            github: <a href="https://github.com/D-D-f">D-D-f</a>
          </li>
        </ul>
        <li>{"}"}</li>
      </ul>
    </section>
  );
};

export default Contact;
