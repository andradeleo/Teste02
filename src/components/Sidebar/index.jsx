
import { Link } from "react-router-dom";

import {StyledSide } from "./styles";
import { Chat, DeviceTabletSpeaker } from "phosphor-react";

export default function Sidebar() {
  return (
    <StyledSide>
      <nav>
        <ul>
          <Link to={"/equipments"}>
            <DeviceTabletSpeaker size={24} color="#18181b" weight="bold" />
            <span>Equipamentos</span>
          </Link>
          <Link to={"/calls"}>
            <Chat size={24} color="#18181b" weight="bold" />
            <span>Chamados</span>
          </Link>
        </ul>
      </nav>
    </StyledSide>
  )
}
