import styled from "styled-components";

export const CountDownContainer = styled.div`
  max-width: 600px;
  min-height: 100px;
  margin: 50px auto;
  flex-wrap: wrap;
 
`;
export const CountDownValues = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-direction: column;

  @media (min-width: 540px) {
    flex-direction: row;
  }
`;

export const CountDownValue = styled.div`
  width: 100px;
  text-align: center;
  span {
    font-size: 1.3rem;
  }
`;

export const BigText = styled.p`
  font-weight: bold;
  font-size: 3.5rem;
  line-height: 1;
  margin: 5px;
`;
