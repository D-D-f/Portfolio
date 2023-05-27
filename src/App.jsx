import "./App.css";
import ThemeContextProvider from "./context/Theme-context";
import PageContextProvider from "./context/Page-context";
import Content from "./content/Content";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <PageContextProvider>
          <Content />
        </PageContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
