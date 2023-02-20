
import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Default";
import Equipments from "../pages/EquipmentsControl"
import Calls from "../pages/CallsControl"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/equipments",
        element: <Equipments />,
      },
      {
        path: "/calls",
        element: <Calls />,
      },
    ],
  },
])