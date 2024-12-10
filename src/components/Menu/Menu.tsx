import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import "./styles.css";
import { useState } from "react";
import { categories, offers } from "./Offer";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [item, setItem] = useState("Trending");

  const [showAll, setShowAll] = useState(false);
  const itemCategories = 6;
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemCategories, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemCategories, categories.length - itemCategories)
    );
  };

  // const visibleOffers = showAll ? offers : offers.slice(0, 10);

  const selectedOffers = offers?.filter((offer) => offer?.category === item);
  const visibleOffers = showAll ? selectedOffers : selectedOffers.slice(0, 10);

  const visibleCategories = categories.slice(
    currentIndex,
    currentIndex + itemCategories
  );
  return (
    <div className="bg-[#FFF7EB]  flex justify-center overflow-x-auto ">
      <div className="sm:w-[1200px] w-full p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl">
            Our <strong className="text-[#F69625]">Menu</strong>
          </h1>
          <div className=" hidden lg:flex items-center space-x-2 overflow-x-auto scrollbar-hide">
            <button
              className="p-2 hidden sm:block"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <FaChevronLeft className="text-[#402E32]" />
            </button>

            <div className="flex space-x-2">
              {visibleCategories.map((category, index) => (
                <span
                  key={index}
                  className="bg-[#FFEACD] text-[#402E32] cursor-pointer text-base text-center px-5 py-2 rounded-[10px] whitespace-nowrap"
                  style={{
                    backgroundColor: category === item ? "#F69625" : "#FFEACD",
                    color: category === item ? "white" : "#000",
                  }}
                  onClick={() => setItem(category)}
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Chevron icons visible only on large screens and above */}
            <button
              className="p-2 hidden md:block sm:block lg:block"
              onClick={handleNext}
              disabled={currentIndex + itemCategories >= categories.length}
            >
              <FaChevronRight className="text-[#402E32]" />
            </button>
          </div>
          <Button
            className="bg-[#F69625] text-white px-6 py-2 rounded-lg"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>

        <div className="relative mb-8">
          <div className="flex lg:hidden justify-center items-center space-x-4 overflow-x-auto scrollbar-hide">
            {/* Chevron icons visible only on large screens and above */}
            <button
              className="p-2 hidden md:block sm:block lg:block"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <FaChevronLeft className="text-[#402E32]" />
            </button>

            <div className="flex space-x-2">
              {visibleCategories.map((category, index) => (
                <span
                  key={index}
                  className="bg-[#FFEACD] text-[#402E32] cursor-pointer 
                  text-base text-center px-5 py-2 rounded-[10px] whitespace-nowrap"
                  style={{
                    backgroundColor:
                      category === "Trending" ? "#F69625" : "#FFEACD",
                    color: category === "Trending" ? "white" : "#000",
                  }}
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Chevron icons visible only on large screens and above */}
            <button
              className="p-2 hidden md:block sm:block lg:block"
              onClick={handleNext}
              disabled={currentIndex + itemCategories >= categories.length}
            >
              <FaChevronRight className="text-[#402E32]" />
            </button>
          </div>
        </div>

        {visibleOffers?.length < 1 ? (
          <div className="text-center text-sm mt-2 py-2 text-black">
            {" "}
            Data Not Available{" "}
          </div>
        ) : (
          <div className="our_menu">
            {visibleOffers.map((offer, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-40 h-40 object-cover rounded-lg mb-2"
                />
                <span className="text-lg text-[#402E32] text-center mb-1">
                  {offer.name}
                </span>
                <span className="text-[#F69625] text-xl">
                  ${offer.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
