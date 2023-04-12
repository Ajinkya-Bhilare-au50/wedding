import React from "react";
import CountdownTimer from "./CountdownTimer";
import couple from "../images/couple.png";
const MyComponent = () => {
  const handleTimerEnd = () => {
    alert("Timer has ended!");
  };
  function date_diff(date_string) {
    const date = new Date(date_string);
    const now = new Date();
    const diff = date - now;
    let day = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((diff % (1000 * 60)) / 1000);
    return { day, hour, minute, second };
  }
  return (
    <div>
      {console.log(date_diff("2023-04-27 10:30:00"))}
      <div className="bg-gray-100">
        <div className="flex justify-center pt-4">
          <img loading="lazy" className="w-60 h-60" src={couple} alt="" />
        </div>

        <h3 className="text-regalbrown pt-2 text-4xl font-extrabold text-center">
          SAVE THE DATE
        </h3>
        <h4 className="text-2xl p-4 font-bold text-center">
          27<sup>th</sup> April-2023
        </h4>
        <h5 className="text-xl font-extrabold text-center">
          Come Celebrate with Us
        </h5>
        <CountdownTimer
          days={date_diff("2023-04-27 10:30:50").day}
          hours={date_diff("2023-04-27 10:30:50").hour}
          minutes={date_diff("2023-04-27 10:30:50").minute}
          seconds={date_diff("2023-04-27 10:30:50").seconds}
          onTimerEnd={handleTimerEnd}
        />
      </div>
    </div>
  );
};

export default MyComponent;
