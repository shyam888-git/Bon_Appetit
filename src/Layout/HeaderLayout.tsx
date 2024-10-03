import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import background1 from "../assets/Background1.png";
import background2 from "../assets/Background2..png";
import background3 from "../assets/Background5.png";
import background4 from "../assets/Bakground6.png";
import Carousel from "@/components/ui/carousel";
import Header from "@/components/Header/Header";

// List of titles corresponding to each image
const titles = [
  ["Cheese", "Cake"],
  ["Cheese", "Salad"],
  ["Fries", "and Steak"],
  ["Coffee", "Croissant"],
  ["Sauced", "Croissant"],
];

const backgroundImages = [background1, background2, background3, background4];

const HeaderLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel images={backgroundImages} />

      <div className="absolute inset-0 z-10">
        <Navbar />
        <Header currentSlide={currentSlide} titles={titles} />
      </div>
    </div>
  );
};

export default HeaderLayout;
