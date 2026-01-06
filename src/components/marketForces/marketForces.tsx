import React from "react";
import LineTabs from "../lineTabs/lineTabs";
import MarketForcesTestData from "../lineTabs/lineTabsTestData/marketForcesTestData";

const testData = MarketForcesTestData;

const MarketForces = () => {
  const mappedTabs = testData.map((item) => ({
    id: item.id,
    label: item.label,
    title: item.title,
    uploadedBy: item.uploadedBy,
    date: item.date,
    description: item.description,
    image: item.image,
    content: (
      <div className="space-y-3 space-x-4 flex items-start">
        <div className=" ">
          <div className="w-[350px] h-[360px] flex-shrink-0 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <p>Market Forces</p>
          <p>{item.title}</p>
          <div className="flex space-x-3">
            <p>{item.uploadedBy}</p>
            <p>{item.date}</p>
          </div>
          <p>{item.description}</p>
          <button>Read More</button>
        </div>
      </div>
    ),
  }));

  return (
    <div className="bg-white min-h-screen">
      <LineTabs items={mappedTabs} activePillId="marketForcesTabs" />
    </div>
  );
};

export default MarketForces;
