import { Button } from "../ui/button";
import "./styles.css"; // Import your styles

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white ">
        <div className="button_title mt-80">
          <span>Sauced </span>
          <span>Crossaint </span>
        </div>

        <Button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 mt-4"
        >
          See Menu
        </Button>
      </div>
    </section>
  );
};

export default Hero;
