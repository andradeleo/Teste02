import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1.5rem 4rem;

  background: #FFF;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  border-bottom: 2px solid #e4e4e7;

  @media (max-width: 968px) {
    justify-content: center;
    gap: 1rem;
  } 

  h1 {
    font-size: 1.3rem;
    color: #171717;

    @media (max-width: 780px) {
        text-align: center; 
        font-size: 1rem;
    }
  }
  
  a {
    padding: .5rem 1rem;
    background: #F4F4F5;
    border-radius: 0.25rem;
    border: 3px solid #F4F4F5;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.04);

    display: flex;
    align-items: center;
    gap: .8rem;

    &:hover {
      border-bottom: 3px solid #8b5cf6;
    }

    span {
      font-size: 1.1rem;
      font-weight: 500;

      color: #18181b;
    }
  }
`;