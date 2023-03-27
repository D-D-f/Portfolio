import Typewriter from "typewriter-effect";
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaSass,
  FaPhp,
} from "react-icons/fa";
import classes from "./Presentation.module.css";

const Presentation = () => {
  return (
    <>
      <section className={classes.Presentation}>
        <div className={classes.apropos}>
          <h2>Bonjour, moi c'est David ! </h2>
          <h3 style={{ display: "flex" }}>
            Je suis développeur
            <span
              style={{
                paddingLeft: "5px",
                fontWeight: "bold",
                color: "var(--primaryColor)",
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Front-end")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Back-end")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Full stack")
                    .start();
                }}
              />
            </span>
          </h3>
          <p
            style={{
              fontSize: "0.5em",
              marginTop: "2em",
              width: "70%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quas
            doloremque repudiandae ipsa perspiciatis distinctio accusamus eos
            ullam quam? Dolore!
          </p>
        </div>
        <div className={classes.image}>
          <img src="src/assets/img/pp.png" alt="image du développeur web Ddf" />

          <div className={classes.langages}>
            <FaHtml5 size={40} color="#e34c26" />
            <FaCss3Alt size={40} color="#264de4" />
            <FaSass size={40} color="#cc6699" />
            <FaJs size={40} color="#f0db4f" />
            <FaReact size={40} color="#7cc5d9" />
            <FaPhp size={40} color="#777BB3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
