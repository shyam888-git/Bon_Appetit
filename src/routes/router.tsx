import NotFound from "@/pages/error/NotFound";
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ReservationMain from "@/components/Reservation/ReservationMain";
import Home from "@/pages/Landing/Home";
import MenuSection from "@/components/Menu/MenuSection";
import { ContactUs } from "@/components/Contact/ContactUs";
import CookiesPolicy from "@/components/CookiesPolicy/CookiesPolicy";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "@/components/Terms/TermsCondition";

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

  {
    path: "/cookies-policy",
    element: <CookiesPolicy />,
  },
  {
    path:'/privacy-policy',
    element:<PrivacyPolicy/>
  },
  {
    path:'/terms-conditions',
    element:<TermsConditions/>
  }
]);

export default router;
