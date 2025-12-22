import React from "react";

const TestDataTopStories = [
  {
    id: 1,
    title: "Prime Homes Near the Heart of City",
    category: "Category",
    uploadedDate: "27 August, 2025",
  },

  {
    id: 2,
    title: "Smart Living Starts Here for Modern Families",
    category: "Category",
    uploadedDate: "27 August, 2025",
  },

  {
    id: 3,
    title: "Affordable Homes with a Premium Lifestyle",
    category: "Category",
    uploadedDate: "27 August, 2025",
  },

  {
    id: 4,
    title: "Invest Now to Grow Your Property Value",
    category: "Category",
    uploadedDate: "27 August, 2025",
  },
];

const TopStories = () => {
  return (
    <div className="flex flex-col space-y-10">
      {TestDataTopStories.map((item, index) => (
        <div key={item.id || index}>
          <p className="font-semibold uppercase text-sm text-gray-500">
            {item.category}
          </p>
          <p>{item.title}</p>
          <p>{item.uploadedDate}</p>
          <h3 className="text-sm "></h3>
          {index !== TestDataTopStories.length - 1 && (
            <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopStories;
