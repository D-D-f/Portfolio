import classes from "./SideBar.module.css";
import ImgIcon from "../ImgIcon/ImgIcon";
const SideBar = () => {
  return (
    <aside className={classes.aside}>
      <div className={classes.aside_icon}>
        <ImgIcon icon="files_icon.svg" alt="icone file" />
        <ImgIcon icon="github_icon.svg" alt="icone github" />
        <ImgIcon icon="code_icon.svg" alt="icone code" />
        <ImgIcon icon="contact_icon.svg" alt="icone contact" />
      </div>
      <div className={classes.aside_sideBar}>
        <ImgIcon icon="profil_icon.svg" alt="icone profil" />
        <ImgIcon icon="setting_icon.svg" alt="icone paramètre" />
      </div>
    </aside>
  );
};

export default SideBar;
