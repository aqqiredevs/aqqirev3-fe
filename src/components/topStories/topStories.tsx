"use client"

import React, { useEffect, useState } from "react";
import { apiInstance } from "@/utils/axiosInstance";
import { checkErrors } from "@/utils/checkError";
import Link from "next/link";

interface Story {
  id: string;
  title: string;
  content: string;
  category: string;
  storyUrl: string;
  slot?: number | null;
  date_posted?: string
}

const TopStories = () => {
  const [allStories, setAllStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {

        const response = await apiInstance.get("/api/cms/top-stories/all-published");


        const sortedData = response.data.sort((a: Story, b: Story) => (a.slot || 0) - (b.slot || 0));

        setAllStories(sortedData);
      } catch (err) {
        checkErrors(err);
      } finally {
        setLoading(false);
      }
    };
    loadInitialData();
  }, []);

  if (loading) return <div className="animate-pulse space-y-4">Loading top stories...</div>;

  return (
    <div className="flex flex-col space-y-6">
      {allStories.length > 0 ? (
        allStories.map((item, index) => (
          <div key={item.id} className="group">

            <p className="font-semibold uppercase text-sm text-blue-600 mb-1 tracking-wider">
              {item.category}
            </p>


            <Link
              href={item.storyUrl}
              target="_blank"
              className="block"
            >
              <h3 className="text-lg font-medium leading-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
            </Link>


            <p className="text-xs text-gray-400 mt-2">
              {item.date_posted ? new Date(item.date_posted).toLocaleDateString() : "Just Now"}
            </p>


            {index !== allStories.length - 1 && (
              <div className="w-full h-[1px] bg-gray-100 mt-6"></div>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-400 italic text-sm text-center">No featured stories at the moment.</p>
      )}
    </div>
  );
};

export default TopStories;