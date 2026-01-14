"use client";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { Button } from "../ui/button";

const HomeCard = ({
  image,
  title,
  category,
  date,
  description,
  imageWidth,
  imageHeight,
}: {
  image: string;
  title: string;
  category: string;
  date: string;
  description: string;
  imageWidth?: number;
  imageHeight?: number;
}) => {
  return (
    <div className="rounded-lg mb-2 space-y-2 flex gap-2 md:gap-4 p-2 flex-col h-full border hover:shadow-md transition-shadow">
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={imageWidth || 350}
          height={imageHeight || 290}
          className="rounded-md w-full h-auto object-cover"
          style={{ height: "auto" }}
          priority={false}
        />
      </div>
      <div className="flex flex-col gap-1 flex-grow">
        <p className="text-gray-400 text-xs uppercase tracking-wider">
          {category}
        </p>
        <p className="text-primary text-lg font-bold line-clamp-2">{title}</p>
        <div className="flex gap-2 text-xs text-gray-400">
          <p className="flex gap-2 items-center">
            <CiCalendar className="text-lg" />
            {formatDate(date)}
          </p>
        </div>
        <p className="text-gray-600 text-sm my-2 line-clamp-3">{description}</p>
        <div className="mt-auto pt-2">
          <Button className="w-full cursor-pointer">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
