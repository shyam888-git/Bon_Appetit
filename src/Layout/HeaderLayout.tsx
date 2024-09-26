import Hero from "@/components/Header/Hero";
import Navbar from "@/components/navbar/Navbar";

const HeaderLayout = () => {
  return (
    <div className="background_container">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HeaderLayout;
