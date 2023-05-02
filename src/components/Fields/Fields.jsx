import classes from "../Terminal/Terminal.module.css";

const Fields = ({ handleKeyPress, placeholder = "" }) => {
  return (
    <div className={classes.Fields}>
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
  );
};

export default Fields;
