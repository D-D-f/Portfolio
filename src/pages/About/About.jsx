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

      <p>const <span style={{ color: " var(--border)" }}>Formation</span> = {'{'}
        <p style={{marginLeft:"5px"}}>Openclassrooms:{"{"}</p>
        <p style={{marginLeft:"30px"}}>nom: 'Intégrateur web',</p>
        <p style={{marginLeft:"30px"}}>date: 'Octobre 2022 à Juillet 2023',</p>
        <p style={{marginLeft:"30px"}}>diplôme: 'Bac +2'</p>
        <p style={{marginLeft:"10px"}}>{"},"}</p>
        <p style={{marginLeft:"5px"}}>Alyra:{"{"}</p>
        <p style={{marginLeft:"30px"}}>nom: 'Développeur Blockchain',</p>
        <p style={{marginLeft:"30px"}}>date: 'Janvier 2021 à Aout 2021',</p>
        <p style={{marginLeft:"30px"}}>diplôme: ''</p>
        <p style={{marginLeft:"10px"}}>{"},"}</p>
        <p>{"}"}</p>
      </p>
    </section>
  );
};

export default About;
