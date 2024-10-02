import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Button } from "../ui/button";
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
];

const Menu = () => {
  return (
    <div className="bg-[#FFF7EB]  ">
      <div className="mx-4 lg:mx-20  ">
        <div className="flex  justify-center  gap-8 lg:gap-1 lg:justify-between  items-center pb-8 ">
          <div className="flex justify-between gap-16 mt-12">
            <h1 className="text-[20px] lg:text-[32px] md:text-[32px] sm:[32px]">
              Our <strong className="text-[#F69625]">Menu</strong>
            </h1>
            <div className=" hidden lg:flex justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="none"
              >
                <path
                  d="M10 17.5L2 9.5L10 1.5"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
              {categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-[#FFEACD] text-[#402E32] text-[16px] px-4 py-2 rounded-[10px]"
                >
                  {category}
                </span>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="19"
                viewBox="0 0 11 19"
                fill="none"
              >
                <path d="M1 1.5L9 9.5L1 17.5" stroke="black" stroke-width="2" />
              </svg>
            </div>
          </div>
          <Button className="bg-[#F69625] text-[#fff] px-4 py-2 rounded-lg mt-12">
            View All
          </Button>
        </div>
        <div className="flex lg:hidden justify-center items-center gap-2 overflow-x-auto lg:overflow-x-hidden ">
          <FaChevronLeft size={24} />
          {categories.map((category, index) => (
            <span key={index} className="bg-[#FFEACD] px-3 py-2 rounded">
              {category}
            </span>
          ))}

          <FaChevronRight size={24} color="#402E32" />
        </div>
        <div className="menu_container py-4">
          {offers.map((offer, index) => (
            <div key={index} className="grid justify-center items-center ">
              <img src={offer.image} alt={offer.name} className="offer-image" />
              <div className="grid justify-center items-center ">
                <span className=" text-xl mt-2 text-[#402E32] text-center">
                  {offer.name}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-[#F69625] text-xl px-6">
                    ${offer.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
