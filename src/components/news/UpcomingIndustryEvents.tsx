"use client";
import LineTabsNew from "../lineTabs/LineTabsControls";
import LineTabsContent from "../lineTabs/LineTabsContent";
import { useState } from "react";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { formatDate } from "@/utils/formatDate";
import { Button } from "../ui/button";
import HomeCard from "../cards/HomeCard";

const industryEvents = [
  {
    category: "Sports",
    title: "How To Protect Your App With Threat Model Based On JSONDiff",
    date: "27 AUGUST, 2023",
    duration: "20 MINS",
    description:
      "Browned Butter And Brown Sugar Caramelly Oodness Crispy Edgesthick And Soft Centers And Melty Little Puddles Of Chocolate Y First Favorite.Browned Butter Brown Sugar Caramelly Oodness.", //
    image: "https://placehold.co/800x450/png",
  },
  {
    category: "Politics",
    title: "Using Instagram To Promote Your Personal Brand",
    date: "27 AUGUST, 2023",
    duration: "15 MINS",
    description:
      "Discover how to leverage Instagram's latest features to grow your political presence and engage with a wider audience effectively.",
    image: "https://placehold.co/800x450/png",
  },
  {
    category: "Tech",
    title: "Everything Developers Must Know About System Design",
    date: "27 AUGUST, 2023",
    duration: "25 MINS",
    description:
      "A deep dive into the core principles of scalable architecture, from load balancing to database sharding and microservices.",
    image: "https://placehold.co/800x450/png",
  },
  {
    category: "Modern",
    title: "Implementing Okta Authentication In React Applications",
    date: "27 AUGUST, 2023",
    duration: "10 MINS",
    description:
      "Learn the step-by-step process of integrating secure Okta authentication into your modern frontend workflows.",
    image: "https://placehold.co/800x450/png",
  },
];

const UpcomingIndustryEvents = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-4">
      <h2 className="text-primary text-lg font-semibold">
        Upcoming Industry Events
      </h2>
      {/* <div className="flex justify-end gap-4">
        <Input
          placeholder="Search..."
          className="max-w-1/4 border-0 outline-none hover:outline-0 shadow-none focus-visible:ring-0 text-primary"
        />
        <CiSearch className="size-8" />
      </div> */}

      <LineTabsNew
        tabs={industryEvents.length}
        activeTab={active}
        setActiveTab={setActive}
        autoplayDuration={3000}
      />

      <div className="mt-4 ">
        {industryEvents.map((item, index) => (
          <LineTabsContent active={active === index} key={index}>
            <HomeCard
              image={item.image}
              title={item.title}
              category={item.category}
              date={item.date}
              description={item.description}
              imageHeight={300}
              imageWidth={400}
            />
          </LineTabsContent>
        ))}
      </div>
    </div>
  );
};

export default UpcomingIndustryEvents;
