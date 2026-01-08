"use client";
import React, { useEffect, useState } from "react";
import LineTabsControls from "../lineTabs/LineTabsControls";
import { MarketNewsTestData } from "./data";
import LineTabsContent from "../lineTabs/LineTabsContent";
import { CiCalendar } from "react-icons/ci";

const MarketNews = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className=" pl-2 ">
      <LineTabsControls
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        tabs={MarketNewsTestData.length}
        autoplayDuration={5000}
      />

      <div className="mt-4">
        {MarketNewsTestData.map((item, index) => (
          <LineTabsContent active={activeTab === index} key={index}>
            {item.map((item, idx) => (
              <div className="bg-gray-100 p-4 rounded-lg mb-2" key={idx}>
                <h3 className="font-bold text-primary text-sm">{item.title}</h3>
                <div className="text-sm text-gray-400 flex gap-1 items-center">
                  <CiCalendar />
                  <p>{item.date}</p>
                </div>
              </div>
            ))}
          </LineTabsContent>
        ))}
      </div>
    </div>
  );
};

export default MarketNews;
