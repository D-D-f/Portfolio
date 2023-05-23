import classes from "../Terminal/Terminal.module.css";
import Help from "../Help/Help";
import Presentation from "../Presentation/Presentation";
import MsgError from "../MsgError/MsgError";

const Fields = ({ handleKeyPress, value = "" }) => {
  const commandTerminal = (command) => {
    switch (command) {
      case "presentation":
        return <Presentation />;
      case "help":
        return <Help />;
      default:
        return <MsgError />;
    }
  };
  return (
    <div style={{ flexDirection: "column" }} className={classes.Fields}>
      {commandTerminal(value)}
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
          autoFocus
        />
      </div>
    </div>
  );
};

export default Fields;
