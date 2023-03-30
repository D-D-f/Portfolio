import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
};

export default App;
