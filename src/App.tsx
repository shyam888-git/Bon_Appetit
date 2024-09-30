import "./App.css";
import Gallery from "./components/Card/Card";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import HeaderLayout from "./Layout/HeaderLayout";
import Image1 from "@/assets/Background1.png";
import Image2 from "@/assets/Background2..png";
import Image3 from "@/assets/Background5.png";
const App = () => {
  const images = [Image1, Image2, Image3];
  return (
    <div className="px-0">
      <HeaderLayout />
      <Hero />
      <Menu />
      <Gallery />
    </div>
  );
};

export default App;
