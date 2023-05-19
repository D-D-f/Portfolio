import "./App.css";
import Terminal from "./components/Terminal/Terminal";
import Header from "./components/Header/Header";
import Explorer from "./components/Explorer/Explorer";
import SideBar from "./components/SideBar/SideBar";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./routes/AllRoutes";
import ThemeContextProvider from "./context/Theme-context";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
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
      </ThemeContextProvider>
    </div>
  );
};

export default App;
