import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./Terminal.module.css";
import Fields from "../Fields/Fields";
import Presentation from "../Presentation/Presentation";
import Notification from "../Notification/Notification";
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
      <ul className={classes.header_terminal}>
        <li>PROBLEMS</li>
        <li>OUTPUT</li>
        <li>DEBUG CONSOLE</li>
        <li style={{ borderBottom: "1px solid red", paddingBottom: "5px" }}>
          TERMINAL
        </li>
        <li>GITLENS</li>
      </ul>
      <div className={classes.container_terminal}>
        <Fields handleKeyPress={handleKeyPress} />
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
      <div className={classes.notification}>
        <Notification message="Pour connaître les commandes du terminal taper help et entrer" />
      </div>
    </div>
  );
};
export default Terminal;
