
import React, {createContext, useEffect, useState} from 'react'

import { RouterProvider } from "react-router-dom"
import { router } from "../../routes/router"
import { api } from '../../services/axios';

export const DataContext = createContext();

export default function App() {
  const [dataEquipments, setDataEquipments ] = useState([
    {
      name: "Broca", price: "24,90", serieNumber: "877", date: "2023-03-02", manufacturer: "CODETECH", _id: "323QQ2" 
    },
    {
      name: "Prego", price: "4,90", serieNumber: "127", date: "2023-02-02", manufacturer: "AVOSSKO", _id: "323EW2" 
    },
    {
      name: "Furadeira", price: "242,90", serieNumber: "437", date: "2023-05-02", manufacturer: "AP FULLSTACK", _id: "3WD232" 
    }
  ]);
  const [dataCalls, setDataCalls ] = useState([
    {title: "Quebrou o software", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusamus.", equipment: "Broca", date:"2023-02-20", _id: "123"},
    {title: "Furadeira Parou", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusamus.", equipment: "Furadeira", date:"2023-02-02", _id: "13"},
    {title: "Comprar pregos", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusamus.", equipment: "pregos", date:"2023-02-15", _id: "3"}
  ]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get("/equipments")
        setDataEquipments(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get("/calls")
        setDataCalls(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <DataContext.Provider value={[dataEquipments, dataCalls]}>
     <RouterProvider router={router} />
    </DataContext.Provider>
  )
}
