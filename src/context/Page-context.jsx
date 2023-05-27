import { useState } from "react";
import { createContext } from "react";

export const PageContext = createContext();
const PageContextProvider = (props) => {
  const getPage = localStorage.getItem("page")
    ? localStorage.getItem("page")
    : "home";
  const [page, setPage] = useState(getPage);

  const changePage = (value) => {
    setPage(value);
    localStorage.setItem("page", value);
  };

  return (
    <PageContext.Provider value={{ changePage, page }}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
