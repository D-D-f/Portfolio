import "./App.css";
import ThemeContextProvider from "./context/Theme-context";
import Content from "./content/Content";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
    </>
  );
};

export default App;
