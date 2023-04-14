import barrelRoll from "../img/do-a-barrel-roll.webp";
import "../css/main.css";
import { FC } from "react";
import { StyledPage, StyledTitle } from "./styles/Page.style";

export const Home: FC = () => {
  return (
    <StyledPage>
      <StyledTitle>Welcome To My App</StyledTitle>
      <p>This is going to be my test app</p>
    </StyledPage>
  );
};
