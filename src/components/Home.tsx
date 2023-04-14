import barrelRoll from "../img/do-a-barrel-roll.webp";
import "../css/main.css";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome To My App</h1>
        <p>This is going to be the coolest app in the world!</p>
        <img src={barrelRoll} alt="barrelRoll" width={200} height={200} />
      </div>
    </>
  );
};
