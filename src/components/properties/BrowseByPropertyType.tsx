import Link from "next/link";
import { Button } from "../ui/button";

const BrowseByPropertyType = () => {
  const propertyTypes = [
    {
      title: "Retail",
      description:
        "High-visibility spaces ideal for QSR, service retail, and national brands.",
      count: "120+ Properties",
    },
    {
      title: "Office",
      description:
        "Modernized office suites and investment-grade office assets.",
      count: "200+ Properties",
    },
    {
      title: "Industrial",
      description:
        "High-clearance facilities, flex buildings, and last-mile warehouses.",
      count: "85+ Properties",
    },
    {
      title: "Hospitality",
      description: "Hotel, motel, and short-term rental investment properties.",
      count: "95+ Properties",
    },
  ];
  return (
    <section className="bg-gray-200 p-6 px-4 md:p-16">
      <h2 className="text-4xl md:text-5xl font-bold ">
        Browse by Property Type
      </h2>
      <p className="mt-6 ">
        Quickly explore listings across major commercial asset classes.
      </p>
      <div className="flex gap-2 mt-6 flex-wrap ">
        <Button className="bg-primary cursor-pointer rounded-full" size={"lg"}>
          For Lease
        </Button>
        <Button className="bg-primary cursor-pointer rounded-full" size={"lg"}>
          For Sale
        </Button>
        <Button className="bg-primary cursor-pointer rounded-full" size={"lg"}>
          Auctions
        </Button>
        <Button className="bg-primary cursor-pointer rounded-full" size={"lg"}>
          Featured Deals
        </Button>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 mt-6 gap-2 md:gap-8">
        {propertyTypes.map(({ title, description, count }) => (
          <div
            key={title}
            className="col-span-1 rounded-2xl md:min-h-[300px] space-y-6 border bg-white text-black flex flex-col justify-around p-2 md:p-4"
          >
            <p className="text-xl md:text-4xl font-semibold">{title}</p>
            <p className="text-sm md:text-2xl">{description}</p>
            <Link href="/" className="text-primary font-semibold">
              {count}
            </Link>
          </div>
        ))}
      </div>

      <Button
        className="bg-primary cursor-pointer rounded-full mt-12"
        size={"lg"}
      >
        Browse All Categories
      </Button>
    </section>
  );
};

export default BrowseByPropertyType;
