"use client";
import LineTabsContent from "@/components/lineTabs/LineTabsContent";
import LineTabsNew from "@/components/lineTabs/LineTabsControls";
import MarketNews from "@/components/marketNews/MarketNews";
import React, { useState } from "react";

const page = () => {
  const [first, setfirst] = useState(0);
  return (
    <div>
      <MarketNews />
      <MarketNews />
    </div>
  );
};

export default page;
