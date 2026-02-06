import { cn } from "@/lib/utils";

const Line = ({ className }: { className?: string }) => {
  return <div className={cn("border-t border-gray-200", className)}></div>;
};

export default Line;
