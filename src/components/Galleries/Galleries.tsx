import Image1 from "@/assets/Gallery/Gallery1.png";
import Image2 from "@/assets/Gallery/Gallery2.png";
import Image3 from "@/assets/Gallery/Gallery3.png";
// import "./styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

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
  const length = images.length;

  const handlePrevious = () => {
    const newIndex = (currentIndex - 3 + length) % length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 3) % length;
    setCurrentIndex(newIndex);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleImages = [
    images[currentIndex % length],
    images[(currentIndex + 1) % length],
    images[(currentIndex + 2) % length],
  ];

  return (
    <div className="grid justify-center p-4">
      <h2 className="text-3xl font-normal text-[#402E32] mb-4">
        Booking for <strong className="text-[#F69625]">Events</strong>
      </h2>

      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row"
        } justify-center items-center -mx-2`}
      >
        {!isMobile && (
          <FaChevronLeft
            size={24}
            className="cursor-pointer"
            onClick={handlePrevious}
          />
        )}

        {visibleImages.map((image, index) => (
          <div
            key={index}
            className={`${
              isMobile ? "w-full" : "w-full sm:w-1/2 md:w-1/4"
            } px-3 mb-4 overflow-hidden group`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110 ${
                isMobile ? "max-w-[300px] max-h-[300px]" : ""
              }`}
            />
            <div className="p-4 text-left">{image.description}</div>
          </div>
        ))}

        {!isMobile && (
          <FaChevronRight
            size={24}
            className="cursor-pointer"
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
