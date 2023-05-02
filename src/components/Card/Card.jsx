import Badge from "../Badge/Badge";
import classes from "./Card.module.css";

const Card = ({ img, title, langage, github }) => {
  const allLangages = langage?.map((code, id) => {
    return <Badge key={id} langage={code} />;
  });
  return (
    <div className={classes.Card}>
      <img src={img} alt="image site" />
      <h2>{title}</h2>
      <div className={classes.link}>
        <a className={classes.link_github} href={github}>
          <img src="./src/assets/icon/github_icon.svg" alt="logo github" />
        </a>
        <a className={classes.link_github} href="">
          <img
            className={classes.link_link}
            src="./src/assets/icon/link_icon.svg"
            alt="logo link"
          />
        </a>
      </div>
      <p className={classes.allLangage}>{allLangages}</p>
    </div>
  );
};

export default Card;
