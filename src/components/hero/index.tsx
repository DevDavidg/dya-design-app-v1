import React, { useState, useEffect } from "react";
import "./styles.scss";

const banners = [
  "https://via.placeholder.com/1920x450",
  "https://via.placeholder.com/1920x450",
  "https://via.placeholder.com/1920x450",
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(goToNextSlide, 4000);
    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <div className="hero">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {banners.map((banner, index) => (
          <div
            key={banner} // Use the URL as the unique key
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${banner})` }}
          />
        ))}
      </div>
      <div className="arrows">
        <button className="arrow arrow-left" onClick={goToPrevSlide}>
          &lt;
        </button>
        <button className="arrow arrow-right" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;
