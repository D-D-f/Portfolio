import Typewriter from "typewriter-effect";
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaSass,
  FaPhp,
  FaArrowDown,
  FaLinkedin,
  FaEnvelope,
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
                zIndex: "1",
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
          <p>
            J'ai commencé dans le monde de l'informatique en 2016 en tant
            qu'agent Help desk, grâce à ce métier j'ai pu découvrir le métier de
            Développeur. J'ai donc décidé de me reconvertir et de suivre une
            formation pour le devenir. Aujourd'hui, je suis à la recherche d'un
            projet ambitieux et stimulant ou je vais pouvoir appliquer
            pleinement mes qualités : esprit d'équipe, curiosité et ma volonté
            de ne jamais abandonner. Je suis donc à la recherche d'une
            entreprise qui va me faire progresser d'un point de vue technique et
            humain.
            <br />
            N'hésitez pas à me contacter ici{" "}
            <FaArrowDown className={classes.flecheSaut} />
          </p>
          <div className={classes.logoContact}>
            <a href="https://www.linkedin.com/in/david-de-freitas-a85467206/">
              <FaLinkedin
                size={40}
                color="#0e76a8"
                style={{
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="mailto:defreitas-david@outlook.fr">
              <FaEnvelope
                size={40}
                color="var(--primaryColor)"
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
        </div>
        <div className={classes.image}>
          <img src="src/assets/img/pp.png" alt="image du développeur web Ddf" />
          <div className={classes.langages}>
            <div className={classes.langageEcrit}>
              <FaHtml5
                size={40}
                color="#e34c26"
                style={{ marginBottom: "10px" }}
              />
              HTML 5
            </div>
            <div className={classes.langageEcrit}>
              <FaCss3Alt
                size={40}
                color="#264de4"
                style={{ marginBottom: "10px" }}
              />
              CSS 3
            </div>
            <div className={classes.langageEcrit}>
              <FaSass
                size={40}
                color="#cc6699"
                style={{ marginBottom: "10px" }}
              />
              SASS
            </div>
            <div className={classes.langageEcrit}>
              <FaJs
                size={40}
                color="#f0db4f"
                style={{ marginBottom: "10px" }}
              />
              JavaScript
            </div>
            <div className={classes.langageEcrit}>
              <FaReact
                size={40}
                color="#7cc5d9"
                style={{ marginBottom: "10px" }}
              />
              React JS
            </div>
            <div className={classes.langageEcrit}>
              <FaPhp
                size={40}
                color="#777BB3"
                style={{ marginBottom: "10px" }}
              />
              PHP
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
