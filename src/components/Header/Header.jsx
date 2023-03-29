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
} from "react-icons/fa";
import Skill from "./Skill/Skill";

const Header = () => {
  const skill = [
    {
      lang: "HTML 5",
      lvl: "90%",
      icon: <FaHtml5 className={classes.iconLangage} />,
      exp: "2 ans d'expérience",
    },
    {
      lang: "CSS 3",
      lvl: "80%",
      icon: <FaCss3 className={classes.iconLangage} />,
      exp: "2 ans d'expérience",
    },
    {
      lang: "JavaScript",
      lvl: "70%",
      icon: <FaJs className={classes.iconLangage} />,
      exp: "2 ans d'expérience",
    },
    {
      lang: "React JS",
      lvl: "50%",
      icon: <FaReact className={classes.iconLangage} />,
      exp: "6 mois d'expérience",
    },
    {
      lang: "PHP",
      lvl: "60%",
      icon: <FaPhp className={classes.iconLangage} />,
      exp: "6 mois d'expérience",
    },
  ];

  const displaySkill = skill.map((item, id) => {
    return (
      <Skill
        key={id}
        langage={item.lang}
        icon={item.icon}
        xp={item.exp}
        lvl={item.lvl}
      />
    );
  });

  return (
    <header className={classes.Header}>
      <div className={classes.Header_img}>
        <img
          className={classes.myImg}
          src="./src/assets/img/pp.png"
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
          href="./src/assets/cv_ddf.pdf"
          download="Télécharger CV"
        >
          Télécharger mon CV <FaDownload />
        </a>
      </div>
      <div className={classes.contact}>
        <FaLinkedin />
        <FaEnvelope />
        <FaGithub />
        <FaDiscord />
      </div>
    </header>
  );
};

export default Header;
