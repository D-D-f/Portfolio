import { useState } from "react";
import classes from "./Carousel.module.css";

const Carousel = ({ arrayImg }) => {
  const [index, setIndex] = useState(0);
  const nextImg = () => {
    if (index === arrayImg.length - 1) {
      setIndex(0);
    } else {
      setIndex((current) => current + 1);
    }
  };
  const previousImg = () => {
    if (index === 0) {
      setIndex(arrayImg.length - 1);
    } else {
      setIndex((current) => current - 1);
    }
  };
  return (
    <div className={classes.Carousel}>
      <div className={classes.arrow}>
        <img
          onClick={previousImg}
          src="./src/assets/icon/previous_icon.svg"
          alt="icon previous"
        />
      </div>
      <img className={classes.img} src={arrayImg[index]} alt="image site" />
      <div className={classes.arrow}>
        <img
          onClick={nextImg}
          src="./src/assets/icon/next_icon.svg"
          alt="icon next"
        />
      </div>
    </div>
  );
};

export default Carousel;
