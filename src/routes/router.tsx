import NotFound from "@/pages/error/NotFound";
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ReservationMain from "@/components/Reservation/ReservationMain";
import Home from "@/pages/Landing/Home";
import MenuSection from "@/components/Menu/MenuSection";
import { ContactUs } from "@/components/Contact/contactUs";
import ContactForm from "@/components/Contact/ContactForm";
import LandingForm from "@/components/Contact/ContactForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: PublicRoutes,
  },
  {
    path: "/reservation",
    element: <ReservationMain />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/menu",
    element: <MenuSection />,
  },
]);

export default router;
