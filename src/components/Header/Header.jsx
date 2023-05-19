import classes from "./Header.module.css";
import styled from "styled-components";
import { ThemeContext } from "../../context/Theme-context";
import { useContext } from "react";

const ButtonStyled = styled.button({
  width: "15px",
  height: "15px",
  marginLeft: "5px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: (props) => {
    if (props.bgColor === "jaune") return "#f1fa8c";
    else if (props.bgColor === "green") return "#50fa7b";
    else if (props.bgColor === "red") return "#f55";
  },
});

const Header = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
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
