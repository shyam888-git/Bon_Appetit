import "./styles.css";
const Hero = () => {
  return (
    <section className="relative background_image">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col  items-center justify-center  h-full text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Sauced Croissant
        </h1>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">
          See Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;
