import { useState } from "react";
import classes from "./Terminal.module.css";

const Help = () => {
  return (
    <ul>
      <li>
        Voici la liste des commandes
        <ul>
          <li>presentation</li>
        </ul>
      </li>
    </ul>
  );
};

const Presentation = () => {
  return <p>Je suis david de freitas</p>;
};

const Champ = ({ handleKeyPress }) => {
  return (
    <div className={classes.champ}>
      <p>ddf - portfolio</p>
      <input
        className={classes.input}
        type="text"
        onKeyPress={handleKeyPress}
        autoFocus
      />
    </div>
  );
};

const Terminal = () => {
  const [history, setHistory] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (
        event.target.value === "help" ||
        event.target.value === "presentation"
      ) {
        event.target.disabled = true;
        setHistory((current) => [...current, event.target.value]);
      }
    }
  };
  return (
    <div className={classes.terminal}>
      <Champ handleKeyPress={handleKeyPress} />
      {history.map((item, i) => {
        return (
          <>
            {item === "help" ? <Help key={i} /> : <Presentation key={i} />}
            <Champ handleKeyPress={handleKeyPress} />
          </>
        );
      })}
    </div>
  );
};
export default Terminal;
