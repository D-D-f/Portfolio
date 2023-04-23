import "./App.css";
import Terminal from "./components/Terminal/Terminal";
import Header from "./components/Header/Header";
import Explorer from "./components/Explorer/Explorer";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Terminal />
      <SideBar />
      <Explorer />
    </div>
  );
};

export default App;
