"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect } from "react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);

const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});

const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

const GoogleMapProperty = ({
  lat = 40.7128,
  lng = -74.006,
}: {
  lat: number;
  lng: number;
}) => {
  const center = { lat, lng };
  return (
    <section className="p-4 pt-0 space-y-2 relative min-h-48 z-0">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
          attribution="&copy; Google"
        />
        <Marker position={[center.lat, center.lng]}></Marker>
      </MapContainer>
    </section>
  );
};

export default GoogleMapProperty;
