import React, { useState } from "react";
import { v4 as uuid } from "uuid";
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

const Champ = ({ handleKeyPress, placeholder = "" }) => {
  return (
    <div className={classes.champ}>
      <p>ddf - portfolio</p>
      <input
        className={classes.input}
        type="text"
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
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
        setHistory((current) => [
          ...current,
          { id: uuid(), value: event.target.value },
        ]);
      }
    }
  };
  console.log(history);
  return (
    <div className={classes.terminal}>
      <Champ
        handleKeyPress={handleKeyPress}
        placeholder="Pour voir les commandes disponible taper help et entrer"
      />
      {history.map((item, i) => {
        return (
          <React.Fragment key={item.id}>
            {item.value === "help" ? (
              <Help key={item.id} />
            ) : (
              <Presentation key={item.id} />
            )}
            <Champ key={`champ_${i}`} handleKeyPress={handleKeyPress} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Terminal;
