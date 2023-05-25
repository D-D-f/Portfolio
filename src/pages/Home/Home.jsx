import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section
      className={`${classes.home} flex directionColumn justifyContentCenter alignItemsCenter`}
    >
      <div
        className={`${classes.homeTxt} flex directionColumn alignItemsCenter`}
      >
        <p>{"Hello, moi c'est David !"}</p>
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
      <div className={classes.allBtn}>
        <Link to="/projects">
          <button>Voir mon travail</button>
        </Link>
        <Link to="/contact">
          <button>Me contacter</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
