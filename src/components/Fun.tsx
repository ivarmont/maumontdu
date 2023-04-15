import { FC, useState } from "react";
import { StyledPage, StyledTitle } from "./styles/Page.style";
import {
  Button, Card,
  CardContent,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import {FunService} from "../api-client/fun-service/FunService";

export const Fun: FC = () => {
  const [text, setText] = useState<string>("");
  const [response, setResponse] = useState();
  const funService = new FunService();

  const getWebInfo= async () =>{
    const response = await funService.evaluateWebSite(text);
    console.log(response);
    setResponse(response);
  }

  return (
    <StyledPage>
      <StyledTitle>Fun</StyledTitle>
      <Card>


      <CardContent>
        <Typography variant={"h5"}>Website Carbon</Typography>
        <Typography variant={"body1"}>
          would you like to know how Yoda would say it
        </Typography>
        <InputLabel htmlFor="my-input">
          please insert text
        </InputLabel>
        <Input
          id="url-input"
          onChange={(event) => {
            setText(event.target.value);
          }}
          aria-describedby="url-helper-text"
        />
        <Button
          onClick={getWebInfo}
        >
          Translate
        </Button>
        <CardContent>Translated to: {response}</CardContent>
      </CardContent>
      </Card>
    </StyledPage>
  );
};
