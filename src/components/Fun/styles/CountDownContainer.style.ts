import styled from "styled-components";

export const CountDownContainer = styled.div`
  max-width: 600px;
  min-height: 100px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const CountDownValues = styled.div`
  display: flex;
`;

export const CountDownValue = styled.div`
  width: 100px;
  margin: 5px;
  text-align: center;
  span {
    font-size: 1.3rem;
  }
`;

export const BigText = styled.p`
  font-weight: bold;
  font-size: 3.5rem;
  line-height: 1;
  margin: 10px;
`;
