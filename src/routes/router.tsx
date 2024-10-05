import NotFound from "@/pages/error/NotFound";
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Menu from "@/components/Menu/Menu";
import ReservationMain from "@/components/Reservation/ReservationMain";
import Home from "@/pages/Landing/Home";

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
    element: <Menu />,
  },
]);

export default router;
