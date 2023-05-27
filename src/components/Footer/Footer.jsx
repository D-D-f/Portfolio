import classes from "./Footer.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <div>
          <FontAwesomeIcon icon="fa-code-branch" /> main
        </div>
      </div>
      <div className={classes.langage}>
        <div className={classes.marginR}>{`{ } JavaScript JSX`}</div>
        <div className={classes.marginR}>
          <FontAwesomeIcon icon="fa-solid fa-check" /> Prettier
        </div>
        <div>
          <FontAwesomeIcon icon="fa-bell" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
