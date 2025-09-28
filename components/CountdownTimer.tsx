// components/CountdownTimer.js
"use client";
import React, { useState, useEffect } from "react";

type CountdownTimerProps = {
  date: Date | string;
  className?: string;
  finishedMessage?: string;
};

const CountdownTimer = ({ date, className = "", finishedMessage = "Event Over" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEventOver, setIsEventOver] = useState<boolean>(false);

  useEffect(() => {
    const targetTimeMs = new Date(date).getTime();

    const calculateTimeLeft = () => {
      const nowMs = Date.now();
      const diffMs = targetTimeMs - nowMs;

      if (diffMs <= 0) {
        setIsEventOver(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const daysLeft = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((diffMs % (1000 * 60)) / 1000);

      setIsEventOver(false);
      setTimeLeft({
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [date]);

  if (isEventOver) {
    return (
      <div className={`text-center mt-4 rounded-lg border bg-base-200 p-4 lg:w-fit mx-auto ${className}`}>
        <div className="mx-auto w-fit">
          <span className="text-lg mx-2 font-bold">{finishedMessage}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center mt-4 rounded-lg border bg-base-200 p-4 lg:w-fit mx-auto ${className}`}>
      <div className="mx-auto w-fit">
        <span className="text-lg mx-2 font-bold">{timeLeft.days} days </span>
        <span className="text-lg mx-2 font-bold">{timeLeft.hours} hours </span>
        <span className="text-lg mx-2 font-bold">{timeLeft.minutes} minutes </span>
        <span className="text-lg mx-2 font-bold">{timeLeft.seconds} seconds </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
