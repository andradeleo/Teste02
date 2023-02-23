
import React, {createContext, useEffect, useState} from 'react'

import { RouterProvider } from "react-router-dom"
import { router } from "../../routes/router"

export let DataContext = createContext();

export default function App() {
  const [dataEquipments, setDataEquipments ] = useState([
    {  name: "Equipamento1", price: "24.000", serieNumber: "1232", date: "2022-11-02", manufacturer: "EMPRESA 1", _id: "323QQ2" }
  ]);

  const [dataCalls, setDataCalls ] = useState([
    {title: "Chamada 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusamus.", equipment: "Broca", date:"2023-02-15", _id: "111A"},
  ]);

  function updateEquipments(dataEquipments) {
    setDataEquipments(dataEquipments)
  }
  function updateCalls(dataEquipments) {
    setDataCalls(dataEquipments)
  } 

  return (
    <DataContext.Provider value={{dataEquipments, dataCalls, updateEquipments, updateCalls}}>
     <RouterProvider router={router} />
    </DataContext.Provider>
  )
}
