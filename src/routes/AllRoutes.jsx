import { Routes, Route } from "react-router-dom";
import Github from "../pages/Github/Github";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/github" exact element={<Github />} />
      <Route path="/projects" exact element={<Projects />} />
    </Routes>
  );
};
export default AllRoutes;
