import { FC } from "react";
import { StyledPage, StyledTitle } from "./styles/Page.style";
import { CountDownCard } from "./Fun/CountDownCard";

export const Fun: FC = () => {
  return (
    <StyledPage>
      <StyledTitle>Fun</StyledTitle>
      <CountDownCard />
    </StyledPage>
  );
};
