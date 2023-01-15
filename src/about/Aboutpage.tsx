import React from "react";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Form from "../components/container/Form"
import Footer from "../components/footer/Footer";


const Aboutpage = () => {
  return (
    <div>
      <Navbar/>
      <About />
      <Form />
      <Footer />
    </div>
  )
}

export default Aboutpage
