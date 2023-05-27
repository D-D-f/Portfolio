import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.section}>
      <p>
        const <span style={{ color: " var(--border)" }}>myStack</span> =
        ['javascript', 'php', 'react', 'html', 'css3'];
      </p>
      <p>
        const <span style={{ color: " var(--border)" }}>softSkills</span> =
        ['Curieux', 'Perseverant', 'Patient', 'Empathique'];
      </p>
    </section>
  );
};

export default About;
