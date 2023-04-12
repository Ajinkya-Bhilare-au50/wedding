import React, { useState, useEffect } from "react";

const CountdownTimer = ({
  days=0 ,
  hours=0 ,
  minutes=0 ,
  seconds=0,
  onTimerEnd,
}) => {
  const [remainingSeconds, setRemainingSeconds] = useState(
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (remainingSeconds === 0) {
      clearInterval(timer);
      onTimerEnd();
    }

    return () => clearInterval(timer);
  }, [remainingSeconds, onTimerEnd]);

  const displayDays = Math.floor(remainingSeconds / (24 * 60 * 60))
    .toString()
    .padStart(2, "0");
  const displayHours = Math.floor(
    (remainingSeconds % (24 * 60 * 60)) / (60 * 60)
  )
    .toString()
    .padStart(2, "0");
  const displayMinutes = Math.floor((remainingSeconds % (60 * 60)) / 60)
    .toString()
    .padStart(2, "0");
  const displaySeconds = (remainingSeconds % 60).toString().padStart(2, "0");

  return (
    <div class="bg-gray-100 rounded-lg p-4 text-center sm:text-left">
      <div class="text-base sm:text-lg md:text-xl font-medium px-2 m-4 text-center flex gap-1 justify-center">
        <span class="font-normal rounded-2xl w-32 bg-gray-900 p-2 sm:p-4 text-white block sm:inline-block">
          {displayDays} <p>Days</p>
        </span>
        <span class="font-normal rounded-2xl w-32 bg-gray-700 p-2 sm:p-4 text-white block sm:inline-block">
          {displayHours} <p>Hours</p>
        </span>
        <span class="font-normal rounded-2xl w-32 bg-gray-900 p-2 sm:p-4 text-white block sm:inline-block">
          {displayMinutes} Minutes
        </span>
        <span class="font-normal rounded-2xl w-32 bg-gray-700 p-2 sm:p-4 text-white block sm:inline-block">
          {displaySeconds} Seconds
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
