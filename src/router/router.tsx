import { createBrowserRouter } from "react-router-dom";
import { ERouter } from "./router.enum";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: ERouter.HOME,
    element: <Home />,
  },
]);
