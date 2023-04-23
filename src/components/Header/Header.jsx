import classes from "./Header.module.css";
import styled from "styled-components";

const ButtonStyled = styled.button({
  width: "20px",
  height: "20px",
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
      <div className={classes.rounded}>
        <ButtonStyled bgColor="red" />
        <ButtonStyled bgColor="jaune" />
        <ButtonStyled bgColor="green" />
      </div>
      <div>
        <p>David de Freitas - Portfolio</p>
      </div>
      <div className={classes.components}>
        <div className={classes.explorer}></div>
        <div className={classes.terminal}></div>
      </div>
    </header>
  );
};

export default Header;
