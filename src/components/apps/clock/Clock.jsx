import { useState, useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  const timeOptions = { hour: "numeric", minute: "numeric" };
  const dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  };


  const formattedTime = date.toLocaleString("es-ES", timeOptions);
  const formattedDate = date.toLocaleString("es-ES", dateOptions);

  return { formattedDate, formattedTime };
}
