"use client";
import React, { useEffect, useState } from "react";
import LineTabsControls from "../lineTabs/LineTabsControls";
import LineTabsContent from "../lineTabs/LineTabsContent";
import { blogData } from "./data";
import Image from "next/image";

const HomeBlog = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" pl-2 ">
      <LineTabsControls
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        tabs={blogData.length}
        autoplayDuration={5000}
      />

      <div className="mt-4">
        {blogData.map((item, index) => (
          <LineTabsContent active={activeTab === index} key={index}>
            <div className="grid grid-cols-3 gap-4">
              {item.map((item, idx) => (
                <div
                  className=" p-4 rounded-lg mb-2 col-span-1 space-y-1"
                  key={idx}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                  />
                  <p className="text-sm text-gray-400">{item.category}</p>
                  <h3 className="font-bold text-primary text-sm">
                    {item.title}
                  </h3>
                  <div className="text-sm text-gray-400 flex gap-1 items-center capitalize">
                    <p>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </LineTabsContent>
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
