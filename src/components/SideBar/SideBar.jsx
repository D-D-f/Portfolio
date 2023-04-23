import ImgIcon from "../ImgIcon/ImgIcon";
const SideBar = () => {
  return (
    <aside>
      <div>
        <ImgIcon icon="./src/assets/icon/files_icon.svg" alt="icone file" />
        <ImgIcon icon="./src/assets/icon/github_icon.svg" alt="icone github" />
        <ImgIcon icon="./src/assets/icon/code_icon.svg" alt="icone code" />
        <ImgIcon
          icon="./src/assets/icon/contact_icon.svg"
          alt="icone contact"
        />
      </div>
      <div></div>
    </aside>
  );
};

export default SideBar;
