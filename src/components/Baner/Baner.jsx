import classes from "./Baner.module.css";

const Baner = ({ img }) => {
  const urlImg = {
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: `250px`,
    width: "100%",
  };
  return (
    <div style={{ ...urlImg }}>
      <div className={classes.bg}></div>
    </div>
  );
};

export default Baner;
