import classes from "./Home.module.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className={classes.Home}>
      <p>Hello, moi c'est David !</p>
      <p>
        Je suis Développeur{" "}
        <Typewriter
          words={["Front-end !", "Back-end !", "Full stack !"]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </div>
  );
};

export default Home;
