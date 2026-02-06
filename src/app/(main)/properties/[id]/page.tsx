import NewsLetter from "@/components/NewsLetter";
import AboutProperty from "@/components/properties/property/AboutProperty";
import BasicInformation from "@/components/properties/property/basicInformation";
import Hero from "@/components/properties/property/hero";
import PropertyBroker from "@/components/properties/property/PropertyBroker";
import PropertyMap from "@/components/properties/property/PropertyMap";

import type { PropertyFeature } from "@/components/properties/property/AboutProperty";
import Auction from "@/components/properties/property/Auction";
import PropertyVideo from "@/components/properties/property/PropertyVideo";
import PropertyHeader from "@/components/properties/property/PropertyHeader";
import PropertyRelatedProperties from "@/components/properties/property/PropertyRelatedProperties";

const sampleFeatures: PropertyFeature[] = [
  { icon: "rooms", label: "Rooms", value: 6 },
  { icon: "baths", label: "Baths", value: 2 },
  { icon: "kitchen", label: "Kitchen", value: 1 },
  { icon: "year-built", label: "Year Build", value: 2024 },
  { icon: "beds", label: "Beds", value: 4 },
  { icon: "garage", label: "Garage", value: 1 },
  { icon: "type", label: "Type", value: "House" },
  { icon: "sqft", label: "Sqft", value: "2,820" },
];

type pageParams = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: pageParams) {
  const { id } = await params;
  // Todo add api endpoint to fetch the property by id
  // Change to property endpoint when available
  // const getProperty = await apiInstance.get(`/properties/${id}`);

  const {
    name,
    src,
    rating,
    address,
    price,
    description,
    time,
    sqft,
    status,
    propertyType,
    saleType,
    location,
  } = {
    name: "Sydney Opera House",
    src: "/background/skyline.jpg",
    rating: 4.8,
    address: "Performing arts centre in Sydney, Australia",
    price: 8000000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit nihil mollitia esse necessitatibus ad odit est vero quam possimus eveniet dolore quo, unde optio aspernatur cumque doloremque earum et? Pariatur, dolorem eos. Iste nam molestias officia doloribus? Temporibus officia impedit aspernatur distinctio fugiat rem quis reprehenderit? Nostrum, blanditiis ea.",
    time: "2026-02-11T00:00:00", // sample auction end date
    sqft: "4,876 SF",
    status: "Vacant",
    propertyType: "Office Building",
    saleType: "Online Auction Sale",
    location: "Sydney, Australia",
  };
  return (
    <section>
      <div className="container mx-auto p-4 pt-12 space-y-4">
        <PropertyHeader
          title={name}
          address={address}
          sqft={sqft}
          status={status}
          propertyType={propertyType}
          saleType={saleType}
          location={location}
        />
        <Auction time={time} />
        <Hero img={src} name={name} />
        <div className="flex flex-col md:flex-row md:items-start w-full gap-6 ">
          {/* left */}
          <div className="flex-1 w-full md:max-w-3/5 xl:max-w-4/5 space-y-6">
            <div className="border rounded-xl border-gray-200 p-6">
              <BasicInformation
                address={address}
                rating={rating}
                name={name}
                description={description}
              />
              <AboutProperty
                description={description}
                features={sampleFeatures}
              />
            </div>
            <div className="border rounded-xl border-gray-200 p-6">
              <PropertyVideo />
            </div>
            <div className="border rounded-xl border-gray-200 p-6">
              <PropertyMap />
            </div>
          </div>
          <div className="grow md:max-w-2/5 xl:max-w-1/5">
            <PropertyBroker />
          </div>
        </div>
        <PropertyRelatedProperties />
        <NewsLetter />
      </div>
    </section>
  );
}
