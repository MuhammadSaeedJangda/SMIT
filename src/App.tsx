import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutpage from "./about/Aboutpage";
import Home from "./home/Home";
import Coursespage from "./courses/Coursespage";
import Contactpage from "./contact/Contactpage";

const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<Aboutpage/>} />
      <Route path="courses" element={<Coursespage/>} />
      <Route path="contact" element={<Contactpage/>} />

     </Routes>
      </>
  );
};

export default App;