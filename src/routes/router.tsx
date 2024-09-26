import NotFound from "@/pages/error/NotFound";
import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: PublicRoutes,
  },
]);

export default router;
