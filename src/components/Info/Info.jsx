import classes from "./Info.module.css";

const Info = ({ contact }) => {
  return <div className={classes.info}>{contact}</div>;
};

export default Info;
