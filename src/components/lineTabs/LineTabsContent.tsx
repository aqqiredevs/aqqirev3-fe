"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LineTabsContentProps {
  className?: string;
  active: boolean;
  children: React.ReactNode;
}

const LineTabsContent = ({
  className,
  children,
  active,
}: LineTabsContentProps) => {
  if (!children || !active) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={cn(`${className}`)}
    >
      {children}
    </motion.div>
  );
};

export default LineTabsContent;
