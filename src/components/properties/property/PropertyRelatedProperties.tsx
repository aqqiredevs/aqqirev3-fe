import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { TbBallpenOff } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { PiResize } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RelatedCardProps {
  image: string;
  name: string;
  price: string;
  location: string;
  propertyType: string;
  saleStatus: string;
  sqft: string;
}

const RelatedCard = ({
  image,
  name,
  price,
  location,
  propertyType,
  saleStatus,
  sqft,
}: RelatedCardProps) => {
  return (
    <Card className="border-gray-200 bg-white h-full flex flex-col">
      <CardHeader>
        <Image
          src={image}
          alt={name}
          className="rounded-xl"
          width={400}
          height={400}
        />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex justify-between items-center font-semibold">
          <div className="text-lg">{name}</div>
          <div>{price}</div>
        </div>

        <div className="flex gap-1 items-center text-sm text-gray-400 mb-4 mt-2">
          <CiLocationOn />
          {location}
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-3 text-gray-400 items-center justify-center gap-2 text-xs">
          <div className="col-span-1 w-full  flex gap-2 items-center p-2 border rounded-md  justify-center">
            <FaBuilding />
            {propertyType}
          </div>

          <div className="col-span-1 w-full flex gap-2 items-center p-2 border rounded-md  justify-center">
            <TbBallpenOff />
            {saleStatus}
          </div>

          <div className="col-span-2 xl:col-span-1 flex gap-2 items-center p-2 border rounded-md  justify-center">
            <PiResize />
            {sqft}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const dummyProperties: RelatedCardProps[] = [
  {
    image: "https://placehold.co/400x400/png",
    name: "Timer Place",
    price: "$406,800",
    location: "New York, United States",
    propertyType: "Retail",
    saleStatus: "For Sale",
    sqft: "2,824 SF",
  },
  {
    image: "https://placehold.co/400x400/png",
    name: "Sunset Tower",
    price: "$725,000",
    location: "Los Angeles, United States",
    propertyType: "Office",
    saleStatus: "For Lease",
    sqft: "4,500 SF",
  },
  {
    image: "https://placehold.co/400x400/png",
    name: "Harbor View",
    price: "$1,250,000",
    location: "Miami, United States",
    propertyType: "Industrial",
    saleStatus: "For Sale",
    sqft: "8,200 SF",
  },
  {
    image: "https://placehold.co/400x400/png",
    name: "Central Plaza",
    price: "$890,000",
    location: "Chicago, United States",
    propertyType: "Mixed Use",
    saleStatus: "Auction",
    sqft: "5,100 SF",
  },
  {
    image: "https://placehold.co/400x400/png",
    name: "Riverside Commons",
    price: "$550,000",
    location: "Seattle, United States",
    propertyType: "Retail",
    saleStatus: "For Sale",
    sqft: "3,200 SF",
  },
];

const PropertyRelatedProperties = () => {
  return (
    <section className="flex flex-col gap-4  pt-12 justify-center items-center bg-gray-100 p-4">
      <p className="border rounded-xl text-gray-400 border-gray-400 px-6 py-2 text-sm ">
        Related Property
      </p>
      <h2 className="text-4xl font-semibold">
        Explore More Related Properties
      </h2>
      <p className=" text-gray-400">
        Discover your next ideal residence among our top recommendations.
      </p>

      <Carousel className="w-full max-w-6xl mt-4 relative">
        <CarouselContent>
          {dummyProperties.map((property, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 h-auto"
            >
              <RelatedCard {...property} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-1/2 left-10 flex items-center justify-center">
          <CarouselPrevious className="cursor-pointer  bg-white shadow-none border" />
        </div>
        <div className="absolute top-1/2 right-10 flex items-center justify-center">
          <CarouselNext className="cursor-pointer  bg-white shadow-none border" />
        </div>
      </Carousel>
    </section>
  );
};

export default PropertyRelatedProperties;
