import { useContext, useEffect } from "react";

import Header from "../../components/Header";
import ContainerEachEquipment from "../../components/ContainerEachEquipment"

import { Container, Content } from "./styles";
import { DataContext } from "../../components/App";
import { toast } from "react-toastify";

import { api } from "../../services/axios";

export default function EquipmentsControl() {

  async function handleRemoveEquipment(id) {
    try {
      await api.delete(`/equipments/${id}`)
      toast.success("Equipamento removido!")
    }catch(err) { console.log(err)}
  }

  let [dataEquipments] = useContext(DataContext)

  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get("/equipments")
        dataEquipments = res.data
      } catch(err) {
        console.log(err)
      }
    }
    getData()
  }, [])



  return (
    <Container>
      <Header 
        adicionar={"/add-equipment"} 
        title="Cadastre um novo equipamento"
      />

      <Content>
        {
          dataEquipments.length == 0
          ?
          <span className="message-dashboard-null">Nenhum equipamento cadastrado :(</span>
          :
          <h2>Todos os equipamentos</h2>
        }
        {
          dataEquipments.map((infos) => (
            <ContainerEachEquipment 
              key={infos._id} 
              infos={infos}
              onRemove={handleRemoveEquipment}
            />
          ))
        }
      </Content>

    </Container>
  )
}
