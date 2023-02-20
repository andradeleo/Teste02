import styled from "styled-components";


export const GoBackContainer = styled.div`
  position: absolute;

  top: 50px;
  left: 70px;
  z-index: 4;

  a {
    display: flex;
    align-items: center;
    gap: 12px;

    color: #18181b;

    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateX(-8px);
    }
  }
`;