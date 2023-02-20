
import { Link } from "react-router-dom";

import { PlusCircle, Textbox, TrashSimple } from "phosphor-react"
import {StyledHeader } from "./styles";

export default function Header({ visualizar, adicionar, editar, excluir}) {
  return (
    <StyledHeader>
      <Link to={adicionar}>
        <PlusCircle size={24} color="#18181b" weight="bold" />
        <span>Adicionar</span>
      </Link>
      <Link to={editar}>
          <Textbox size={24} color="#18181b" weight="bold" />
        <span>Editar</span>
      </Link>
      <Link to={excluir}>
        <TrashSimple size={24} color="#18181b" weight="bold" />
        <span>Excluir</span>
      </Link>
    </StyledHeader>
  )
}
