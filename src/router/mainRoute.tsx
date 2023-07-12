import { createBrowserRouter } from "react-router-dom";
import SortPage from "../pages/SortPage";
import { LandingPage } from "../pages";
import { Layout } from "../components";
import Error2 from "../pages/ErrorPage/Error";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/sort",
    element: <SortPage />,
  },
  {
    path: "*",
    element: <Error2 />,
  },
]);
