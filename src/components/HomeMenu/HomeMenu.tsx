import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const HomeMenu = () => {
  return (
    <div>
      <div>
        <h2>Our Menu</h2>
        <div className="flex items-center space-x-4">
          <FaChevronLeft size={24} />
          <FaChevronRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
