import classes from "./ImgIcon.module.css";

const ImgIcon = ({ icon, alt }) => {
  return (
    <img
      className={classes.icon}
      src={`./public/assets/icon/${icon}`}
      alt={alt}
    />
  );
};

export default ImgIcon;
