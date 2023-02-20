import styled from "styled-components";


export const FormContainer = styled.form`

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  max-width: 630px;
  width: 80%;

  p {
    margin-top: 8px;
    max-width: 430px;
    text-align: center;
    font-size: 14px;

    a {
      font-size: 14px;
      text-decoration: none;
    }
  }

  .forgot-passoword {
    margin-top: 8px;
    max-width: 430px;
    width: 100%;
    font-size: 14px;

  }
`;