import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Customers from "../pages/Customers";
import WeeklyReport from "../pages/Report";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/report",
        element: <WeeklyReport />,
      },
    ],
  },
]);
