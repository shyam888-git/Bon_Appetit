import Image1 from "@/assets/Gallery/Gallery1.png";
import Image2 from "@/assets/Gallery/Gallery2.png";
import Image3 from "@/assets/Gallery/Gallery3.png";
// import "./styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const images = [
  {
    src: Image3,
    alt: "Wedding",
    description: "Wedding",
  },
  {
    src: Image2,
    alt: "Corporate Meeting",
    description: "Corporate Meeting",
  },
  {
    src: Image1,
    alt: "Baby Showers",
    description: "Baby Showers",
  },
  // Add more images here if needed
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="grid justify-center p-4">
      <h2 className="text-[48px] font-normal text-[#402E32] mb-4">
        Booking for <strong className="text-[#F69625]">Events</strong>
      </h2>

      <div className="flex justify-center items-center flex-wrap -mx-2">
        <FaChevronLeft
          size={24}
          onClick={handlePrev}
          className="cursor-pointer"
        />

        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-3 mb-4">
            <div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-4 text-left">{image.description}</div>
          </div>
        ))}

        <FaChevronRight
          size={24}
          onClick={handleNext}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Gallery;
