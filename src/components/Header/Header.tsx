import { useEffect, useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import { Button } from "../ui/button";
import "./styles.css";
const Header = ({ currentSlide, titles }) => {
  const [mainTitle, subTitle] = titles[currentSlide];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
        {isMobile ? (
          <MenuCard />
        ) : (
          <>
            <div className="button_title mt-32">
              <span>{mainTitle} </span>
              <span className="mt-[-8px]">{subTitle} </span>
            </div>

            <Button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 mt-4"
            >
              See Menu
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Header;
