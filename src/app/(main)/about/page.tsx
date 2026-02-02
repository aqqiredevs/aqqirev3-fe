import AboutConversations from "@/components/about/AboutConversations";
import AboutHero from "@/components/about/AboutHero";
import AboutListings from "@/components/about/AboutListings";
import AboutMission from "@/components/about/AboutMission";
import AboutStrip from "@/components/about/AboutStrip";
import AboutVision from "@/components/about/AboutVision";
import ExpandReach from "@/components/about/ExpandReach";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import NewsLetter from "@/components/NewsLetter";

const AboutPage = () => {
  const marketingTools = {
    heading: "Built-In CRE Marketing Tools",
    reverse: true,
    description:
      "AQQIRE's roots in hospitality real estate marketing power a smarter distribution system that gets your listings noticed.",
    items: [
      {
        image: "https://placehold.co/240x240/png",
        text: "Smart targeting to qualified leads",
      },
      {
        image: "https://placehold.co/240x240/png",
        text: "Classified ads + newsfeed visibility",
      },
      {
        image: "https://placehold.co/240x240/png",
        text: "Feature your CRE service business",
      },
    ],
  };
  return (
    <div>
      <AboutHero />
      <AboutConversations />
      <AboutListings />
      <section>
        <div className="container mx-auto">
          <AboutStrip {...marketingTools} />
        </div>
      </section>
      <AboutMission />
      <AboutVision />
      <MeetTheTeam />
      <ExpandReach />
      <NewsLetter />
    </div>
  );
};

export default AboutPage;
