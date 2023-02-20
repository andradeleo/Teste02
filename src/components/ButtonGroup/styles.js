import styled from "styled-components";


export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  margin-top: 24px;
  max-width: 430px;
  width: 90%;


button {

  padding: 16px 0px;

  width: 100%;

  border-radius: 4px;
  background: #7c3aed;
  box-shadow: 0px 4px 10px  rgba(0, 0, 0, 0.04);

  color: ${({isLoading}) => isLoading ? "transparent" : "#FFF"};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;

  transition: all 0.8s;

  &:active {
    transform: scale(0.99);
    background: #FFC75B;
  }

  &[disabled] {
    background: #CCC;
    cursor: default;
  }
}

.loader {
  position: absolute;
}

`;