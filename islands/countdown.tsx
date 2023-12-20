import { useEffect, useState } from "preact/hooks";
import { calcTime, timerIsZero } from "../utils/calc-time.ts";

export default function Countdown({ timer }: {
  timer: number;
}) {
  const [time, setTime] = useState(calcTime(timer));
  const [isZero, setIsZero] = useState(timerIsZero(timer));

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const isIimerZero = timerIsZero(timer);
      if (isIimerZero) clearInterval(timerInterval);
      const newTime = calcTime(timer);
      setTime(newTime);
      setIsZero(isIimerZero);
    }, 1000);

    return () => clearInterval(timerInterval);
  });

  if (isZero) {
    return (
      <div className="sm:w-fit w-96 p-8 border-4 border-purple-300 z-10 text-center mx-auto rounded-lg backdrop-blur-md sm:backdrop-blur">
        <h1 className="text-4xl font-semibold">anny is finally unbanned!</h1>
        <img
          className="w-[320px] mt-2 mx-auto"
          src="/yaaay.webp"
          alt="yaaay emote"
        />
        <p>This page will be redirected to her twitch page...</p>
      </div>
    );
  }

  return (
    <div className="sm:w-fit w-96 p-8 border-4 border-purple-300 z-10 text-center mx-auto rounded-lg backdrop-blur-md sm:backdrop-blur">
      <h1 className="text-4xl mb-4 italic">
        <span className="text-purple-300">anny</span> will be unbanned in:
      </h1>
      <div className="text-xl font-semibold flex gap-4 justify-center">
        <div>
          <p>{time.days}</p>
          <p>Days</p>
        </div>
        <div className="text-purple-300">
          <p>{time.hours}</p>
          <p>Hours</p>
        </div>
        <div>
          <p>{time.minutes}</p>
          <p>Minutes</p>
        </div>
        <div className="text-purple-300">
          <p>{time.seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
      <p className="text-gray-400 italic mt-4">
        Aprox. date:
        <br />
        {new Date(timer * 1000).toLocaleString()}
      </p>
    </div>
  );
}
