import { createBrowserRouter } from "react-router-dom";
import { ERouter } from "./router.enum";
import Home from "../pages/home";
import LocationPage from "../pages/location";
import AboutPage from "../pages/about";

export const router = createBrowserRouter([
  {
    path: ERouter.HOME,
    element: <Home />,
  },
  {
    path: ERouter.LOCATION,
    element: <LocationPage />,
  },
  {
    path: ERouter.ABOUT,
    element: <AboutPage />,
  },
]);
