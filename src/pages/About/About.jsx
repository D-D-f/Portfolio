import classes from "./About.module.css";
import Typewriter from "typewriter-effect";
import Baner from "../../components/Baner/Baner";

const About = () => {
  return (
    <section className={classes.About}>
      <Baner img="src/assets/img/bg.jpg" />

      <div className={classes.presentation} style={{ marginTop: "1em" }}>
        <h2>Bonjour moi c'est David</h2>
        <h3 style={{ display: "flex" }}>
          <span style={{ marginRight: "5px" }}>Je suis développeur </span>
          <span>
            <Typewriter
              options={{
                strings: ["Front-end", "Back-end", "Full stack"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>

        <p className={classes.aboutPresentation}>
          Je suis un passionné de <strong>programmation</strong> qui cherche à
          se faire une place dans le monde de la technologie. Je travail dur
          pour acquérir les compétences nécessaires pour réussir dans ce
          domaine. J'ai suivi des cours en ligne et des formations en
          <strong>développement web</strong>. Dans ce portfolio, vous trouverez
          une sélection de mes projets personnels qui démontrent mes compétences
          techniques. Je suis capable de créer des
          <strong>sites web responsives</strong>, d'écrire du code propre et
          optimisé, et de résoudre des problèmes de manière efficace. Je suis à
          la recherche d'opportunités pour développer mes compétences et
          acquérir de l'expérience en tant que développeur. Je suis passionné,
          curieux et prêt à travailler dur pour atteindre mes objectifs.
        </p>
      </div>
    </section>
  );
};

export default About;
