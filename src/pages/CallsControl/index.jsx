import { useContext } from "react";
import Header from "../../components/Header";
import ContainerEachCall from "../../components/ContainerEachCall";

import {Container, Content} from "./styles";

import { DataContext } from "../../components/App";


export default function CallControl() {

  const [dataEquipments, dataCalls] = useContext(DataContext)

  async function handleRemoveCall(id) {
    try {
        await api.delete(`/calls/${id}`)
        toast.success("Chamado removido!")
    }catch(err) { console.log(err)}

  }

  return (
    <Container>
      <Header
        adicionar={"/add-call"}
        title="Cadastre um novo chamado"
      />

      <Content>
        {
          dataCalls.length == 0
          ?
          <span className="message-dashboard-null">Nenhum chamado cadastrado :(</span>
          :
          <h2>Todos os chamados</h2>
        }
        {
          dataCalls.map((infos) => (
            <ContainerEachCall 
              key={infos._id} 
              infos={infos}
              onRemove={handleRemoveCall}
            />
          ))
        }
      </Content>
    </Container>
  )
}
