"use client";

import React, { useEffect, useState } from "react";
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
  activePillId?: string;
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

  // Add Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = items.findIndex((item) => item.id === prevTab);
        const nextIndex = (currentIndex + 1) % items.length;
        return items[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTab]);

  if (!items || items.length === 0) return null;

  return (
    <div className={`mx-auto ${containerClassName}`}>
      <div className="flex ">
        {items.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative py-1 transition-colors duration-200 skew-x-[-12deg] border-b border-gray-300 cursor-pointer flex-1"
          >
            <span className="z-10 skew-x-[12deg] block"></span>

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
