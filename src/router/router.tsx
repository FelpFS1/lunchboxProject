import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Clients from "../pages/Clients";
import WeeklyReport from "../pages/WeeklyReport";

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
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/report",
        element: <WeeklyReport />,
      },
    ],
  },
]);
