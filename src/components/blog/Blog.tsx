import Box from "@mui/material/Box";
import { FC } from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { BlogText, CodeText } from "./styles/Blog,style";

export const Blog: FC = () => {
  return (
    <Box>
      <Card hidden={true}>
        <CardContent>
          <Typography variant={"subtitle1"}>
            Hosting a React webpage in GitHub
          </Typography>
          <br />
          <BlogText>
            Last Techday, I wanted to fulfill my dream of hosting my own webpage
            on this new invention known as the Internet. I also wanted to try
            building a React App which is not constrained to legacy versions ;).
            <br />
            My budget was limited to 1.5 Kebaps (Around 15 euros at the current
            Munich trading value). So I decided to spent 12 euros for a domain
            given by G****E Domains (the data has been anonymized as this is non
            sponsored). <br />
            So which Steps did I follow.
          </BlogText>
          <Typography variant={"subtitle2"}>
            Step 1: Creating the App
          </Typography>
          <BlogText>
            After reading about creat-react-app to be already death, I gave it a
            try with Vite, so:
            <CodeText>$yarn create vite</CodeText>
            After just selected React and typescript.
          </BlogText>
        </CardContent>
      </Card>
    </Box>
  );
};
