import Hero from "@/components/hero/hero";
import HeroCarousel from "@/components/hero/heroCarousel";
import MarketTrends from "@/components/marketTrends/marketTrends";
import News from "@/components/News";
import NewsLetter from "@/components/NewsLetter";
import PopularProperties from "@/components/properties/PopularProperties";
import Testimonials from "@/components/Testimonials";
import WhyAqqire from "@/components/WhyAqqire";

import Spotlightpt from "@/components/spotlightPropertyTop/spotlightpt";
import TopStories from "@/components/topStories/topStories";
import AdBanner1 from "@/components/addBanners/addBanner1";
import LineTabs from "@/components/lineTabs/lineTabs";
import MarketForces from "@/components/marketForces/marketForces";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 bg-white ">
      <div className="flex h-[auto] pt-12 items-stretch">
        {/* <Hero /> */}
        {/* <HeroCarousel />
     
      <News />
      <NewsLetter />
      <PopularProperties />
      <WhyAqqire />
      <Testimonials /> */}
        <div className="headerLeft flex flex-col w-3/4 gap-6 ">
          <div className="flex space-x-5">
            <div className="spotlightPropertiesContainer w-1/3 ">
              <Spotlightpt />
            </div>

            <div className="w-px bg-gray-300"></div>

            <div className="marketTrendsContainer w-2/3">
              <MarketTrends />
            </div>
          </div>
          <div className="pt-4">
            <AdBanner1 />
          </div>
          <div>
            <MarketForces />
          </div>
        </div>

        <div className="w-px bg-gray-300 mx-6" />

        <div className="headerRight w-1/4">
          <TopStories />
        </div>
      </div>
    </div>
  );
}
