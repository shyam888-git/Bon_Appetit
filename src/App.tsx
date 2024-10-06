import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
       <Navbar />

      <RouterProvider router={router} />

      <Footer />
    </>
  );
};

export default App;
