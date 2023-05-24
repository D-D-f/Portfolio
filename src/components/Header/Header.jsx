import classes from "./Header.module.css";
import styled from "styled-components";

const ButtonStyled = styled.button({
  width: "15px",
  height: "15px",
  marginRight: "10px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: (props) => {
    if (props.bgColor === "jaune") return "#f1fa8c";
    else if (props.bgColor === "green") return "#50fa7b";
    else if (props.bgColor === "red") return "#f55";
  },
});

const Header = () => {
  return (
    <header>
      <div>
        <img
          style={{ height: "20px", width: "20px" }}
          src="assets/icon/vscode_icon.svg"
          alt="icone vscode"
        />
      </div>
      <div>
        <p>David de Freitas - Portfolio</p>
      </div>
      <div className={classes.rounded}>
        <ButtonStyled bgColor="red" />
        <ButtonStyled bgColor="jaune" />
        <ButtonStyled bgColor="green" />
      </div>
    </header>
  );
};

export default Header;
