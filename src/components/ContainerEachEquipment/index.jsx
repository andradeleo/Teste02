
import { Link } from "react-router-dom"

import { Textbox, TrashSimple } from "phosphor-react"
import { Container } from "./styles";

export default function ContainerEachEquipment({infos, onRemove}) {
  return (
    <Container>
      <div className="infos">
        <div><span>{infos.name}</span></div>      
        <div><span>{infos.serieNumber}</span></div>
        <div><strong>{infos.manufacturer}</strong></div>
      </div>
      <div className="icons">
        <Link 
          to={`/edit-equipment/${infos._id}`}>
          <Textbox  size={24} weight="bold" color="#18181b"/>
        </Link>
        <button onClick={() => onRemove(infos._id)}>
          <TrashSimple  size={24} weight="bold" color="#18181b"/>
        </button>
      </div>
    </Container>
  )
}
