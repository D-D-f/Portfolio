import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Explorer from "./components/Explorer/Explorer";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Explorer />
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
