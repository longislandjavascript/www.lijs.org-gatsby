import * as React from "react";
const { useState, useEffect, useRef, useCallback } = React;

export type TimerDurationObjectProperty = string | number;

type TimerDurationSeconds = number;

export type TimerDurationObject = {
  days?: TimerDurationObjectProperty;
  hours?: TimerDurationObjectProperty;
  minutes?: TimerDurationObjectProperty;
  seconds?: TimerDurationObjectProperty;
};

export type TimerDuration = TimerDurationObject | TimerDurationSeconds;
export type TimerStatus = "NOT_STARTED" | "IN_PROGRESS" | "PAUSED";

// HELPERS
const secondsInMinutes = 60;
const secondsInHours = secondsInMinutes * 60;
const secondsInDays = secondsInHours * 24;

function convertTimeToObject(sss) {
  const ms = sss * 1000;

  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return {
    days: d.toString().padStart(2, "0"),
    hours: h.toString().padStart(2, "0"),
    minutes: m.toString().padStart(2, "0"),
    seconds: s.toString().padStart(2, "0")
  };
}

function getValueOrZero(value: number | string | undefined) {
  if (!value) {
    return 0;
  } else {
    return +value;
  }
}

function convertTimeToSeconds(timerDuration: TimerDurationObject) {
  const durationObject = timerDuration as TimerDurationObject;
  const days = getValueOrZero(durationObject?.days) * secondsInDays;
  const hours = getValueOrZero(durationObject?.hours) * secondsInHours;
  const minutes = getValueOrZero(durationObject?.minutes) * secondsInMinutes;
  const seconds = getValueOrZero(durationObject?.seconds);
  const total = days + hours + minutes + seconds || 0;
  return total;
}

// END HELPERS

export function useTimer(duration: TimerDuration) {
  const initialTimeRemaining =
    typeof duration === "number" ? duration : convertTimeToSeconds(duration);

  const [timeRemaining, setTimeRemaining] = useState<number>(
    initialTimeRemaining
  );

  const [status, setStatus] = useState<TimerStatus>("NOT_STARTED");

  const timeoutRef = useRef<any>(0);

  const handleClearInterval = useCallback(() => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = 0;
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      handleClearInterval();
    }
  }, [timeRemaining, handleClearInterval]);

  useEffect(() => {
    if (status === "NOT_STARTED") {
      setTimeRemaining(initialTimeRemaining);
      handleClearInterval();
    } else if (status === "IN_PROGRESS") {
      timeoutRef.current = setInterval(() => {
        setTimeRemaining(t => t - 1);
      }, 1000);
    } else if (status === "PAUSED") {
      handleClearInterval();
    }
    return () => clearInterval(timeoutRef.current);
  }, [status, initialTimeRemaining, handleClearInterval]);

  const play = useCallback(() => {
    setStatus("IN_PROGRESS");
  }, []);

  const pause = useCallback(() => {
    setStatus("PAUSED");
  }, []);

  const reset = useCallback(() => {
    setStatus("NOT_STARTED");
  }, []);

  const timeObject = convertTimeToObject(timeRemaining);
  const timeLapsed = initialTimeRemaining - timeRemaining;

  return {
    time: timeObject,
    timeInSeconds: timeRemaining,
    play,
    pause,
    reset,
    status,
    timeLapsed
  };
}
