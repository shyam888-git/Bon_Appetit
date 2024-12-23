import { useState, useEffect } from "react";
import LargeScreenNavbar from "./LargeScreenNavbar";
import MobileNavbar from "./MobileNavbar";
import Bistra from "../../assets/Bistro.png";
import Logo from "../../assets/Logo.png";
import "./styles.css";
import Zerla from "../../assets/Zarla.png";
import Icon from "@/assets/Booking (1).png";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center border-[2px]
     border-[#818080] justify-between py-4 px-4 bg-transparent
     text-white shadow-[0px_4px_6px_rgba(0,0,0,0.1)] navbar"
    >
      <div className="flex items-center space-x-4">
        {isMobile && <MobileNavbar />}
        <div className="lg:flex items-center space-x-4 hidden logo_container">
          <a href="/">
            {" "}
            <img src={Logo} alt="Bistro Logo" className="h-8" />
          </a>
          <a href="/">
            <img src={Bistra} alt="Bistro" className="h-8" />
          </a>
        </div>
      </div>
      <LargeScreenNavbar />
      <div className="md:hidden">
        <img src={Zerla} alt="Zerla Logo" className="h-8" />
      </div>
      <button className="bg-[#F69625] text-[#FFF]  flex justify-center items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#F69625]">
        <span>
          <img src={Icon} alt="home" />
        </span>{" "}
        Book a Table
      </button>
    </nav>
  );
};

export default Navbar;
