import React, { Suspense } from "react";
import { Button } from "../ui/button";
import PropertiesResult from "../search/PropertiesResult";
import PropertiesResultSkeleton from "../search/PropertyResultSkeleton";

const PropertiesResults = ({ query }: { query: string }) => {
  return (
    <div className="mx-auto space-y-2">
      <h2 className="text-3xl md:text-4xl font-bold mt-12">
        Trending on AQQIRE
      </h2>
      <p>See what's catching investor attention this week.</p>
      <div className="flex gap-2 flex-wrap">
        <Button>Filter</Button>
        <Button>For Lease</Button>
        <Button>For Sale</Button>
        <Button>Auctions</Button>
        <Button>Featured Deals</Button>
      </div>
      <Suspense fallback={<PropertiesResultSkeleton />}>
        <PropertiesResult query={query} />
      </Suspense>
    </div>
  );
};

export default PropertiesResults;
