import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import classes from "./Terminal.module.css";
import Fields from "../Fields/Fields";
import Presentation from "../Presentation/Presentation";
import Notification from "../Notification/Notification";
import MsgError from "../MsgError/MsgError";
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
      } else {
        event.target.disabled = true;
        setHistory((current) => [
          ...current,
          {
            id: uuid(),
          },
        ]);
      }
    }
  };

  const commandTerminal = (command, id) => {
    if (command === "help") {
      return <Help key={id} />;
    } else if (command === "presentation") {
      return <Presentation key={id} />;
    } else {
      return <MsgError key={id} />;
    }
  };

  const displayCommand = history.map((item, i) => {
    return (
      <React.Fragment key={i}>
        {commandTerminal(item.value, item.id)}
        <Fields handleKeyPress={handleKeyPress} />
      </React.Fragment>
    );
  });

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
        {displayCommand}
      </div>
      <div className={classes.notification}>
        <Notification message="Pour connaître les commandes du terminal tapez help puis appuyer sur la touche entrer" />
      </div>
    </div>
  );
};
export default Terminal;
