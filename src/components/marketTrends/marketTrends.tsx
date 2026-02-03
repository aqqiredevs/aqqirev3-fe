"use client";
import { useEffect, useState } from "react";
import { apiInstance } from "@/utils/axiosInstance";
import { checkErrors } from "@/utils/checkError";
import TrendSkeleton from "./trendSkeleton";

interface MarketTrend {
  id: string;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
  slot: number | null; // Added slot to the interface
  author?: { firstName: string; lastName: string };
  date_posted: string;
}

const MarketTrends = () => {
  const [trends, setTrends] = useState<MarketTrend[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublishedTrends = async () => {
      try {
        const response = await apiInstance.get("/api/cms/market-trends/published");
        setTrends(response.data);
      } catch (err) {
        checkErrors(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublishedTrends();
  }, []);

  if (loading) return <TrendSkeleton />;


  const slotOneTrend = trends.find((t) => t.slot === 1);


  if (!slotOneTrend) return null;

  return (
    <div className="bg-white">
      <img
        src={slotOneTrend.imageUrl}
        alt={slotOneTrend.title}
        className="h-[340px] w-full max-w-[620px] object-cover mx-auto"
      />
      <div className="flex flex-col items-center space-y-3 mt-4">
        <div>
          <h3 className="text-[10px] border px-2 py-1 border-gray-200 rounded-sm font-bold uppercase tracking-wider text-gray-400">
            {slotOneTrend.category || "MARKET TRENDS"}
          </h3>
        </div>

        <h2 className="text-2xl font-semibold text-center px-4">
          {slotOneTrend.title}
        </h2>

        <div className="flex items-center space-x-2 text-gray-500 text-xs">
          <p>By: {slotOneTrend.author ? `${slotOneTrend.author.firstName}` : "Admin"}</p>
          <span>•</span>
          <p>
            {new Date(slotOneTrend.date_posted).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="text-sm font-normal text-center text-gray-500 max-w-prose px-4">
          {slotOneTrend.content}
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;