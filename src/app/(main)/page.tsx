import Hero from "@/components/hero/hero";
import HeroCarousel from "@/components/hero/heroCarousel";
import MarketTrends from "@/components/marketTrends/marketTrends";
import News from "@/components/News";
import NewsLetter from "@/components/NewsLetter";
import PopularProperties from "@/components/properties/PopularProperties";
import Testimonials from "@/components/Testimonials";
import WhyAqqire from "@/components/WhyAqqire";

import Spotlightpt from "@/components/spotlightPropertyTop/spotlightpt";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 bg-white ">
      <div className="flex h-[1200px] pt-12">
        {/* <Hero /> */}
        {/* <HeroCarousel />
     
      <News />
      <NewsLetter />
      <PopularProperties />
      <WhyAqqire />
      <Testimonials /> */}
        <div className="headerLeft w-3/4 p-4 pb-12 flex h-[800px]">
          <div className="spotlightPropertiesContainer w-1/3 ">
            <Spotlightpt>
              <div className="space-y-4">...</div>
            </Spotlightpt>
          </div>

          <div className="w-px bg-gray-300"></div>

          <div className="marketTrendsContainer w-2/3">
            <MarketTrends />
          </div>
        </div>

        <div className="w-px bg-gray-300 h-90%"></div>

        <div className="headerRight w-1/4 p-4"></div>
      </div>
    </div>
  );
}
