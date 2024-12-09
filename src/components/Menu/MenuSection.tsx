import Menu from "./Menu";

const MenuSection = () => {
  return (
    <div className="bg-[#FFF7EB] w-full py-16 ">
      {/* Wrapping all the borders and text in a column */}
      <div className="w-full flex items-center justify-center gap-4 py-8">
        <div className="flex-grow h-[2px] bg-gray-800 relative">
          <div className="absolute top-[3px] left-0 right-0 h-[2px] bg-gray-800" />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl whitespace-nowrap">
          Our <span className="text-orange-500">Menu</span>
        </h2>
        <div className="flex-grow h-[2px] bg-gray-800 relative">
          <div className="absolute top-[3px] left-0 right-0 h-[2px] bg-gray-800" />
        </div>
      </div>
      {/* Reservation form */}
      <Menu />
    </div>
  );
};

export default MenuSection;
