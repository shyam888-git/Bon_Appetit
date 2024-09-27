import React from "react";
import Hero from "@/components/Header/Hero";
import Navbar from "@/components/navbar/Navbar";
import background1 from "@/./assets/Background1.png";
import background2 from "@/./assets/Background2..png";
import background3 from "@/./assets/Background3.png";
import background4 from "@/./assets/Background4.png";
import background5 from "@/./assets/Background5.png";
import background6 from "@/./assets/Bakground6.png";
import background7 from "@/./assets/Background.jpeg";
import Carousel from "@/components/ui/carousel";

const backgroundImages = [
  background1,
  background2,
  background3,
  background4,
  background5,
  background6,
  background7,
];

const HeaderLayout = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel images={backgroundImages} />
      <div className="absolute inset-0 z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default HeaderLayout;