"use client";
import { Property } from "@/types/property";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { searchProperties } from "@/actions/searchProperties";
import { useEffect, useState } from "react";
import TrendItems from "./trendItems";
import TrendSkeleton from "./trendSkeleton";

const TestDataMarketTrends = [
  {
    id: 1,
    title: "Hospitality Owners Push Into Extended-Stay as Urban ADR Softens",
    description:
      "Operators shift from luxury nightly models to predictable monthly revenue, citing labor volatility and declining business travel. ",
    uploader: "Admin",
    dateUploaded: "2 Dec 2025",
    image: "https://placehold.co/620x390/png",
  },
];

const MarketTrends = () => {
  return (
    <div>
      {TestDataMarketTrends.map((item) => (
        <div key={item.id} className="bg-white">
          <img
            src={item.image}
            alt={item.title}
            className="h-[340px] w-[620px] object-cover"
          />
          <div className="flex flex-col items-center space-y-3 mt-4">
            <h3 className="text-xs m-1 border border-gray-200 rounded-sm font-light">
              MARKET TRENDS
            </h3>

            <h2 className="text-2xl font-semibold text-center">{item.title}</h2>

            <div className="text-sm font-normal text-center text-gray-500">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketTrends;
