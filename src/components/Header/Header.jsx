import classes from "./Header.module.css";
import {
  FaHtml5,
  FaCss3,
  FaCheck,
  FaDownload,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaDiscord,
  FaJs,
  FaReact,
  FaPhp,
  FaAddressCard,
  FaCode,
  FaNewspaper,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Info from "../Info/Info";
import Skill from "./Skill/Skill";

const Header = () => {
  const [open, setOpen] = useState(false);
  const skill = [
    {
      lang: "HTML 5",
      lvl: "90%",
      icon: <FaHtml5 className={classes.iconLangage} />,
    },
    {
      lang: "CSS 3",
      lvl: "80%",
      icon: <FaCss3 className={classes.iconLangage} />,
    },
    {
      lang: "JavaScript",
      lvl: "70%",
      icon: <FaJs className={classes.iconLangage} />,
    },
    {
      lang: "React JS",
      lvl: "50%",
      icon: <FaReact className={classes.iconLangage} />,
    },
    {
      lang: "PHP",
      lvl: "60%",
      icon: <FaPhp className={classes.iconLangage} />,
    },
  ];

  const openClickHandler = () => {
    setOpen(!open);
  };

  const displaySkill = skill.map((item, id) => {
    return (
      <Skill
        key={id}
        langage={item.lang}
        icon={item.icon}
        xp={item.lvl}
        lvl={item.lvl}
      />
    );
  });

  return (
    <header className={classes.Header}>
      <div className={classes.Header_img}>
        <img
          className={classes.myImg}
          src="./src/assets/img/pp.jpg"
          alt="ma photo profil de mon portfolio de développeur web"
        />
        <h1>
          <span className={classes.name}>David de Freitas</span>
          Développeur Web
          <br />
          Développeur full stack
        </h1>
      </div>
      <div className={classes.skills}>
        <ul>
          <li>
            Pays : <span className={classes.profil}>France</span>
          </li>
          <li>
            Ville : <span className={classes.profil}>Paris</span>
          </li>
          <li>
            Âge: <span className={classes.profil}>31</span>
          </li>
        </ul>
        <hr className={classes.separator} />
        <div className={classes.page}>
          <ul className={classes.Allpage}>
            <Link to="/">
              <li>
                <FaAddressCard className={classes.iconPage} /> À propos
              </li>
            </Link>
            <Link to="/projet">
              <li>
                <FaCode className={classes.iconPage} /> Projets
              </li>
            </Link>
            <Link to="/blog">
              <li>
                <FaNewspaper className={classes.iconPage} /> Blog
              </li>
            </Link>
          </ul>
        </div>
        <hr className={classes.separator} />
        <ul>{displaySkill}</ul>
        <hr className={classes.separator} />
        <ul className={classes.otherSkills}>
          <li>
            <FaCheck className={classes.iconSkills} />
            GitHub
          </li>
          <li>
            <FaCheck className={classes.iconSkills} />
            Sass
          </li>
          <li>
            <FaCheck className={classes.iconSkills} />
            SQL
          </li>
        </ul>
        <hr className={classes.separator} />
      </div>
      <div className={classes.containerCv}>
        <a
          className={classes.cv}
          href="./src/assets/img/cv_ddf.pdf"
          download="Télécharger CV"
        >
          Télécharger mon CV <FaDownload />
        </a>
      </div>
      <div className={classes.contact}>
        <FaLinkedin className={classes.iconContact} />
        <FaEnvelope className={classes.iconContact} />
        <FaGithub className={classes.iconContact} />
        <div className={classes.containerDiscord}>
          {open && <Info contact="DDf#7720" />}
          <FaDiscord
            onClick={openClickHandler}
            className={classes.iconContact}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
