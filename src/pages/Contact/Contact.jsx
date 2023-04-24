import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <ul>
      <li>.socials {"{"} </li>
      <ul className={classes.ul_contact}>
        <li>
          email: <a href="">daviddefreitas0192@gmail.com</a>
        </li>
        <li>
          linkedin: <a href="">David de Freitas</a>
        </li>
        <li>
          github: <a href="">d-d-f</a>
        </li>
      </ul>
      <li>{"}"}</li>
    </ul>
  );
};

export default Contact;
