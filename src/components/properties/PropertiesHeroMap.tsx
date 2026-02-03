"use client";
import { useState } from "react";
import SearchMap from "../search/SearchMap";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

const PropertiesHeroMap = () => {
  const filters = ["All", "For Sale", "For Rent", "Under Construction"];
  const [activeFilter, setActiveFilter] = useState("All");
  return (
    <>
      <section className="space-y-6">
        <h1 className="text-3xl md:text-6xl text-center font-bold">
          Explore Commercial Properties
        </h1>
        <p className="text-md md:text-xl md:max-w-3/4 mx-auto text-center ">
          Search verified listings across retail, office, industrial, mixed-use,
          land, and hospitality. Filter by market, asset type, square footage,
          price, CAP rate, or investment profile.
        </p>

        {/* Search */}

        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-1 flex-wrap mt-6 md:my-0 mb-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="outline"
                onClick={() => setActiveFilter(filter)}
                className={` rounded-full cursor-pointer transition-colors bg-white hover:bg-primary hover:text-white
              ${
                activeFilter === filter
                  ? "bg-primary text-white "
                  : "text-gray-400"
              }
            `}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-2 border border-gray-400 rounded-full  pl-4">
              <FaSearch size={30} className="text-gray-400" />
              <Input
                placeholder="Search for Properties"
                className="lg:min-w-sm rounded-full border-none focus-visible:ring-[0px] shadow-none"
              />
            </div>
            <Button
              variant={"outline"}
              className="rounded-full bg-white cursor-pointer hover:bg-primary hover:text-white p-4 px-12 text-gray-400 "
            >
              <FaFilter size={45} />
            </Button>
          </div>
        </div>
      </section>

      <SearchMap />
    </>
  );
};

export default PropertiesHeroMap;
