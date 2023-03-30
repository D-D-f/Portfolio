import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Project from "../pages/Project/Project";
import About from "../pages/About/About";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<About />} />
      <Route path="/projet" exact element={<Project />} />
      <Route path="/*" exact element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
