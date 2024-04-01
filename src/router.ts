import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./views/Layout";
import { HomeView } from "./views/Home";
import { ListView } from "./views/List";
import { DetailsView } from "./views/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: HomeView,
      },
      {
        path: "/list",
        Component: ListView,
        children: [
          {
            path: "/list/:detailsId",
            Component: DetailsView,
          },
        ],
      },
    ],
  },
]);
