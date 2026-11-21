"use client";

import React, { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format in IST (Asia/Kolkata) with 24-hr format HH.mm.ss
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(formatter.format(now).replace(/:/g, "."));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-500 bg-zinc-900/60 border border-zinc-800/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
      </span>
      <span>{time || "00.00.00"}</span>
      <span className="text-[10px] uppercase tracking-wider text-zinc-500">IST</span>
    </div>
  );
}
