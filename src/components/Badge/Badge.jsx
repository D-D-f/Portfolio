import classes from "./Badge.module.css";

const Badge = ({ langage }) => {
  console.log(`code: ${langage}`);
  return <span className={classes.badge}>{langage}</span>;
};

export default Badge;
