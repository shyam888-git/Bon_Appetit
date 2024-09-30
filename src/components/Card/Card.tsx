import React from "react";
import Image1 from "@/assets/Gallery/Gallery1.png";
import Image2 from "@/assets/Gallery/Gallery2.png";
import Image3 from "@/assets/Gallery/Gallery3.png";

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
];

const Gallery = () => {
  return (
    <div className=" grid justify-center p-4">
      <h2 className="text-[48px] font-normal text-[#402E32] mb-4">
        Booking for <strong className="text-[#F69625]">Events</strong>
      </h2>

      <div className="flex justify-center flex-wrap -mx-2">
        {images.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-3 mb-4">
            <div>
              <img src={image.src} alt={image.alt} className="w-full h-auto" />
              <div className="p-4 text-left">{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
