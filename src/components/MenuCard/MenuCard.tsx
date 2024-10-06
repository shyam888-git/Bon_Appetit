const MenuCard = () => {
  return (
    <div className="flex items-center justify-center  mt-32">
      <div className="bg-orange-500 text-center p-10 rounded-lg max-w-md shadow-lg">
        <h1
          className="text-4xl font-bold text-black mb-4"
          style={{ fontFamily: "'Cinzel Decorative', cursive" }}
        >
          Sauced Croissant
        </h1>
        <p className="text-black mb-6">
          Lorem Ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum
        </p>
        <button className="bg-white text-orange-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-400 transition-all duration-300">
          See Menu
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
