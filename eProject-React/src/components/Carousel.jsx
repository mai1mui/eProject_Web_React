import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import gg from "./image/Gogreen.jpg";
import pla1 from "./image/PlasticBottle1.jpg";
import pla2 from "./image/PlasticBottle2.jpg";
import pla3 from "./image/PlasticBottle3.jpg";
import pla4 from "./image/PlasticBottle4.jpg";
import pla5 from "./image/PlasticBottle5.jpg";
import pla6 from "./image/PlasticBottle6.jpg";
import pla7 from "./image/PlasticBottle7.jpg";

const images = [
  { src: gg, alt: "Gogreen", link: "#" },
  { src: pla1, alt: "PlasticBottle1", link: "#" },
  { src: pla2, alt: "PlasticBottle2", link: "#" },
  { src: pla3, alt: "PlasticBottle3", link: "#" },
  { src: pla4, alt: "PlasticBottle4", link: "#" },
  { src: pla5, alt: "PlasticBottle5", link: "#" },
  { src: pla6, alt: "PlasticBottle6", link: "#" },
  { src: pla7, alt: "PlasticBottle7", link: "#" },
];

const Carousel = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000" // Chạy tự động sau mỗi 2s
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slideshow */}
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="2000" // Thiết lập thời gian riêng cho từng ảnh
          >
            <a href={image.link}>
              <img src={image.src} alt={image.alt} className="d-block w-100" />
            </a>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
