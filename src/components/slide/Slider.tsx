import React from "react";
import "./Slider.css";


function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../Saylani.jpg" className="d-block w-100" alt=" Saylani Welfare Trust Ranked As Number 01 IN CISCO"/>
    </div>
    <div className="carousel-item">
      <img src="../Student.jpg" className="d-block w-100" alt="Certification Of Saylani Students"/>
    </div>
    <div className="carousel-item">
      <img src="../lab.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../Student1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../Student2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../Student3.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../Kids.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
);
    }

export default Slider;