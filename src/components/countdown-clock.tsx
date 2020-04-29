import React, { useEffect } from "react";
import styled from "../theme";
import { Show } from "./show";
import { useTimer } from "../hooks/use-timer";

type Props = {
  secondsRemaining: number;
};

const Card = styled.div`
  background-color: ${p => p.theme.colors.blueDark};
  max-width: ${p => (p.theme.isSmall ? "100%" : "270px")};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  padding-top: 20px;
  height: 80px;
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;

  p {
    font-size: 14px;
    padding: 0;
    line-height: 1.2;
  }
  .time-value {
    font-size: 2rem;
    color: ${p => p.theme.colors.logoYellow};
    padding: 0;
    margin: 0;
  }
`;

export const CountdownClock: React.FC<Props> = ({ secondsRemaining }) => {
  const { time, timeInSeconds, reset, play } = useTimer(secondsRemaining);

  useEffect(() => {
    play();
    return () => reset();
  }, [play, reset]);

  const renderTimer = Object.keys(time).map(key => {
    return (
      <TimeUnit key={key}>
        <p className="time-value">{time[key]}</p>
        <p>{key}</p>
      </TimeUnit>
    );
  });

  if (timeInSeconds < 1) {
    return null;
  }

  return <Card>{renderTimer}</Card>;
};
