import "./App.css";
import Gallery from "./components/Galleries/Galleries";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import HeaderLayout from "./Layout/HeaderLayout";

const App = () => {
  return (
    <div className="px-0">
      {/* <HeaderLayout /> */}
      <Hero />
      <Menu />
      <Gallery />
      {/* <Reservation /> */}
    </div>
  );
};

export default App;
