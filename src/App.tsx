import "./App.css";
import Hero from "./components/Hero/Hero";
import HeaderLayout from "./Layout/HeaderLayout";
const App = () => {
  return (
    <div className="px-0">
      <HeaderLayout />
      <Hero />
    </div>
  );
};

export default App;
