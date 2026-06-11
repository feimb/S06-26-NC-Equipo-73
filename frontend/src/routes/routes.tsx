import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DataMapAI from "../pages/DataMapAI";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "docs",
        element: <DataMapAI />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
