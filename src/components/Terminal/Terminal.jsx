import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./Terminal.module.css";
import Fields from "../Fields/Fields";
import Presentation from "../Presentation/Presentation";
import Help from "../Help/Help";

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

  return (
    <div className={classes.terminal}>
      <Fields
        handleKeyPress={handleKeyPress}
        placeholder="Pour voir les commandes disponible tapez help et entrer"
      />
      {history.map((item, i) => {
        return (
          <React.Fragment key={item.id}>
            {item.value === "help" ? (
              <Help key={item.id} />
            ) : (
              <Presentation key={item.id} />
            )}
            <Fields key={`champ_${i}`} handleKeyPress={handleKeyPress} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Terminal;
