import { useContext, useEffect, useState } from "react";

import Header from "../../components/Header";
import ContainerEachEquipment from "../../components/ContainerEachEquipment"

import { Container, Content } from "./styles";
import { DataContext } from "../../components/App";
import { toast } from "react-toastify";

export default function EquipmentsControl() {

  async function handleRemoveEquipment(id) {
    try {
      /* api.delete(`/equipments/${id}`) */
      toast.success("Equipamento removido!")
    }catch(err) { console.log(err)}
  }

  const [dataEquipments] = useContext(DataContext)

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
          <span>Nenhum equipamento cadastrado :(</span>
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
