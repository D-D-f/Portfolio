import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className="contact">
      <ul className={classes.contact_li}>
        .contact {"{"}
        <li>
          email:{" "}
          <a href="mailto:defreitas-david@outlook.fr">
            defreitas-david@outlook.fr
          </a>
        </li>
        <li>
          linkedin:{" "}
          <a href="https://www.linkedin.com/in/david-de-freitas-a85467206/">
            David de Freitas
          </a>
        </li>
        {"}"}
      </ul>
    </div>
  );
};

export default Contact;
