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
      <section className="space-y-4">
        <h1 className="text-6xl text-center font-bold">
          Explore Commercial Properties
        </h1>
        <p className="text-xl max-w-3/4 mx-auto text-center">
          Search verified listings across retail, office, industrial, mixed-use,
          land, and hospitality. Filter by market, asset type, square footage,
          price, CAP rate, or investment profile.
        </p>

        {/* Search */}

        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="outline"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full cursor-pointer transition-colors bg-white hover:bg-primary hover:text-white
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

          <div className="flex items-center gap-2">
            <FaSearch size={30} />
            <Input
              placeholder="Search for Properties"
              className="min-w-sm rounded-full"
            />
            <Button
              variant={"outline"}
              className="rounded-full bg-white cursor-pointer hover:bg-primary hover:text-white p-4 text-gray-400"
            >
              <FaFilter size={35} />
            </Button>
          </div>
        </div>
      </section>

      <SearchMap />
    </>
  );
};

export default PropertiesHeroMap;
