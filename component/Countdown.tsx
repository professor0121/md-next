import { useEffect, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              clearInterval(timer);
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const data = [
    { val: time.hours, label: "Hours" },
    { val: time.minutes, label: "Min" },
    { val: time.seconds, label: "Sec" },
  ];

  return (
    <div className="flex gap-2 justify-center md:justify-start">
      {data.map(({ val, label }) => (
        <div
          key={label}
          className="border rounded-xl px-3 py-1.5 text-center shadow-card min-w-[60px]"
          style={{ backgroundColor: "hsl(var(--card))" }}
        >
          <div className="text-xl font-bold tabular-nums">
            {String(val).padStart(2, "0")}
          </div>
          <div
            className="text-[10px] uppercase tracking-wider"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}