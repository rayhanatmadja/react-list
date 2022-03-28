import React from "react";
import { Routes, Route } from "react-router-dom";

import Employee from "./Employee";
import Gallery from "../pages/Gallery";
import AboutMe from "./aboutMe";
import Art from "./art";
import Contact from "./contact";
import Home from "./home";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/art" element={<Art />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/employee" element={<Employee />} />
    </Routes>
  );
};

export default Main;
