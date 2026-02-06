"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TimePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
}

function TimePicker({ value, onChange, className }: TimePickerProps) {
  const now = value ?? new Date();
  const rawHours = now.getHours();
  const hour12 = rawHours % 12 || 12;
  const minute = now.getMinutes();
  const period = rawHours >= 12 ? "PM" : "AM";

  const update = React.useCallback(
    (h12: number, m: number, p: "AM" | "PM") => {
      const next = new Date(value ?? new Date());
      let h24 = h12 % 12;
      if (p === "PM") h24 += 12;
      next.setHours(h24, m, 0, 0);
      onChange?.(next);
    },
    [value, onChange],
  );

  return (
    <div
      className={cn(
        "border-t border-border pt-3 pb-2 px-3 space-y-2",
        className,
      )}
    >
      <p className="text-sm font-medium text-center">Select Time</p>
      <div className="flex gap-1 justify-center">
        <TimeColumn
          items={Array.from({ length: 12 }, (_, i) => i + 1)}
          selected={hour12}
          onSelect={(h) => update(h, minute, period)}
          label="Hour"
        />
        <TimeColumn
          items={Array.from({ length: 60 }, (_, i) => i)}
          selected={minute}
          onSelect={(m) => update(hour12, m, period)}
          pad
          label="Min"
        />
        <TimeColumn
          items={["AM", "PM"] as const}
          selected={period}
          onSelect={(p) => update(hour12, minute, p as "AM" | "PM")}
          label=""
          short
        />
      </div>
    </div>
  );
}

interface TimeColumnProps<T extends string | number> {
  items: readonly T[];
  selected: T;
  onSelect: (value: T) => void;
  pad?: boolean;
  label: string;
  short?: boolean;
}

function TimeColumn<T extends string | number>({
  items,
  selected,
  onSelect,
  pad,
  label,
  short,
}: TimeColumnProps<T>) {
  const selectedRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    selectedRef.current?.scrollIntoView({ block: "center" });
  }, [selected]);

  return (
    <div className="flex flex-col items-center gap-1">
      {label && (
        <span className="text-xs text-muted-foreground font-medium">
          {label}
        </span>
      )}
      <ScrollArea
        className={cn(
          short ? "h-24" : "h-48",
          "w-16 [&_[data-slot=scroll-area-scrollbar]]:hidden",
        )}
        aria-label={label || "Period"}
      >
        <div className="flex flex-col py-1">
          {items.map((item) => {
            const isSelected = item === selected;
            const display =
              pad && typeof item === "number"
                ? String(item).padStart(2, "0")
                : String(item);

            return (
              <button
                key={item}
                ref={isSelected ? selectedRef : undefined}
                type="button"
                onClick={() => onSelect(item)}
                className={cn(
                  "mx-1 rounded-md px-3 py-1.5 text-sm transition-colors",
                  isSelected
                    ? "bg-primary text-primary-foreground font-medium"
                    : "hover:bg-accent text-muted-foreground",
                )}
              >
                {display}
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}

export { TimePicker };
export type { TimePickerProps };
