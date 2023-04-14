import { FC } from "react";
import {
  StyledAvatar,
  StyledPage,
  StyledTitle,
  StyledCardContent,
} from "./styles/Page.style";
import AvatarImage from "../assets/mauricio.jpg";
import { Card, CardContent, Typography } from "@mui/material";

export const About: FC = () => {
  return (
    <StyledPage>
      <StyledTitle>About</StyledTitle>
      <Card>
        <StyledCardContent>
          <StyledAvatar src={AvatarImage} sx={{ width: 111, height: 116 }} />
        </StyledCardContent>
        <CardContent>
          <Typography variant={"h5"}>Mauricio Montellano</Typography>
          <Typography variant={"body1"}>
            Now you know why the name of the webpage. In here I plan to
            experiment with the knew things I learn about frontend software
            development, as I consider more of a backend developer.
          </Typography>
        </CardContent>
      </Card>
    </StyledPage>
  );
};
