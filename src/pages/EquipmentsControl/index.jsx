import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

import { Container } from "./styles";

export default function EquipmentsControl() {
  return (
    <Container>
      <Header
        adicionar={"/add-equipment"}
        editar={"/edit-equipment"}
        excluir={"/remove-equipment"}
      />
    </Container>
  )
}
