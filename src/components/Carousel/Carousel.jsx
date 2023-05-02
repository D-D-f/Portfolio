import { useState } from "react";
import classes from "./Carousel.module.css";

const Carousel = ({ arrayImg }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className={classes.Carousel}>
      <div>
        <img src="./src/assets/icon/previous_icon.svg" alt="icon previous" />
      </div>
      <img src="./src/assets/img/portfolio_sophieBruel.png" alt="image site" />
      <div>
        <img src="./src/assets/icon/next_icon.svg" alt="icon next" />
      </div>
    </div>
  );
};

export default Carousel;
