import Badge from "../Badge/Badge";
import classes from "./Card.module.css";

const Card = ({ img, title, langage, github }) => {
  const allLangages = langage?.map((code, id) => {
    return <Badge key={id} langage={code} />;
  });
  return (
    <div className={classes.Card}>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>Github: {github}</p>
      <p style={{ display: "flex" }}>{allLangages}</p>
    </div>
  );
};

export default Card;
