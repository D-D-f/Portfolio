import "./App.css";
import Terminal from "./components/Terminal/Terminal";
import Header from "./components/Header/Header";
import Explorer from "./components/Explorer/Explorer";
import SideBar from "./components/SideBar/SideBar";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <div className="explorer">
          <SideBar />
          <Explorer />
        </div>
        <div className="pages">
          <Nav />
          <div></div>
          <Terminal />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
