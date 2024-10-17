import { useEffect, useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import { Button } from "../ui/button";
import "./styles.css";
import CookieConsent from "../Cookies/Cookies";

const Header = ({ currentSlide, titles }) => {
  const [mainTitle, subTitle] = titles[currentSlide];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowCookieConsent(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative">
      {!isMobile && (
        <div className="flex justify-end items-center mr-12 mt-4">
          <Button
            type="submit"
            className="bg-[#F69625] text-[#FFF] font-bold flex justify-center items-center gap-2 px-6 py-5 mt-4 hover:bg-[#F69625]"
          >
            Video
          </Button>
        </div>
      )}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
        {isMobile ? (
          <MenuCard />
        ) : (
          <>
            <div className="button_title mt-80">
              <span>{mainTitle} </span>
              <span className="mt-[-8px]">{subTitle} </span>
            </div>

            <Button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 mt-4"
            >
              See Menu
            </Button>

            {showCookieConsent && <CookieConsent />}
          </>
        )}
      </div>
    </section>
  );
};

export default Header;
