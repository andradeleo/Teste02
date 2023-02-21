
import { Link } from "react-router-dom";

import { PlusCircle } from "phosphor-react"
import {StyledHeader } from "./styles";

export default function Header({ adicionar, title}) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Link to={adicionar}>
        <PlusCircle size={24} color="#18181b" weight="bold" />
        <span>Adicionar</span>
      </Link>
    </StyledHeader>
  )
}
