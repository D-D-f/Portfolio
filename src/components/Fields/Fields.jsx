import classes from "../Terminal/Terminal.module.css";

const Fields = ({ handleKeyPress, placeholder = "" }) => {
  return (
    <div className={classes.Fields}>
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

export default Fields;
