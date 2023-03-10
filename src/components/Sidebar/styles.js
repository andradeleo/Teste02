import styled from "styled-components";


export const StyledSide = styled.div`
  width: 100%;
  min-height: 100%;

  padding: 4rem 2rem; 

  background-color: #FAFAFA;

  @media (max-width: 780px) {
      padding: 4rem 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;

    @media (max-width: 780px) {
      align-items: center;
  }

    a {
      display: flex;
      align-items: center;
      gap: 16px;

      padding: .7rem 1rem;
      border-radius: .5rem;

      span {
        font-size: 1.1rem;
        font-weight: bold;
        letter-spacing: 1.2px;

        color: #18181b;

        @media (max-width: 780px) {
          display: none;
          
        }
      }
    }
  }
`;

export const LinkContainerNav = styled.div`
  background: ${({ isActive}) => isActive ? "#7c3aed" : "transparent"};
  border-radius: .5rem;
  margin: .5rem 0;
`;
