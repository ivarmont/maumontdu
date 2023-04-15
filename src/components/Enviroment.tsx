import { FC, useState } from "react";
import { StyledPage, StyledTitle } from "./styles/Page.style";
import {
  Button,
  CardContent,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import {EnvironmentService, WebEnviromentResponse} from "../api-client/enviroment-service/EnvironmentService";

export const Enviroment: FC = () => {
  const [urlField, setUrlField] = useState<string>("");
  const [response, setResponse] = useState<WebEnviromentResponse>();
  const environmentService = new EnvironmentService();

  const getWebInfo= async () =>{
    const response = await environmentService.evaluateWebSite(urlField);
    console.log(response);
    setResponse(response);
  }

  return (
    <StyledPage>
      <StyledTitle>Enviroment</StyledTitle>
      <CardContent>
        <Typography variant={"h5"}>Website Carbon</Typography>
        <Typography variant={"body1"}>
          would you like to know how much electricity is consumed by a webpage
        </Typography>
        <InputLabel htmlFor="my-input">
          please insert url to evaluate
        </InputLabel>
        <Input
          id="url-input"
          onChange={(event) => {
            setUrlField(event.target.value);
          }}
          aria-describedby="url-helper-text"
        />
        <Button
          type={"submit"}
          onClick={getWebInfo}
        >
          Evaluate
        </Button>
        <CardContent>is the webpage green: {response?.green}</CardContent>
      </CardContent>
    </StyledPage>
  );
};
