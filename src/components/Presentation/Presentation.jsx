import Typewriter from "typewriter-effect";
import classes from "./Presentation.module.css";

const Presentation = () => {
  return (
    <>
      <section className={classes.Presentation}>
        <div className={classes.apropos}>
          <h2>Bonjour et bienvenue sur mon Portfolio !</h2>
          <h3>Moi c'est David</h3>
          <h3 style={{ display: "inherit" }}>
            Je suis développeur
            <span style={{ textDecoration: "underline", paddingLeft: "3px" }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(" Front-end")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(" Back-end")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(" Full-Stack")
                    .start();
                }}
              />
            </span>
          </h3>

          <p className={classes.textePresentation}>
            Je suis un développeur junior passionné par les technologies web et
            mobiles, à la recherche de ma première expérience professionnelle
            dans le domaine. J'ai récemment obtenu mon diplôme et j'ai acquis de
            solides compétences en programmation en apprenant les langages de
            base tels que HTML, CSS, JavaScript et PHP ainsi que certains
            framework comme React.
          </p>
        </div>
        <img
          className={classes.imageProfil}
          src="./src/assets/img/pp.jpg"
          alt="ma photo pour mon portfolio de développeur"
        />
      </section>
    </>
  );
};

export default Presentation;
