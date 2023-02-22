import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: max-content 1fr;
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    text-align: center;
    margin-bottom: 1rem;

    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: 1.1px;
  }

  .message-dashboard-null {
    text-align: center;
    margin-top: 12rem;
    color: #e4e4e7;

    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: 1.1px;
  }
`;