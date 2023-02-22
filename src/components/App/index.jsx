
import React, {createContext, useEffect, useState} from 'react'

import { RouterProvider } from "react-router-dom"
import { router } from "../../routes/router"
import { api } from '../../services/axios';

export const DataContext = createContext();

export default function App() {
  const [dataEquipments, setDataEquipments ] = useState([]);
  const [dataCalls, setDataCalls ] = useState([]);

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
