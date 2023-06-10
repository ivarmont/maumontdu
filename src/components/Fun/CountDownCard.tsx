import React, {FC, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {CountDown} from "./CountDown";
import {ExpandMore} from "@mui/icons-material";

export const CountDownCard: FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore/>}>
        <Typography variant={"h5"}>Mauricio's birthday countdown</Typography>
      </AccordionSummary>
        <AccordionDetails>
          <CountDown />
        </AccordionDetails>
    </Accordion>
  );
};
