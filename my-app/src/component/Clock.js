import React from "react";
import { useEffect, useState } from "react";
import CountryZone from "../CountryZone.json";

function Clock() {
  const [time, setTime] = useState();
  const [zone, setZone] = useState("Turkey");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("tr-TR", { timeZone: zone }));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [zone]);

  return (
    <div className="time-genaraly">
      <select className="time-zone" onChange={(e) => setZone(e.target.value)}>
        {CountryZone.map((item) => (
          <option key={item.id} value={item.zone}>
            {item.capital}
          </option>
        ))}
      </select>
      <p className="time">{time}</p>
    </div>
  );
}

export default Clock;
