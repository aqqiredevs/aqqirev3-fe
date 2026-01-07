"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useId } from "react";

interface LineTabsNewProps {
  containerClassName?: string;
  tabs: number;
  activeTab?: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  autoplayDuration: number;
}

const LineTabsNew = ({
  containerClassName = "",
  tabs,
  activeTab,
  setActiveTab,
  autoplayDuration = 3000,
}: LineTabsNewProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs);
    }, autoplayDuration);

    return () => clearInterval(interval);
  }, []);

  const id = useId();

  return (
    <div className={cn(`mx-auto ${containerClassName}`)}>
      <div className="flex">
        {[...new Array(tabs)].map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className="relative py-1 transition-colors duration-200 skew-x-[-12deg] border-b border-gray-300 cursor-pointer flex-1"
          >
            <span className="z-10 skew-x-[12deg] block"></span>

            {activeTab === index && (
              <motion.div
                layoutId={`active-tab-${id}`}
                className="absolute inset-0 bg-blue-700"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LineTabsNew;
