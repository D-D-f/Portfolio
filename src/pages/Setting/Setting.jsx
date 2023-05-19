import { useContext } from "react";
import { ThemeContext } from "../../context/Theme-context";

const Setting = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <section>
      <button onClick={() => changeTheme("ayu")}>Ayu</button>
      <button onClick={() => changeTheme("dracula")}>Dracula</button>
    </section>
  );
};

export default Setting;
