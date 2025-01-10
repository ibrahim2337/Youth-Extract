import { useEffect, useState } from "react";
import slide1 from "../../assets/banner/1.png";
import slide2 from "../../assets/banner/2.png";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
    },
    {
      id: 2,
      image: slide2,
    },
    {
      id: 3,
      image: slide1,
    },
    {
      id: 4,
      image: slide2,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="relative">
        {/* Slides */}
        <div className="overflow-hidden relative h-[300px] sm:h-[400px] md:h-[550px] w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              } ${index === currentIndex - 1 ? "-translate-x-full" : ""}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full focus:outline-none z-10 sm:text-lg"
        >
          &#8249;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full focus:outline-none z-10 sm:text-lg"
        >
          &#8250;
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
