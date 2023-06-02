import Card from "../../components/Card/Card";
import classes from "./Projects.module.css";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données");
  }
  return response.json();
};

const Projects = () => {
  const [search, setSearch] = useState("");

  const { data, error, isLoading, isError } = useSWR(
    "./projects.json",
    fetcher
  );

  const getSearch = (e) => {
    setSearch(e.currentTarget.value);
  };

  const filterObject = (valueUser) => {
    return data?.projects?.filter((objet) => {
      return objet.langage.some((mot) => {
        return mot.startsWith(valueUser.toLowerCase());
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
        link={item.link}
      />
    );
  });

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <>
      <div className={classes.filtreInput}>
        <span style={{ paddingRight: "5px", paddingLeft: "5px" }}>{">"}</span>
        <input
          type="text"
          onChange={(e) => getSearch(e)}
          placeholder="Recherche par langage"
        />
        <span style={{ fontSize: "10px", marginLeft: "10px" }}>
          {newArrayFilter?.length === 0
            ? "No results"
            : `Projets trouvé : ${newArrayFilter?.length}`}
        </span>
      </div>
      <section className={classes.containerCard}>
        <div className={classes.projects}>{displayProjects}</div>
      </section>
    </>
  );
};

export default Projects;
