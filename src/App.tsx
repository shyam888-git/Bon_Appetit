import "./App.css";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Galleries/Galleries";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Reservation from "./components/Reservation/Reservation";
import HeaderLayout from "./Layout/HeaderLayout";

const App = () => {
  return (
    <div>
      <HeaderLayout />
      <Hero />
      <Menu />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  );
};

export default App;
