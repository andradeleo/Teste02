import styled from "styled-components";


export const Container = styled.div`
  width: 90%;
  padding: 16px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.04);
  background: #f4f4f5;
  border: 3px solid #4c1d95;
  border-radius: 4px;
  transition: all 0.6s;

  margin: 8px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-color: #8b5cf6;
  }

  .infos {
    width: 100%;
    padding-right: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    div {
      max-width: 300px;
      width: 40%;      
    }
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;