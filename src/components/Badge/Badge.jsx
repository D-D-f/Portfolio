import classes from "./Badge.module.css";

const Badge = ({ langage }) => {
  return <span className={classes.badge}>{langage}</span>;
};

export default Badge;
