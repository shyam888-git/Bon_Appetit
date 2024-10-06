import NotFound from "@/pages/error/NotFound";
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ReservationMain from "@/components/Reservation/ReservationMain";
import Home from "@/pages/Landing/Home";
import MenuSection from "@/components/Menu/MenuSection";

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
    path: "/menu",
    element: <MenuSection />,
  },
]);

export default router;
