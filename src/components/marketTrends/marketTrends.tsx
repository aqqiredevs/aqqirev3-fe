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

const MarketTrends = () => {
  const categories = ["Hotels", "Gas", "Land", "Commercial"];
  const [properties, setProperties] = useState<Property[] | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchData = async () => {
      const data = await searchProperties();
      setProperties(data);

      interval = setInterval(async () => {
        const newData = await searchProperties();
        setProperties(newData);
      }, 100);
    };

    fetchData();

    return () => clearInterval(interval); // cleanup
  });

  return <div></div>;
};

export default MarketTrends;
