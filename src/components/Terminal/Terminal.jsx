import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import classes from "./Terminal.module.css";
import Fields from "../Fields/Fields";
import Notification from "../Notification/Notification";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const firstInput = useRef();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.target.disabled = true;
      setHistory((current) => [
        ...current,
        { id: uuid(), value: event.target.value },
      ]);
    }
    if (event.target.value === "clear") {
      setHistory([]);
      firstInput.current.disabled = false;
      firstInput.current.value = "";
      firstInput.current.focus();
    }
  };

  const historyTerminal = history.map((item, i) => {
    return (
      <React.Fragment key={i}>
        {<Fields handleKeyPress={handleKeyPress} value={item.value} />}
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
        <div className={classes.thread}>
          <p>
            <span style={{ color: "#05BFDB" }}>➜</span>{" "}
            <span style={{ color: "#088395" }}>@user_david</span>
            <span>-</span>
            <span style={{ color: "#EA5455" }}>portfolio</span>
            <span>:</span>
          </p>
          <input
            className={classes.input}
            type="text"
            onKeyPress={handleKeyPress}
            ref={firstInput}
            autoFocus
          />
        </div>
        {historyTerminal}
      </div>
      <div className={classes.notification}>
        <Notification message="Pour connaître les commandes du terminal tapez help puis appuyer sur la touche entrer" />
      </div>
    </div>
  );
};
export default Terminal;
