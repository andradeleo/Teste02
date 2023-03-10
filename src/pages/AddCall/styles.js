
import styled, { css } from "styled-components";


export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  min-height: 100vh;
  width: 100%;
`;

export const TextArea = styled.textarea`
  border: 2px solid #18181b;
  resize: none;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  height: 12rem;
  margin: .5rem 0px;
  border-radius: 4px;
  padding: .5rem;
  
  @media (max-width: 780px) {
      height: 6rem;
  }

  ${({ error }) => error && css`
    color: #F24C00;
    border-color: #F24C00 !important ;
  `}
`;

