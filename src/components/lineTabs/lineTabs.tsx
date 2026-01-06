"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface TabItem {
  id: string | number;
  label?: string;
  title?: string;
  description?: string;
  date: string;
  uploadedBy?: string;
  image?: string;
  content: React.ReactNode;
}

interface LineTabsProps {
  items?: TabItem[];
  defaultActiveId?: string | number;
  containerClassName?: string;
  activePillId: string;
}

const LineTabs = ({
  items = [],
  defaultActiveId,
  containerClassName = "",
  activePillId = "active-pill",
}: LineTabsProps) => {
  const [activeTab, setActiveTab] = useState<string | number | undefined>(
    defaultActiveId || items[0]?.id
  );

  if (!items || items.length === 0) return null;

  return (
    <div className={`max-w-3xl mx-auto${containerClassName}`}>
      <div className="flex border-b border-gray-300 w-fit ">
        {items.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-4 py-1 font-medium transition-colors duration-200 skew-x-[-12deg]"
          >
            <span className="relative z-10 skew-x-[12deg] block">
              {tab.label}
            </span>

            {activeTab === tab.id && (
              <motion.div
                layoutId={activePillId}
                className="absolute inset-0 bg-blue-700"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {items.map((tab) =>
          activeTab === tab.id ? (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {tab.content}
            </motion.div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default LineTabs;
