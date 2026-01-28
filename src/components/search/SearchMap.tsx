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

type Props = {
  price: string;
  title: string;
  location: string;
  area: string;
  parking: string;
  image: string;
};
function PropertyCard({ price, title, location, area, parking, image }: Props) {
  return (
    <div className="w-70 md:w-80 rounded-xl overflow-hidden bg-white shadow-lg mx-auto">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover rounded-lg"
      />

      <div className="px-3 py-4 space-y-2">
        <div className="flex justify-between">
          <div className="text-3xl font-bold text-gray-900">{price}</div>
          <Button className="cursor-pointer rounded-full">View</Button>
        </div>

        <hr />

        <div className="px-1 mt-4">
          <IoLocationOutline size={20} />
          <h3 className="font-semibold text-2xl">{title}</h3>
          <p className="text-lg text-gray-400 !m-0">{location}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="border rounded-md border-gray-400 col-span-1 p-2 aspect-square relative">
            <FaHouseChimney />
            <div className="absolute bottom-1">
              <p className="text-gray-400 !m-0">Use Type</p>
              <p className="!m-0">Hotel</p>
            </div>
          </div>{" "}
          <div className="border rounded-md border-gray-400 col-span-1 p-2 aspect-square relative">
            <FaHouseChimney />
            <div className="absolute bottom-1">
              <p className="text-gray-400 !m-0">Rooms</p>
              <p className="!m-0">203</p>
            </div>
          </div>{" "}
          <div className="border rounded-md border-gray-400 col-span-1 p-2 aspect-square relative">
            <FaHouseChimney />
            <div className="absolute bottom-1">
              <p className="text-gray-400 !m-0">Area</p>
              <p className="!m-0">{area}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchMap() {
  const listings = [
    {
      id: 1,
      price: "$1,200,000",
      coords: [40.7195, -74.0083],
      title: "SoHo Stylish Loft",
      location: "SoHo, NYC",
      area: "980 sqft",
      parking: "1",
      image: "https://placehold.co/300x200/png",
    },
    {
      id: 2,
      price: "$980,000",
      coords: [40.7308, -73.9973],
      title: "East Village Condo",
      location: "East Village, NYC",
      area: "840 sqft",
      parking: "None",
      image: "https://placehold.co/300x200/png",
    },
    {
      id: 3,
      price: "$2,500,000",
      coords: [40.7644, -73.9738],
      title: "Central Park Views",
      location: "Midtown, NYC",
      area: "1,220 sqft",
      parking: "2",
      image: "https://placehold.co/300x200/png",
    },
    {
      id: 4,
      price: "$1,150,000",
      coords: [40.7488, -73.9845],
      title: "Empire State Apt",
      location: "Herald Square, NYC",
      area: "900 sqft",
      parking: "1",
      image: "https://placehold.co/300x200/png",
    },
    {
      id: 5,
      price: "$820,000",
      coords: [40.7061, -74.0092],
      title: "Financial District Flat",
      location: "FiDi, NYC",
      area: "770 sqft",
      parking: "None",
      image: "https://placehold.co/300x200/png",
    },
    {
      id: 6,
      price: "$1,800,000",
      coords: [40.7769, -73.9813],
      title: "Upper West Side Elegance",
      location: "UWS, NYC",
      area: "1,350 sqft",
      parking: "2",
      image: "https://placehold.co/300x200/png",
    },
    {
      id: 7,
      price: "$1,450,000",
      coords: [40.7527, -73.9772],
      title: "Grand Central Luxury",
      location: "Midtown E, NYC",
      area: "1,100 sqft",
      parking: "1",
      image: "https://placehold.co/300x200/png",
    },
    {
      id: 8,
      price: "$695,000",
      coords: [40.7295, -73.9965],
      title: "Greenwich Village Studio",
      location: "Grove St, NYC",
      area: "640 sqft",
      parking: "None",
      image: "https://placehold.co/300x200/png",
    },
    {
      id: 9,
      price: "$2,150,000",
      coords: [40.7411, -73.9897],
      title: "Flatiron Classic",
      location: "Flatiron, NYC",
      area: "1,400 sqft",
      parking: "1",
      image: "https://placehold.co/300x200/png",
    },
    {
      id: 10,
      price: "$1,050,000",
      coords: [40.7484, -73.9857],
      title: "Kips Bay Condo",
      location: "Kips Bay, NYC",
      area: "880 sqft",
      parking: "1",
      image: "https://placehold.co/300x200/png",
    },
  ];
  useEffect(() => {
    import("leaflet-defaulticon-compatibility");
    import("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css");
  }, []);

  return (
    <section className="p-1 md:p-4 pt-0 space-y-2 relative min-h-48 z-0 mt-12 md:mt-6 ">
      <MapContainer
        center={[40.7195, -74.0083]}
        zoom={13}
        className="min-h-[80vh] md:h-[60vh] w-full "
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution=""
        />

        {listings.map((listing) => (
          <Marker
            key={listing.id}
            position={listing.coords as [number, number]}
          >
            <Popup
              closeButton={false}
              maxWidth={300}
              className="!flex !items-center !justify-center"
            >
              <PropertyCard
                price={listing.price}
                title={listing.title}
                location={listing.location}
                area={listing.area}
                parking={listing.parking}
                image={listing.image}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
