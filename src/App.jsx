import "./App.css";
import Terminal from "./components/Terminal/Terminal";
import Header from "./components/Header/Header";
import Explorer from "./components/Explorer/Explorer";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="explorer">
          <SideBar />
          <Explorer />
        </div>
        <div className="pages">
          <main>MAIN</main>
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default App;
