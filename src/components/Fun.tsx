import { FC } from "react";
import { StyledPage, StyledTitle } from "./styles/Page.style";
import { BirthdayCountDown } from "./Fun/BirthdayCountDown";

export const Fun: FC = () => {
  return (
    <StyledPage>
      <StyledTitle>Fun</StyledTitle>
      <BirthdayCountDown />
    </StyledPage>
  );
};
