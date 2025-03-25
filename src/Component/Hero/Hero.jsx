import React, { useState, useEffect } from "react";
import "./Hero.css";
import heroImage1 from "./Hero-Img/Hero_1.jpg";
import heroImage2 from "./Hero-Img/Hero_2.jpg";
import heroImage3 from "./Hero-Img/Hero_3.jpg";
import heroImage4 from "./Hero-Img/Hero_4.jpg";
import heroImage5 from "./Hero-Img/Hero_6.jpg";

function Hero() {
  const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(images.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide, images.length]);

  const handleDotClick = (index) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="slider-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""} ${
                index === prevSlide ? "prev" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Milton</h1>
          <p>Discover our amazing products and services</p>
          <button className="cta-button">Shop Now</button>
        </div>
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
