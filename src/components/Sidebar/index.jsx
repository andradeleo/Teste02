import { Link, useLocation } from "react-router-dom";

import { StyledSide, LinkContainerNav } from "./styles";
import { Chat, DeviceTabletSpeaker } from "phosphor-react";

export default function Sidebar() {
  const {pathname} = useLocation()
  
  return (
    <StyledSide>
      <nav>
        <ul>
          <LinkContainerNav isActive={pathname == "/"}>
            <Link to={"/"} >
              <DeviceTabletSpeaker size={24} color="#18181b" weight="bold" />
              <span>Equipamentos</span>
            </Link>
          </LinkContainerNav>
            <LinkContainerNav isActive={pathname == "/calls"}>
              <Link to={"/calls"} >
                <Chat size={24} color="#18181b" weight="bold" />
                <span>Chamados</span>
              </Link>
            </LinkContainerNav>
        </ul>
      </nav>
    </StyledSide>
  );
}
