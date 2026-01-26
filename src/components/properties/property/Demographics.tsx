"use client";
import dynamic from "next/dynamic";

const GoogleMapProperty = dynamic(
  () => import("@/components/google/GoogleMapProperty"),
  { ssr: false }
);
const Demographics = () => {
  const markers = [
    { name: "Statue of Liberty", lat: 40.689249, lng: -74.0445 },
    { name: "Castle Clinton National Monument", lat: 40.7033, lng: -74.017 },
    { name: "Peter Minuit Plaza", lat: 40.7016, lng: -74.0131 },
    { name: "Pier A / Harbor House", lat: 40.7031, lng: -74.0179 },
    { name: "Inatteso Café", lat: 40.7036, lng: -74.0166 },
    { name: "Fraunces Tavern", lat: 40.7032, lng: -74.0129 },
    { name: "The Dead Rabbit", lat: 40.7034, lng: -74.0097 },
    { name: "London & Martin Co. (Stone St)", lat: 40.703, lng: -74.0108 },
    { name: "SeaGlass Carousel (Battery Park)", lat: 40.7038, lng: -74.0162 },
    {
      name: "National Museum of the American Indian",
      lat: 40.7035,
      lng: -74.0131,
    },
  ];
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">Demographics</h2>
      <GoogleMapProperty
        center={{ lat: 40.689249, lng: -74.0445 }}
        markers={markers}
      />
    </section>
  );
};

export default Demographics;
