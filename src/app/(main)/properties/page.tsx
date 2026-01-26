import Link from "next/link";
import { Suspense } from "react";

// UI Components
import { Button } from "@/components/ui/button";

// Sections
import PropertiesResult from "@/components/search/PropertiesResult";
import PropertiesResultSkeleton from "@/components/search/PropertyResultSkeleton";
import Faq from "@/components/Faq";
import Inquiry from "@/components/Inquiry";
import Testimonials from "@/components/Testimonials";
import PropertiesHeroMap from "@/components/properties/PropertiesHeroMap";
import NewsLetter from "@/components/NewsLetter";
import PropertiesResults from "@/components/properties/PropertiesResults";
import BrowseByPropertyType from "@/components/properties/BrowseByPropertyType";

type searchParams = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Page = async ({ searchParams }: searchParams) => {
  const query = (await searchParams).query as string;
  return (
    <section className="p-2 md:pt-12">
      <div className="container mx-auto">
        <PropertiesHeroMap />
        <PropertiesResults query={query} />
        <BrowseByPropertyType />
        <Faq />
        <Inquiry />
        <Testimonials />
        <NewsLetter />
      </div>
    </section>
  );
};

export default Page;
