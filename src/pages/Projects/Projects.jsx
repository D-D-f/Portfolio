import Card from "../../components/Card/Card";
import classes from "./Projects.module.css";
import { useState, useEffect } from "react";

const Projects = () => {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const getData = await fetch("./projects.json", {
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

  const getSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  const filterObject = (valueUser) => {
    return projects?.projects?.filter((objet) => {
      return objet.langage.some((mot) => {
        return mot.startsWith(valueUser);
      });
    });
  };

  const newArrayFilter = filterObject(search);
  const displayProjects = newArrayFilter?.map((item, id) => {
    return (
      <Card
        key={id}
        img={item.img}
        title={item.title}
        langage={item.langage}
        github={item.github}
      />
    );
  });

  return (
    <section className={classes.containerCard}>
      <div className={classes.filtreInput}>
        <span style={{ paddingRight: "5px", paddingLeft: "5px" }}>{">"}</span>
        <input type="text" onChange={(e) => getSearch(e)} placeholder="Find" />
        <span style={{ fontSize: "10px" }}>
          {newArrayFilter?.length === 0
            ? "No results"
            : `Projets trouvé : ${newArrayFilter?.length}`}
        </span>
      </div>

      {displayProjects}
    </section>
  );
};

export default Projects;
