// Carousel.js
import React, { useState, useEffect } from "react";
import sponsor1 from "../assets/hotel_promotion.jpg";
import sponsor2 from "../assets/restaurantsponsor.jpg";
import sponsor3 from "../assets/cabsponsor.jpg";
import sponsor4 from "../assets/tourismsponsor.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [sponsor1, sponsor2, sponsor3, sponsor4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col">
      <div className="relative w-full max-w-lg mx-auto overflow-hidden ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover p-3 rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2  rounded-full"
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
            )
          }
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
          }
        >
          &#10095;
        </button>

        {/* Circular Indicators */}
      </div>
      <div className="relative    bottom-0 left-1/2 transform -translate-x-1/2 flex   justify-center  space-x-2 ">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
