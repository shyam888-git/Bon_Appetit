import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import image1 from "../../assets/HeroImages/image 6.png";
import image2 from "../../assets/HeroImages/image 7.png";
import image3 from "../../assets/HeroImages/image 8.png";
import image4 from "../../assets/HeroImages/image 9.png";
import "./styles.css";

const categories = [
  "Trending",
  "Chinese",
  "Spicy",
  "Thai",
  "Gravy",
  "Indian",
  "Desert",
];

const offers = [
  { name: "Steak Toast", price: 25.0, originalPrice: 35.0, image: image1 },
  { name: "Broad Lassagne", price: 25.0, originalPrice: 35.0, image: image2 },
  { name: "Chicken Salad", price: 25.0, originalPrice: 35.0, image: image3 },
  { name: "Rice Lassagne", price: 25.0, originalPrice: 35.0, image: image4 },
  { name: "Steak Toast", price: 25.0, originalPrice: 35.0, image: image1 },
  { name: "Broad Lassagne", price: 25.0, originalPrice: 35.0, image: image2 },
  { name: "Chicken Salad", price: 25.0, originalPrice: 35.0, image: image3 },
  { name: "Rice Lassagne", price: 25.0, originalPrice: 35.0, image: image3 },
  { name: "Steak Toast", price: 25.0, originalPrice: 35.0, image: image1 },
  { name: "Broad Lassagne", price: 25.0, originalPrice: 35.0, image: image2 },
  { name: "Chicken Salad", price: 25.0, originalPrice: 35.0, image: image3 },
  { name: "Rice Lassagne", price: 25.0, originalPrice: 35.0, image: image3 },
  { name: "Steak Toast", price: 25.0, originalPrice: 35.0, image: image1 },
  { name: "Broad Lassagne", price: 25.0, originalPrice: 35.0, image: image2 },
  { name: "Chicken Salad", price: 25.0, originalPrice: 35.0, image: image3 },
  { name: "Rice Lassagne", price: 25.0, originalPrice: 35.0, image: image3 },
];

const Menu = () => {
  return (
    <div className="bg-[#FFF7EB]  flex justify-center overflow-x-auto ">
      <div className="w-[1200px] p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl">
            Our <strong className="text-[#F69625]">Menu</strong>
          </h1>
          <div className=" hidden lg:flex items-center space-x-2 overflow-x-auto scrollbar-hide">
            {/* Chevron icons visible only on large screens and above */}
            <button className="p-2 hidden md:block sm:block lg:block">
              <FaChevronLeft className="text-[#402E32]" />
            </button>

            <div className="flex space-x-1">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-[#FFEACD] text-[#402E32] text-base text-center  px-5  lg:px-5 py-2 rounded-[10px] whitespace-nowrap"
                  style={{
                    backgroundColor:
                      category === "Trending" ? "#F69625" : "#FFEACD",
                    color: category === "Trending" ? "white" : "#000",
                    flex: `0 0 calc(100% / ${
                      window.innerWidth >= 1280
                        ? 6
                        : window.innerWidth >= 1024
                        ? 6
                        : window.innerWidth >= 768
                        ? 5
                        : 4
                    })`,
                  }}
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Chevron icons visible only on large screens and above */}
            <button className="p-2 hidden md:block sm:block lg:block">
              <FaChevronRight className="text-[#402E32]" />
            </button>
          </div>
          <Button className="bg-[#F69625] text-white px-6 py-2 rounded-lg">
            View All
          </Button>
        </div>

        <div className="relative mb-8">
          <div className="flex lg:hidden items-center space-x-4 overflow-x-auto scrollbar-hide">
            {/* Chevron icons visible only on large screens and above */}
            <button className="p-2 hidden md:block sm:block lg:block">
              <FaChevronLeft className="text-[#402E32]" />
            </button>

            <div className="flex space-x-4">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-[#FFEACD] text-[#402E32] text-base text-center  px-5  lg:px-4 py-2 rounded-[10px] whitespace-nowrap"
                  style={{
                    flex: `0 0 calc(100% / ${
                      window.innerWidth >= 1280
                        ? 7
                        : window.innerWidth >= 1024
                        ? 6
                        : window.innerWidth >= 768
                        ? 5
                        : 4
                    })`,
                  }}
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Chevron icons visible only on large screens and above */}
            <button className="p-2 hidden md:block sm:block lg:block">
              <FaChevronRight className="text-[#402E32]" />
            </button>
          </div>
        </div>

        <div className="our_menu">
          {offers.map((offer, index) => (
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
      </div>
    </div>
  );
};

export default Menu;
