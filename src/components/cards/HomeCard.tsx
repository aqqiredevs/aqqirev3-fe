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
    <div className="rounded-lg mb-2 space-y-2 flex gap-2 md:gap-4 p-2 flex-col ">
      <Image
        src={image}
        alt={title}
        width={imageWidth || 300}
        height={imageHeight || 150}
      />
      <div className="flex flex-col gap-1">
        <p className=" text-gray-400">{category}</p>
        <p className="text-primary text-lg font-bold">{title}</p>
        <div className="flex gap-2 text-xs text-gray-400">
          <p className="flex gap-2 items-center">
            <CiCalendar className="text-lg" />
            {formatDate(date)}
          </p>
        </div>
        <p className="text-gray-400 text-sm my-2 line-clamp-4">{description}</p>
        <Button className="cursor-pointer mt-auto mb-auto ">Read More</Button>
      </div>
    </div>
  );
};

export default HomeCard;
