import styled from "styled-components";


export const Layout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;

  width: 100%;
  min-height: 100vh;

  @media (max-width: 780px) {
    grid-template-columns: 110px 1fr;
  }
`;