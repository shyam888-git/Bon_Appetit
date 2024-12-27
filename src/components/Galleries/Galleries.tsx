import Image1 from "@/assets/Gallery/Gallery1.png";
import Image2 from "@/assets/Gallery/Gallery2.png";
import Image3 from "@/assets/Gallery/Gallery3.png";
// import "./styles.css";
import { useEffect, useState } from "react";

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
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 3, Math.max(images.length - 3, 0))
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex + 3 < images.length;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid justify-center p-4">
      <h2 className="text-3xl px-16  text-[#402E32] mb-6 mt-6">
        Booking for{" "}
        <strong className="text-[#F69625] ">Events</strong>
      </h2>

      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row"
        } justify-center items-center -mx-2`}
      >
        {!isMobile && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            className="cursor-pointer"
            onClick={canGoPrevious ? handlePrevious : undefined}
          >
            <path d="M10 17.5L2 9.5L10 1.5" stroke="black" stroke-width="2" />
          </svg>
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
              className={`w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-105 ${
                isMobile ? "max-w-[300px] max-h-[300px]" : ""
              }`}
            />
            <div className="px-2 py-4 text-left">{image.description}</div>
          </div>
        ))}

        {!isMobile && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            className="cursor-pointer"
            onClick={canGoNext ? handleNext : undefined}
          >
            <path d="M1 1.5L9 9.5L1 17.5" stroke="black" stroke-width="2" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Gallery;
