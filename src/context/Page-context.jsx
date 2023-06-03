import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const PageContext = createContext();
const PageContextProvider = (props) => {
  const location = useLocation();
  const [page, setPage] = useState(location.pathname);

  useEffect(() => {
    setPage(location.pathname);
  });

  return (
    <PageContext.Provider value={{ page }}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
