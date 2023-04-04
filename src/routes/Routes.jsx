import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Projets from "../pages/Projets/Projets";
import Github from "../pages/Github/Github";
import Themes from "../pages/Themes/Themes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/about" exact element={<About />} />
      <Route path="/projects" exact element={<Projets />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/github" exact element={<Github />} />
      <Route path="/themes" exact element={<Themes />} />
    </Routes>
  );
};

export default AllRoutes;
