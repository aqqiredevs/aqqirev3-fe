"use client";

import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const Auction = ({ time }: { time: string }) => {
  const [left, setLeft] = useState(() => getTimeLeft(new Date(time)));

  useEffect(() => {
    const target = new Date(time);
    const id = setInterval(() => setLeft(getTimeLeft(target)), 1_000);
    return () => clearInterval(id);
  }, [time]);

  const expired =
    left.days === 0 &&
    left.hours === 0 &&
    left.minutes === 0 &&
    left.seconds === 0;

  return (
    <div className="space-y-2">
      <p className="text-2xl text-center md:text-left text-gray-500">
        Auction Ends in:
      </p>
      {expired ? (
        <p className="text-2xl font-bold text-red-600">Auction ended</p>
      ) : (
        <p className="flex items-center gap-2 text-2xl  md:text-3xl font-bold text-red-600 tabular-nums">
          <Clock className="size-6" />
          {pad(left.days)} days, {pad(left.hours)} hrs {pad(left.minutes)} min{" "}
          {pad(left.seconds)} sec
        </p>
      )}
    </div>
  );
};

export default Auction;
