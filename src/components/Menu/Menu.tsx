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
    <div className="bg-[#FFF7EB] mb-4">
      <div className="flex justify-between mx-20 gap-5 items-center py-8 ">
        <h2 className="text-[48px] ">
          Our <strong className="text-[#F69625]">Menu</strong>
        </h2>
        <div className="flex justify-center items-center gap-4">
          <FaChevronLeft size={24} />
          {categories.map((category, index) => (
            <span key={index} className="bg-[#FFEACD] px-3 py-2 rounded">
              {category}
            </span>
          ))}
          <FaChevronRight size={24} />
        </div>
        <div className="flex justify-end">
          <Button className="bg-[#F69625] text-[#fff] px-4 py-2 rounded-lg">
            View All
          </Button>
        </div>
      </div>
      <div className="menu_container">
        {offers.map((offer, index) => (
          <div key={index} className="grid justify-center items-center">
            <div className="offer-card">
              <img src={offer.image} alt={offer.name} className="offer-image" />
            </div>
            <div className="grid justify-center items-center">
              <span className="font-normal text-xl mt-2">{offer.name}</span>
              <div className="flex items-center space-x-2">
                <span className="text-[#F69625] text-xl">
                  ${offer.price.toFixed(2)}
                </span>
                <span className="font-normal line-through text-[16px]">
                  ${offer.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
