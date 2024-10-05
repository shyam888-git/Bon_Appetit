import React, { useState, useEffect } from "react";
import image1 from "../../assets/HeroImages/image 6.png";
import image2 from "../../assets/HeroImages/image 7.png";
import image3 from "../../assets/HeroImages/image 8.png";
import image4 from "../../assets/HeroImages/image 9.png";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4); // Default to 4 items

  const offers = [
    { name: "Steak Toast", price: 25.0, originalPrice: 35.0, image: image1 },
    { name: "Broad Lassagne", price: 25.0, originalPrice: 35.0, image: image2 },
    { name: "Chicken Salad", price: 25.0, originalPrice: 35.0, image: image3 },
    { name: "Rice Lassagne", price: 25.0, originalPrice: 35.0, image: image4 },
    { name: "Steak Toast", price: 25.0, originalPrice: 35.0, image: image1 },
    { name: "Broad Lassagne", price: 25.0, originalPrice: 35.0, image: image2 },
    { name: "Chicken Salad", price: 25.0, originalPrice: 35.0, image: image3 },
    { name: "Rice Lassagne", price: 25.0, originalPrice: 35.0, image: image3 },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setItemsToShow(4); // 4 items on large screens
      } else if (window.innerWidth > 800) {
        setItemsToShow(3); // 3 items on medium screens
      } else if (window.innerWidth > 500) {
        setItemsToShow(2); // 2 items on smaller screens
      } else if (window.innerWidth > 340) {
        setItemsToShow(1); // 1 item on mobile screens
      } else {
        setItemsToShow(1); // Fallback for very small screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex + itemsToShow < offers.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsToShow);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - itemsToShow);
    }
  };

  return (
    <div className="bg-[#FAFAFA] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          {/* Text Section */}
          <div className="grid items-center ">
            <div className="flex flex-row items-center md:items-start mb-6 md:mb-0">
              <h2 className="text-6xl lg:text-6xl text-[#F69625] font-bold">
                HOT
              </h2>
              <svg
                className="w-16 h-20 text-[#F69625]"
                viewBox="0 0 66 88"
                fill="currentColor"
              >
                <path d="M0.0390639 57.5C0.839064 74.3 16.7057 84.1667 24.5391 87C30.9391 87.8 29.8724 83.3333 28.5391 81C14.3901 65.037 21.3825 55.8196 28.0285 52.3777C28.7902 51.9832 29.5765 52.7613 29.3747 53.595C27.4238 61.6547 33.1578 67.1557 36.5391 69C44.1391 73.8 46.0391 80.3333 46.0391 83C48.4391 87.8 52.7057 86 54.5391 84.5C71.3391 70.1 65.2057 42.5 60.0391 30.5C57.2391 25.7 54.5391 28.5 53.5391 30.5C51.6788 35.7707 49.0977 38.7784 47.3323 40.1751C46.7647 40.6241 46.0372 40.1843 46.0096 39.4612C45.3618 22.4886 34.2018 7.50098 28.5391 1.99999C24.5391 -1.20001 23.2057 2.66666 23.0391 4.99999C22.6391 8.99999 21.5391 13.3333 21.0391 15C17.5391 27 -0.960936 36.5 0.0390639 57.5Z" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-6xl text-[#F69625] font-bold">
              OFFERS
            </h2>
            <span className="text-center">Available till 5th Sept</span>
          </div>

          {/* Offers Section */}
          <div className="flex items-center space-x-4">
            {/* Left Chevron */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              onClick={prevSlide}
              className={`cursor-pointer ${
                currentIndex === 0 ? "opacity-50" : "opacity-100"
              }`}
            >
              <path d="M10 17.5L2 9.5L10 1.5" stroke="black" strokeWidth="2" />
            </svg>

            {/* Offers Grid */}
            <div className="flex gap-7 lg:gap-8 md:lg-6 overflow-x-auto lg:overflow-visible items-center mt-2">
              {offers
                .slice(currentIndex, currentIndex + itemsToShow)
                .map((offer, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-[#FFF7EB] rounded-lg grid gap-2">
                      <img
                        src={offer.image}
                        alt={offer.name}
                        className="w-full   md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover"
                      />
                    </div>
                    <span className="text-leg text-[#402E32]  px-4 mt-2">
                      {offer.name}
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#F69625] text-lg md:text-xl">
                        ${offer.price.toFixed(2)}
                      </span>
                      <span className="font-normal line-through text-sm md:text-base">
                        ${offer.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              onClick={nextSlide}
              className={`cursor-pointer ${
                currentIndex + itemsToShow >= offers.length
                  ? "opacity-50"
                  : "opacity-100"
              }`}
            >
              <path d="M1 1.5L9 9.5L1 17.5" stroke="black" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
