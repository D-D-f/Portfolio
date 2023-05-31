import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import classes from "./Projects.module.css";

const Projects = () => {
  const [search, setSearch] = useState("");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const getProjects = async () => {
      try {
        const response = await fetch("./projects.json", {
          method: "GET",
          signal: abortController.signal,
        });

        if (response.ok) {
          const data = await response.json();
          setProjects(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getProjects();

    return () => {
      abortController.abort();
    };
  }, []);

  const handleSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  const filterProjects = () => {
    return projects?.projects?.filter((project) => {
      return project.langage.some((language) =>
        language.startsWith(search.toLowerCase())
      );
    });
  };

  const filteredProjects = filterProjects();
  const displayProjects = filteredProjects?.map((project, id) => (
    <Card
      key={id}
      img={project.img}
      title={project.title}
      langage={project.langage}
      github={project.github}
      link={project.link}
    />
  ));

  return (
    <>
      <div className={classes.filterInput}>
        <span style={{ paddingRight: "5px", paddingLeft: "5px" }}>{">"}</span>
        <input
          type="text"
          onChange={(e) => handleSearch(e)}
          placeholder="Recherche par langage"
        />
        <span style={{ fontSize: "10px", marginLeft: "10px" }}>
          {filteredProjects?.length === 0
            ? "Aucun résultat"
            : `Projets trouvés : ${filteredProjects?.length}`}
        </span>
      </div>
      <section className={classes.containerCard}>
        <div className={classes.projects}>
          {isLoading ? <div>Chargement en cours...</div> : displayProjects}
        </div>
      </section>
    </>
  );
};

export default Projects;
