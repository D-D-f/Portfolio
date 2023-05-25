import SideBar from "../components/SideBar/SideBar";
import Explorer from "../components/Explorer/Explorer";
import Nav from "../components/Nav/Nav";
import AllRoutes from "../routes/AllRoutes";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Terminal from "../components/Terminal/Terminal";
import { ThemeContext } from "../context/Theme-context";
import { useContext } from "react";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  const themeStyle = {
    ["--backgroundColor"]: theme.background,
    ["--color"]: theme.color,
    ["--border"]: theme.border,
  };
  return (
    <div className="App" style={{ ...themeStyle }}>
      <Header />
      <main className="container">
        <div className="explorer">
          <SideBar />
          <Explorer />
        </div>
        <div className="pages">
          <Nav />
          <div className="container_pages">
            <AllRoutes />
          </div>
          <Terminal />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Content;
