"use client";
import dynamic from "next/dynamic";

// import GoogleMapProperty from "@/components/google/GoogleMapProperty";

// Load dynamically so that it only loads on the client side and does not give a window error
// Do not remove this dynamic import
const GoogleMapProperty = dynamic(
  () => import("@/components/google/GoogleMapProperty"),
  { ssr: false }
);

const PropertyMap = () => {
  return (
    <section className="p-4 mt-6">
      <div className="space-y-4">
        <h3 className="text-3xl font-bold">Property Location</h3>
        <p className="text-gray-400 text-lg">
          Discover Commercial districts and high-growth areas with the deals,
          data, and businesses that matter.
        </p>
      </div>
      <div className="mt-4">
        <GoogleMapProperty lat={40.689249} lng={-74.0445} />
      </div>
    </section>
  );
};

export default PropertyMap;
