
import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Default";
import Equipments from "../pages/EquipmentsControl"
import Calls from "../pages/CallsControl"

import AddEquipments from "../pages/AddEquipment";
import EditEquipments from "../pages/EditEquipment";
import RemoveEquipments from "../pages/RemoveEquipment";

import AddCall from "../pages/AddCall";
import EditCall from "../pages/EditCall"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/equipments",
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
    path: "/edit-equipment",
    element: <EditEquipments />
  },
  {
    path: "/remove-equipment",
    element: <RemoveEquipments />
  },
  {
    path: "/add-call",
    element: <AddCall />
  },
  {
    path: "/edit-call",
    element: <EditCall />
  },
  {
    path: "/remove-call",
    element: <RemoveEquipments />
  },
])