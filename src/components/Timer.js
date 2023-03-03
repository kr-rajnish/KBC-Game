import { useEffect, useState } from "react";

export default function Timer({ setStopTimer, questionNumber }) {
  const [timer, setTimer] = useState(60);

  useEffect(() => {

    if (timer === 0) return setStopTimer(true);

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStopTimer, timer]);

  useEffect(() => setTimer(60), [questionNumber]);
  return timer;
}
