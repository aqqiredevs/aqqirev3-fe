import Link from "next/link";
import { ImTree } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { FaComputerMouse, FaVideo } from "react-icons/fa6";

const ServicesCard = ({
  icon: Icon,
  header,
  desc,
  url,
}: {
  icon: React.ElementType;
  header: string;
  desc: string;
  url: string;
}) => {
  return (
    <Card className="py-14 md:px-4 max-w-[250px] md:max-w-none border-none bg-gray-200">
      <CardHeader className="text-primary">
        <Icon className="size-12" />
      </CardHeader>
      <CardContent className="text-gray-400 space-y-2">
        <h3 className="text-2xl text-gray-500 font-bold">{header}</h3>
        <p>{desc}</p>
        <Link href={url}>
          <Button className="flex gap-2 items-center rounded-full mt-6 text-xs !px-12 text-left py-6 cursor-pointer">
            Learn More <FaArrowRight />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const OurServices = () => {
  const servicesItems = [
    {
      icon: ImTree,
      header: "Featured Listing",
      desc: "Prime placement at the top of our newsletter.",
      url: "",
    },
    {
      icon: FaComputerMouse,
      header: "Spotlight Listing",
      desc: "Mid or lower email placements for flexible exposure.",
      url: "",
    },
    {
      icon: FaVideo,
      header: "Sponsored Post",
      desc: "Custom content section with your logo and image.",
      url: "",
    },
    {
      icon: ImTree,
      header: "Featured Listing",
      desc: "Prime placement at the top of our newsletter.",
      url: "",
    },
  ];

  return (
    <section className="p-6 xl:p-12">
      <div className="container mx-auto space-y-6">
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="space-y-4">
            <p className="text-primary font-semibold uppercase">OUR SERVICES</p>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our Services Offered By AQQIRE
            </h2>
          </div>
          <div>
            <Link
              href="/services/all"
              className="flex gap-4 items-center text-sm underline text-blue-400"
            >
              SEE ALL SERVICES <FaArrowRight />
            </Link>
          </div>
        </div>

        <ScrollArea>
          <div className="flex w-max space-x-4 xl:p-4">
            {servicesItems.map((item, key) => (
              <ServicesCard key={key} {...item} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default OurServices;
