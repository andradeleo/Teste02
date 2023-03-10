
import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Default";
import Equipments from "../pages/EquipmentsControl"
import Calls from "../pages/CallsControl"

import AddEquipments from "../pages/AddEquipment";
import EditEquipments from "../pages/EditEquipment";

import AddCall from "../pages/AddCall";
import EditCall from "../pages/EditCall"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Equipments />
      },
      {
        path: "/calls",
        element: <Calls />,
      },
    ],    
  },
  {
    path: "/add-equipment",
    element: <AddEquipments />
  },
  {
    path: "/edit-equipment/:id",
    element: <EditEquipments />
  },
  {
    path: "/add-call",
    element: <AddCall />
  },
  {
    path: "/edit-call/:id",
    element: <EditCall />
  }
])