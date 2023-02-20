import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  max-width: 430px;
  width: 90%;

  small {
    width: 100%;
    text-align: left;
    font-size: 12px;
    margin: 4px;

    color: #F24C00;
  }

  div {
    max-width: 430px;
    width: 100%;
    position: relative;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.4;
      position: absolute;
      top: 50%;
      right: 1rem;

      transform: translateY(-50%);
      transition: 0.6s;

      &:hover {
        opacity: 0.6;
      }
    }
  }

`;