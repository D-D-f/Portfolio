import classes from "../Terminal/Terminal.module.css";

const Fields = ({ handleKeyPress, placeholder = "" }) => {
  return (
    <div style={{ fontFamily: "JetBrains Mono" }} className={classes.Fields}>
      <p>
        <span>➜</span> @user_david-portfolio:
      </p>
      <input
        style={{ fontFamily: "JetBrains Mono" }}
        className={classes.input}
        type="text"
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        autoFocus
      />
    </div>
  );
};

export default Fields;
