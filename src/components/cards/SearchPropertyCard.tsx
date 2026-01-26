import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Property } from "@/types/property";
import { FaLocationDot } from "react-icons/fa6";
import { Badge } from "../ui/badge";
import { FaHeart } from "react-icons/fa";
const SearchPropertyCard = ({ property }: { property: Property }) => {
  return (
    <Card
      key={property.id}
      className="col-span-1 py-0 pb-2 overflow-hidden gap-3 bg-none border-0 shadow-none"
    >
      <CardHeader className="relative size-full min-h-45  overflow-hidden p-0 bg-none">
        <div className="w-full">
          <Image
            src="/background/skyline.jpg"
            alt="Property Image"
            width={400}
            height={400}
            className="size-full"
          />
        </div>

        <div className="flex justify-between absolute top-2 w-full inset-x-0 p-3 text-white">
          <Badge variant={"outline"} className="text-white capitalize">
            {property.type}
          </Badge>
          <FaHeart size={30} />
        </div>
      </CardHeader>

      <CardContent className="p-6 py-0 bg-none">
        <p className=" text-main font-bold text-2xl ">
          ${Number(property.price).toLocaleString("en-us")}
        </p>
        <p className=" font-bold py-2 text-xl">{property.name}</p>
        <div className="flex gap-1 items-center  text-gray-400">
          <FaLocationDot className="p-0" size={16} />
          <p className="text-lg">
            {property.city}, {property.state}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-xs py-3">Number of Rooms: {property.id}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchPropertyCard;
