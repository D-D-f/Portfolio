import Card from "../../components/Card/Card";
import classes from "./Projects.module.css";
import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      try {
        const getData = await fetch("./public/projects.json", {
          method: "GET",
        });

        if (getData) {
          const data = await getData.json();
          setProjects(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getProjects();
  }, []);

  const displayProjects = projects?.projects?.map((project, id) => {
    return (
      <Card
        key={id}
        img={project.img}
        title={project.title}
        langage={project.langage}
        github={project.github}
      />
    );
  });

  return <section className={classes.containerCard}>{displayProjects}</section>;
};

export default Projects;
