

import { Link } from "react-router-dom";

import { GoBackContainer } from "./styles";
import { ArrowLeft } from "phosphor-react"



export default function BackHome({path}) {
  return (
    <GoBackContainer>
      <Link to={path}> 
        <ArrowLeft size={24} color="#222222" weight="bold" />
        <span>Voltar</span>
      </Link>
    </GoBackContainer>
  );
}
