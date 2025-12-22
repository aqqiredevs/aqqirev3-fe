import React from "react";
import LineTabs from "../lineTabs/lineTabs";

const testData = [
  {
    id: 1,
    label: "",
    title: "Institutional Buyers Return to Hotel M&A as Rates Settle",
    description:
      "Family offices and PE firms resume bidding wars in tertiary metros, especially where stabilized ",
    date: " 7, Dec 2025",
    uploadedBy: "admin",
    image: "https://placehold.co/620x390/png",
  },
  {
    id: 2,
    label: "",
    title:
      "Private Equity Dry Powder Reaches Record Highs as Multi-Family Yields Stabilize",
    date: " 7, Dec 2025",
    description:
      "Family offices and PE firms resume bidding wars in tertiary metros, especially where stabilized ",
    uploadedBy: "admin",
    image: "https://placehold.co/620x390/png",
  },
  {
    id: 3,
    label: "",
    title:
      "Office-to-Residential Conversions Accelerate Following New Urban Zoning Incentives",
    date: " 7, Dec 2025",
    description:
      "Family offices and PE firms resume bidding wars in tertiary metros, especially where stabilized ",
    uploadedBy: "admin",
    image: "https://placehold.co/620x390/png",
  },
  {
    id: 4,
    label: "",
    title:
      "Cross-Border Capital Flows Into Tech Hubs as Sovereign Wealth Funds Diversify",
    date: " 7, Dec 2025",
    description:
      "Family offices and PE firms resume bidding wars in tertiary metros, especially where stabilized ",
    uploadedBy: "admin",
    image: "https://placehold.co/620x390/png",
  },
  {
    id: 5,
    label: "",
    title:
      "Retail Footfall Rebounds to Pre-Pandemic Levels in High-Street Luxury Corridors",
    date: " 7, Dec 2025",
    description:
      "Family offices and PE firms resume bidding wars in tertiary metros, especially where stabilized ",
    uploadedBy: "admin",
    image: "https://placehold.co/620x340/png",
  },
];

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
      <div className="space-y-3">
        <div className="">
          <img src={item.image} alt={item.title} />
        </div>
        <p className="text-sm text-grey-500"></p>
      </div>
    ),
  }));

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text2x-2x1 font-bold mb-6"> Market Insight</h1>
      <LineTabs items={mappedTabs} />
    </div>
  );
};

export default MarketForces;
