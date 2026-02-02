import AboutStrip from "./AboutStrip";

const AboutConversations = () => {
  const conversationItems = {
    heading: "Help Desk",
    description:
      "Marketing automation fuels the conversation. Proactive ways of using conversations in order to sell product",
    items: [
      {
        image: "https://placehold.co/240x240/png",
        text: "Vendor Exposure",
      },
      {
        image: "https://placehold.co/240x240/png",
        text: "Reach & Visibility",
      },
      {
        image: "https://placehold.co/240x240/png",
        text: "Smarter Listings",
      },
    ],
  };
  return (
    <section>
      <div className="mx-auto container space-y-4 p-4">
        <div className="lg:max-w-3/4 xl:max-w-2/4 text-center mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold">
            The Conversations at <span className="text-primary">Aqqire</span>
          </h2>
          <p className="text-gray-400">
            AQQIRE unlocks visibility in a traditionally closed market— bridging
            the gap between commercial property sellers and qualified,
            interested buyers.
          </p>
        </div>
        <AboutStrip {...conversationItems} />
      </div>
    </section>
  );
};

export default AboutConversations;
