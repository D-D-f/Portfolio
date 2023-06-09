import classes from "./SideBar.module.css";
import ImgIcon from "../ImgIcon/ImgIcon";
import { Link } from "react-router-dom";
import { PageContext } from "../../context/Page-context";
import { ThemeContext } from "../../context/Theme-context";
import { useContext } from "react";

const SideBar = () => {
  const { page } = useContext(PageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <aside className={classes.aside}>
      <div className={classes.aside_icon}>
        <Link
          style={{
            marginBottom: "10px",
            borderLeft: page === "/" ? `1px solid ${theme.border}` : null,
          }}
          to="/"
        >
          <ImgIcon icon="files_icon.svg" alt="icone file" />
        </Link>

        <Link
          style={{
            marginBottom: "10px",
            borderLeft:
              page === "/projects" ? `1px solid ${theme.border}` : null,
          }}
          to="/projects"
        >
          <ImgIcon icon="code_icon.svg" alt="icone code" />
        </Link>
        <Link
          style={{
            marginBottom: "10px",
            borderLeft:
              page === "/contact" ? `1px solid ${theme.border}` : null,
          }}
          to="/contact"
        >
          <ImgIcon icon="contact_icon.svg" alt="icone contact" />
        </Link>
      </div>
      <div className={classes.aside_sideBar}>
        <Link style={{ marginBottom: "10px" }} to="/about">
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
