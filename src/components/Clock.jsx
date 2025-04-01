import { useEffect, useState } from "react";
import { getTimeInFormat } from "../utils/time";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <h3 className="time">
        {getTimeInFormat(time, "MMMM Do YYYY, h:mm:ss a")}.
      </h3>
    </div>
  );
}
