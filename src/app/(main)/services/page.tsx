import NewsLetter from "@/components/NewsLetter";
import Companies from "@/components/services/Companies";
import OurServices from "@/components/services/OurServices";
import ServicePortfolio from "@/components/services/ServicePortfolio";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesStrip from "@/components/services/ServicesStrip";
import ServicesWhyWork from "@/components/services/ServicesWhyWork";

const Page = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesStrip />
      <OurServices />
      <ServicePortfolio />
      <ServicesWhyWork />
      <Companies />
      <NewsLetter />
    </div>
  );
};

export default Page;
