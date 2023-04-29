import { CircularProgress } from "@mui/material";
import { FC } from "react";
import { StyledBox } from "./styles/Loading.style";

export const LoadingSpinner: FC = () => {
  return (
    <StyledBox>
      <CircularProgress />
    </StyledBox>
  );
};
