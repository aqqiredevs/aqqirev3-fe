import MarketTrends from "@/components/marketTrends/marketTrends";
import Spotlightpt from "@/components/spotlightPropertyTop/spotlightpt";
import TopStories from "@/components/topStories/topStories";
import MarketForces from "@/components/marketForces/marketForces";
import AdBanner from "@/components/addBanners/addBanner";
import MarketNews from "@/components/marketNews/MarketNews";
import HomeBlog from "@/components/HomeBlog/HomeBlog";
import PropertiesYouMightLike from "@/components/properties/PropertiesYouMightLike";
import UpcomingIndustryEvents from "@/components/news/UpcomingIndustryEvents";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl pt-12 px-6 bg-white flex ">
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
          <AdBanner />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 lg:col-span-3">
            <MarketForces />
          </div>
          <div className="col-span-5 lg:col-span-2">
            <MarketNews />
          </div>
        </div>

        <HomeBlog />
        <AdBanner />
        <PropertiesYouMightLike />
        <UpcomingIndustryEvents />
        <AdBanner />
        <NewsLetter />
      </div>

      <div className="w-px bg-gray-300 mx-6" />

      <div className="headerRight w-1/4">
        <TopStories />
      </div>
    </div>
  );
}
