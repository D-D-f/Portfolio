import classes from "../Header.module.css";

const Skill = ({ langage, icon, xp, lvl }) => {
  return (
    <li className={classes.experience}>
      <div className={classes.langage}>
        <strong>
          {langage} {icon}
        </strong>
        <div>{xp}</div>
      </div>
      <div className={classes.exp}>
        <div
          style={{ width: `${lvl}`, border: "1px solid var(--border-color)" }}
        ></div>
      </div>
    </li>
  );
};

export default Skill;
