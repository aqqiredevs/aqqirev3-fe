import Line from "@/components/Line";
import {
  Bath,
  BedDouble,
  CalendarDays,
  Car,
  CookingPot,
  DoorOpen,
  Fence,
  Hammer,
  Home,
  LandPlot,
  Layers,
  type LucideIcon,
  PaintBucket,
  Proportions,
  Ruler,
  ShowerHead,
  Sofa,
  Trees,
  Warehouse,
  Waves,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  rooms: DoorOpen,
  baths: Bath,
  showers: ShowerHead,
  kitchen: CookingPot,
  "year-built": CalendarDays,
  beds: BedDouble,
  garage: Car,
  warehouse: Warehouse,
  type: Home,
  sqft: Proportions,
  lot: LandPlot,
  stories: Layers,
  pool: Waves,
  furnished: Sofa,
  renovation: Hammer,
  paint: PaintBucket,
  yard: Trees,
  fence: Fence,
  ruler: Ruler,
};

export interface PropertyFeature {
  icon: string;
  label: string;
  value: string | number;
}

const AboutProperty = ({
  description,
  featureDescription,
  features,
}: {
  description: string;
  featureDescription?: string;
  features?: PropertyFeature[];
}) => {
  return (
    <section className="my-4">
      {/* Information */}
      <div className="space-y-4">
        <h2 className="text-2xl">Property Description</h2>
        <p className="text-gray-400">{description}</p>
        <Line />

        <h2 className="text-2xl">Property Features</h2>
        {featureDescription && (
          <p className="text-gray-400">{featureDescription}</p>
        )}

        {features && features.length > 0 && (
          <div className="grid md:grid-cols-2  xl:grid-cols-4 gap-4">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon] ?? DoorOpen;
              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 p-4"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                    <Icon className="size-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{feature.label}</p>
                    <p className="text-sm text-gray-400">{feature.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutProperty;
