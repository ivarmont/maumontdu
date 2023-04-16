import { FC, useEffect, useState } from "react";
import {
  BigText,
  CountDownContainer,
  CountDownValue,
  CountDownValues,
} from "./styles/CountDownContainer.style";

export const CountDown: FC = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const birthdayDate = "8 Nov 2023";

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function updateRemainingTime() {
    const changingDate = new Date(birthdayDate);
    const currentDate = new Date();
    const totalSeconds =
      (changingDate.getTime() - currentDate.getTime()) / 1000;

    setDays(Math.floor(totalSeconds / 3600 / 24));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds % 60));
  }

  return (
    <CountDownContainer>
      <CountDownValues>
        <CountDownValue>
          <BigText>{days}</BigText>
          <span>days</span>
        </CountDownValue>
        <CountDownValue>
          <BigText>{hours}</BigText>
          <span>hours</span>
        </CountDownValue>
        <CountDownValue>
          <BigText>{minutes}</BigText>
          <span>minutes</span>
        </CountDownValue>
        <CountDownValue>
          <BigText>{seconds}</BigText>
          <span>seconds</span>
        </CountDownValue>
      </CountDownValues>
    </CountDownContainer>
  );
};
