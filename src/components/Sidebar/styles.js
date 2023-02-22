import styled from "styled-components";


export const StyledSide = styled.div`
  width: 100%;
  min-height: 100%;

  padding: 4rem 2rem; 

  background-color: blue;

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

      padding: 1rem;
      margin: .5rem 0;

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

      &:hover {        
        background-color: #f4f4f5;
      }
    }
  }
`;