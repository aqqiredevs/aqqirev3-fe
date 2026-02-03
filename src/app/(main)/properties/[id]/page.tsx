import NewsLetter from "@/components/NewsLetter";
import AboutProperty from "@/components/properties/property/AboutProperty";
import BasicInformation from "@/components/properties/property/basicInformation";
import Demographics from "@/components/properties/property/Demographics";
import Hero from "@/components/properties/property/hero";
import MarketAnalytics from "@/components/properties/property/MarketAnalytics";
import PropertyMap from "@/components/properties/property/PropertyMap";
import { Button } from "@/components/ui/button";

import { apiInstance } from "@/utils/axiosInstance";
import { MdOutlineBedroomParent } from "react-icons/md";

type pageParams = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: pageParams) {
  const actions = [
    { label: "View Map", route: "/map" },
    { label: "Street View", route: "/street-view" },
    { label: "2 Videos", route: "/videos" },
    { label: "27 Photos", route: "/photos" },
  ];

  const { id } = await params;

  // Todo add api endpoint to fetch the property by id
  // Change to property endpoint when available
  // const getProperty = await apiInstance.get(`/properties/${id}`);

  const { name, src, rating, address, price, description } = {
    name: "Sydney Opera House",
    src: "/background/skyline.jpg",
    rating: 4.8,
    address: "Performing arts centre in Sydney, Australia",
    price: 8000000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit nihil mollitia esse necessitatibus ad odit est vero quam possimus eveniet dolore quo, unde optio aspernatur cumque doloremque earum et? Pariatur, dolorem eos. Iste nam molestias officia doloribus? Temporibus officia impedit aspernatur distinctio fugiat rem quis reprehenderit? Nostrum, blanditiis ea.",
  };
  return (
    <section className="container mx-auto p-4 pt-12 space-y-4">
      <BasicInformation
        address={address}
        rating={rating}
        name={name}
        description={description}
      />
      <Hero img={src} name={name} />
      <div className="grid grid-cols-4 xl:max-w-2/4 gap-2 py-4">
        {actions.map(({ label, route }) => (
          <Button
            key={label}
            variant="outline"
            className="bg-white hover:bg-primary hover:text-white cursor-pointer"
          >
            {label}
          </Button>
        ))}
      </div>
      <AboutProperty description={description} />
      <PropertyMap />
      <MarketAnalytics />
      <Demographics />
      <NewsLetter />
    </section>
  );
}
