import { FC, useEffect, useState } from "react";
import {
  BigText,
  CountDownContainer,
  CountDownValue,
  CountDownValues,
} from "./styles/CountDownContainer.style";
import {LoadingSpinner} from "../utils/LoadingSpinner";

const defaultRemainingTime = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

export const CountDown: FC = () => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);


  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function formatString(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return value.toString();
  }
  function updateRemainingTime() {
    const birthdayDate = "8 Nov 2023";
    const changingDate = new Date(birthdayDate);
    changingDate.setFullYear(new Date().getFullYear());
    const currentDate = new Date();
    const totalSeconds =
      (changingDate.getTime() - currentDate.getTime()) / 1000;

    setRemainingTime({
      days: formatString(Math.floor(totalSeconds / 3600 / 24)),
      hours: formatString(Math.floor(totalSeconds / 3600) % 24),
      minutes: formatString(Math.floor(totalSeconds / 60) % 60),
      seconds: formatString(Math.floor(totalSeconds % 60)),
    });
  }

  return (remainingTime === defaultRemainingTime ? <LoadingSpinner/> :
    <CountDownContainer>
      <CountDownValues>
        <CountDownValue>
          <BigText>{remainingTime.days}</BigText>
          <span>days</span>
        </CountDownValue>
        <CountDownValue>
          <BigText>{remainingTime.hours}</BigText>
          <span>hours</span>
        </CountDownValue>
        <CountDownValue>
          <BigText>{remainingTime.minutes}</BigText>
          <span>minutes</span>
        </CountDownValue>
        <CountDownValue>
          <BigText>{remainingTime.seconds}</BigText>
          <span>seconds</span>
        </CountDownValue>
      </CountDownValues>
    </CountDownContainer>
  );
};
