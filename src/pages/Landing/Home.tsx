import Gallery from "@/components/Galleries/Galleries";
import Hero from "@/components/Hero/Hero";
import Menu from "@/components/Menu/Menu";
import Reservation from "@/components/Reservation/Reservation";
import HeaderLayout from "@/Layout/HeaderLayout";

const Home = () => {
  return (
    <div className="overflow-y-hidden">
      <HeaderLayout />
      <Hero />
      <Menu />
      <Gallery />
      <Reservation />
    </div>
  );
};

export default Home;
