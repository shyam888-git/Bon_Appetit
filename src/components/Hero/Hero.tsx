import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import image1 from "../../assets/HeroImages/image 6.png";
import image2 from "../../assets/HeroImages/image 7.png";
import image3 from "../../assets/HeroImages/image 8.png";
import image4 from "../../assets/HeroImages/image 9.png";
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const offers = [
    {
      name: "Steak Toast",
      price: 25.0,
      originalPrice: 35.0,
      image: image1,
    },
    {
      name: "Broad Lassagne",
      price: 25.0,
      originalPrice: 35.0,
      image: image2,
    },
    {
      name: "Chicken Salad",
      price: 25.0,
      originalPrice: 35.0,
      image: image3,
    },
    {
      name: "Rice Lassagne",
      price: 25.0,
      originalPrice: 35.0,
      image: image4,
    },
    {
      name: "Steak Toast",
      price: 25.0,
      originalPrice: 35.0,
      image: image1,
    },
    {
      name: "Broad Lassagne",
      price: 25.0,
      originalPrice: 35.0,
      image: image2,
    },
    {
      name: "Chicken Salad",
      price: 25.0,
      originalPrice: 35.0,
      image: image3,
    },
    {
      name: "Rice Lassagne",
      price: 25.0,
      originalPrice: 35.0,
      image: image3,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + offers.length) % offers.length
    );
  };

  return (
    <div className="flex items-center justify-start gap-10 p-4 bg-white px-32">
      <div className="flex flex-col items-start">
        <div className="flex items-center mt-4 ">
          <h2 className="text-8xl font-normal  text-[#F69625]">HOT</h2>
          <svg
            className="w-16 h-20 ml-2 text-[#F69625]"
            viewBox="0 0 66 88"
            fill="currentColor"
          >
            <path d="M0.0390639 57.5C0.839064 74.3 16.7057 84.1667 24.5391 87C30.9391 87.8 29.8724 83.3333 28.5391 81C14.3901 65.037 21.3825 55.8196 28.0285 52.3777C28.7902 51.9832 29.5765 52.7613 29.3747 53.595C27.4238 61.6547 33.1578 67.1557 36.5391 69C44.1391 73.8 46.0391 80.3333 46.0391 83C48.4391 87.8 52.7057 86 54.5391 84.5C71.3391 70.1 65.2057 42.5 60.0391 30.5C57.2391 25.7 54.5391 28.5 53.5391 30.5C51.6788 35.7707 49.0977 38.7784 47.3323 40.1751C46.7647 40.6241 46.0372 40.1843 46.0096 39.4612C45.3618 22.4886 34.2018 7.50098 28.5391 1.99999C24.5391 -1.20001 23.2057 2.66666 23.0391 4.99999C22.6391 8.99999 21.5391 13.3333 21.0391 15C17.5391 27 -0.960936 36.5 0.0390639 57.5Z" />
          </svg>
        </div>
        <h2 className=" text-8xl font-bold text-[#F69625]">OFFERS</h2>
        <span className="text-xl  text-black font-normal px-16">
          Available till 15th Sept
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <FaChevronLeft size={24} />
        <div className="flex space-x-4">
          {offers.slice(currentIndex, currentIndex + 4).map((offer, index) => (
            <div key={index} className="flex flex-col items-center  ">
              <div className="bg-[#FFF7EB] px-8 py-8">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-32 h-32 rounded-full object-cover mb-2"
                />
              </div>
              <h3 className="font-normal text-black text-xl mt-2">{offer.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 font-bold">
                  ${offer.price.toFixed(2)}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ${offer.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <FaChevronRight size={24} />
      </div>
    </div>
  );
};

export default Hero;
