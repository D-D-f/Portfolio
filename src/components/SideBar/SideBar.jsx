import classes from "./SideBar.module.css";
import ImgIcon from "../ImgIcon/ImgIcon";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className={classes.aside}>
      <div className={classes.aside_icon}>
        <Link to="/">
          <ImgIcon icon="files_icon.svg" alt="icone file" />
        </Link>
        <Link to="/projects">
          <ImgIcon icon="code_icon.svg" alt="icone code" />
        </Link>
        <Link to="/contact">
          <ImgIcon icon="contact_icon.svg" alt="icone contact" />
        </Link>
      </div>
      <div className={classes.aside_sideBar}>
        <Link to="/about">
          <ImgIcon icon="profil_icon.svg" alt="icone profil" />
        </Link>
        <Link to="/setting">
          <ImgIcon icon="setting_icon.svg" alt="icone paramètre" />
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
