import Baner from "../../components/Baner/Baner";
import classes from "./Project.module.css";

const Project = () => {
  return (
    <section className={classes.projets}>
      <Baner img="src/assets/img/projet.jpg" />

      <form>
        <input
          style={{
            backgroundColor: "inherit",
            border: "none",
            borderBottom: "1px solid var(--color-text)",
          }}
          type="text"
        />
        <button>Rechercher</button>
      </form>
    </section>
  );
};

export default Project;
