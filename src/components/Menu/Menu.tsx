import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useGetAllCategoriesQuery } from "@/redux/features/categories/categories.api";
import "./styles.css";
import { useGetAllItemsQuery } from "@/redux/features/items/items.api";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [item, setItem] = useState("");
  const { data: categoriesData } = useGetAllCategoriesQuery({});
  const { data: itemsData } = useGetAllItemsQuery({
    limit: 10,
    offSet: 0,
    category: item,
  });
  const [showAll, setShowAll] = useState(true);

  const itemCategories = 6;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemCategories, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(
        prevIndex + itemCategories,
        (categoriesData?.results?.length || 0) - itemCategories
      )
    );
  };

  const selectedOffers = item
    ? itemsData?.results?.filter((offer) => offer?.category?.name === item)
    : itemsData?.results;

  const visibleOffers = showAll ? selectedOffers : selectedOffers?.slice(0, 10);

  const visibleCategories = categoriesData?.results?.slice(
    currentIndex,
    currentIndex + itemCategories
  );

  return (
    <div className="bg-[#FFF7EB] flex justify-center overflow-x-auto">
      <div className="sm:w-[1200px] w-full p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl">
            Our <strong className="text-[#F69625]">Menu</strong>
          </h1>
          <div className="hidden lg:flex items-center space-x-2 overflow-x-auto scrollbar-hide">
            {visibleCategories?.length > 0 && (
              <button
                className="p-2 hidden sm:block"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <FaChevronLeft className="text-[#402E32]" />
              </button>
            )}
            <div className="flex space-x-2">
              {visibleCategories?.map((category) => (
                <span
                  key={category.uuid}
                  className="bg-[#FFEACD] text-[#402E32] cursor-pointer text-base text-center px-5 py-2 rounded-[10px] whitespace-nowrap"
                  style={{
                    backgroundColor:
                      category.name === item ? "#F69625" : "#FFEACD",
                    color: category.name === item ? "white" : "#000",
                  }}
                  onClick={() =>
                    setItem((prevItem) =>
                      prevItem === category?.name ? "" : category?.name
                    )
                  }
                >
                  {category.name}
                </span>
              ))}
            </div>
            {visibleCategories?.length > 0 && (
              <button
                className="p-2 hidden md:block sm:block lg:block"
                onClick={handleNext}
                disabled={
                  currentIndex + itemCategories >=
                  (categoriesData?.results?.length || 0)
                }
              >
                <FaChevronRight className="text-[#402E32]" />
              </button>
            )}
          </div>
          <Button
            className="bg-[#F69625] text-white px-6 py-2 rounded-lg"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>
        {visibleOffers && visibleOffers?.length < 1 ? (
          <div className="text-sm mt-2 py-2 text-[#402E32] text-center mb-1">
            Data Not Available
          </div>
        ) : (
          <div className="our_menu justify-center flex">
            {visibleOffers &&
              visibleOffers.map((offer, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-40 h-40 object-cover rounded-lg mb-2"
                  />
                  <span className="text-lg text-[#402E32] text-center mb-1">
                    {offer.name}
                  </span>
                  <span className="text-[#F69625] text-xl">
                    ${offer?.price}
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
