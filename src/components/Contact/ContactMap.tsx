"use client";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { FaHouseChimney } from "react-icons/fa6";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false },
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false },
);

const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});

const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

export default function ContactMap() {
  useEffect(() => {
    import("leaflet-defaulticon-compatibility");
    import("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css");
  }, []);

  return (
    <section className="p-1 md:p-4 pt-0 space-y-2 relative min-h-48 z-0 mt-12 md:mt-6 ">
      <MapContainer
        center={[40.7195, -74.0083]}
        zoom={13}
        className="min-h-[40vh] w-full rounded-xl "
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution=""
        />

        <Marker position={[40.7195, -74.0083]}></Marker>
      </MapContainer>
    </section>
  );
}
