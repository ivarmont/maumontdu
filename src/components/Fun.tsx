import { FC, useState } from "react";
import { StyledPage, StyledTitle } from "./styles/Page.style";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { FunService } from "../api-client/fun-service/FunService";
import { CountDown } from "./Fun/CountDown";

export const Fun: FC = () => {
  const [text, setText] = useState<string>("");

  return (
    <StyledPage>
      <StyledTitle>Fun</StyledTitle>
      <Card>
        <CardContent>
          <Typography variant={"h5"}>Mauricio's birthday countdown</Typography>
          <CountDown />
        </CardContent>
      </Card>
    </StyledPage>
  );
};
