"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: 1, title: "sample title 1", content: "sample content 1" },
  { id: 2, title: "sample title 2", content: "sample content 2" },
  { id: 3, title: "sample title 3", content: "sample content 3" },
  { id: 4, title: "sample title 4", content: "sample content 4" },
  { id: 5, title: "sample title 5", content: "sample content 5" },
];

const LineTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-4 py-0.5 font-medium transition-colors duration-200 skew-x-[-12deg]"
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-blue-700"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {tabs
          .filter((tab) => tab.id === activeTab)
          .map((tab) => (
            <div
              key={tab.id}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              {tab.content}
            </div>
          ))}
      </div>
    </div>
  );
};

export default LineTabs;
