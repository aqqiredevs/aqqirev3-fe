"use client";
import { useState } from "react";
import MarketForcesTestData from "../lineTabs/lineTabsTestData/marketForcesTestData";
import HomeCard from "../cards/HomeCard";
import LineTabsControls from "../lineTabs/LineTabsControls";
import LineTabsContent from "../lineTabs/LineTabsContent";

const MarketForces = () => {
  const [activeTab, setActivetab] = useState(0);

  return (
    <div className="bg-white">
      <LineTabsControls
        setActiveTab={setActivetab}
        activeTab={activeTab}
        tabs={MarketForcesTestData.length}
        autoplayDuration={3000}
      />
      {MarketForcesTestData.map((item, index) => (
        <LineTabsContent active={activeTab === index} key={index}>
          <HomeCard
            image={item.image}
            title={item.title}
            category={item.label}
            date={item.date}
            description={item.description}
            imageHeight={150}
            imageWidth={250}
          />
        </LineTabsContent>
      ))}
    </div>
  );
};

export default MarketForces;
