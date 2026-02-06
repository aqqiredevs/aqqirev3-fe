"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { useState } from "react";

const PortfolioCard = ({
  img,
  heading,
  description,
  points,
  url,
  category,
}: {
  img: string;
  heading: string;
  description: string;
  points: string[];
  url: string;
  category?: string;
}) => {
  return (
    <Card className="py-0 pb-4 flex-1 w-full md:max-w-2/4 overflow-hidden bg-gray-100 border-0 h-full grow">
      <CardHeader className="relative min-h-[200px] md:min-h-[300px]">
        <Image src={img} alt={heading} fill />
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <h3 className="font-bold text-xl lg:text-3xl">{heading}</h3>
        <p className="text-xs lg:text-sm">{description}</p>
        <ul className="list-none flex flex-col items-center">
          <div className="space-y-4 font-bold">
            {points.map((item, key) => (
              <li key={key} className="flex gap-4 items-center">
                <FaCheckCircle className="text-primary" />
                <span className="text-xs lg:text-base">{item}</span>
              </li>
            ))}
          </div>
        </ul>
        <Link href={url}>
          <Button className="flex gap-4 items-center mx-auto rounded-full py-4 !px-8 cursor-pointer">
            Learn More <FaArrowRight />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const ServicePortfolio = () => {
  const [category, setCategory] = useState("all");
  const listingCategories = [
    {
      text: "All",
      value: "all",
    },
    { text: "Featured Listing", value: "featured" },
    { text: "Spotlight Listing", value: "spotlight" },
    { text: "Sponsored Post", value: "sponsored" },
  ];

  const portfolioData = [
    {
      img: "/background/skyline.jpg",
      heading: "SWOBODA: 3 State Portfolio",
      description:
        "We ran a premium Featured Listing campaign for a multi-state retail portfolio.",
      points: [
        "42% email open rate",
        "3.2x more inquiries vs. average listing",
        "Sold within 90 days",
        "Listing Tier: Featured Listing – $200",
      ],
      url: "",
      category: "featured",
    },
    {
      img: "/background/skyline.jpg",
      heading: "CleanBuild Services",
      description:
        "CleanBuild promoted their solar cleaning service to CRE operators with a Sponsored Post.",
      points: [
        "600,300x branded block",
        "2.5% click-through rate",
        "6 new service contracts generated!",
        "Listing Tier: Sponsored Post – $300",
      ],
      url: "",
      category: "spotlight",
    },
  ];

  const filteredData = portfolioData.filter((item) => {
    if (category === "all") return true;
    return item.category === category;
  });

  return (
    <section>
      <div className="container mx-auto space-y-6">
        <div className="text-center space-y-4">
          <div className="text-primary font-semibold">
            EXPLORE OUR PORTFOLIO
          </div>
          <h2 className="max-w-2xl mx-auto text-4xl font-semibold ">
            See How Our CRE Pros Use AQQIRE To Drive Visibility
          </h2>
        </div>

        {/* Tabs */}

        <Tabs
          defaultValue={listingCategories[0].value}
          className="my-4 md:max-w-5xl mx-auto space-y-6"
        >
          <TabsList className="lg:gap-10 !bg-transparent mx-auto grid grid-cols-2 gap-4 md:flex">
            {listingCategories.map((item, key) => (
              <TabsTrigger
                key={key}
                value={item.value}
                onClick={() => setCategory(item.value)}
                className="col-span-1 cursor-pointer rounded-full md:px-10 md:py-6 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md uppercase "
              >
                {item.text}
              </TabsTrigger>
            ))}
          </TabsList>
          {listingCategories.map((item, key) => (
            <TabsContent value={item.value} key={key} className="mt-6">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch my-4 p-4">
                {filteredData.map((item, key) => (
                  <PortfolioCard {...item} key={key} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicePortfolio;
