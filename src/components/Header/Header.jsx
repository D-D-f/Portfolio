import classes from "./Header.module.css";
import Round from "../Round/Round";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <img
            className={classes.vscode}
            src="./src/assets/icon/vscode_icon.svg"
            alt="icon vscode"
          />
        </li>
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Go</li>
        <li>Run</li>
        <li>Terminal</li>
        <li>Help</li>
      </ul>
      <div>
        <p>David de Freitas - Visual Studio Code</p>
      </div>
      <div className={classes.allRound}>
        <Round color="#f1fa8c" />
        <Round color="#50fa7b" />
        <Round color="#f55" />
      </div>
    </header>
  );
};

export default Header;
