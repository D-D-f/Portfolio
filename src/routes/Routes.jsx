import { Routes, Routes } from "react-router-dom";
import Contact from "../pages/Contact/Contact";

const Routes = () => {
  return (
    <Routes>
      <Route path="/about" />
      <Route path="/projects" />
      <Route path="/contact" exact element={Contact} />
    </Routes>
  );
};

export default Routes;
