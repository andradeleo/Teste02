import styled, { css } from "styled-components";


export default styled.input`
  background: #F2F2F2;

  padding: 16px;
  margin: 8px 0px;

  width: 100%;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: 2px solid #F2F2F2;

  outline: none;

  transition: border-color 0.2s ease-in;

  &:focus {
    border-color:  #3D405B;
  }

  ${({ error }) => error && css`
    color: #F24C00;
    border-color: #F24C00 !important ;
  `}
`;