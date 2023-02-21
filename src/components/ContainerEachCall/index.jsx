
import { useContext } from "react";
import { DataContext } from "../App";
import { Container } from "./styles";

import { Link } from "react-router-dom";
import { Textbox, TrashSimple } from "phosphor-react";

import { calculateDays } from "../../utils/days";

export default function ContainerEachCall({infos, onRemove}) {
  const [dataEquipments] = useContext(DataContext);

  const equipmentFromCall = dataEquipments.find((equipment) => {
    return equipment.serieNumber == infos.equipment
  }) 

  const daysPassed = calculateDays(infos.date)

  return (
    <Container>
      <div className="infos">
        <div><span>{infos.title}</span></div>
        <div><span>{equipmentFromCall.name}</span></div>
        <div><span>{infos.date}</span></div>
        <div><strong>{daysPassed > 0 ? `Aberto há ${daysPassed} dia(s)` : "Há menos de um dia" }</strong></div>
      </div>
      <div className="icons">
        <Link 
          to={`/edit-call/${infos._id}`}>
          <Textbox  size={24} weight="bold" color="#18181b"/>
        </Link>
        <button onClick={() => onRemove(infos._id)}>
          <TrashSimple  size={24} weight="bold" color="#18181b"/>
        </button>
      </div>
    </Container>
  )
}
