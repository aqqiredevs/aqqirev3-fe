import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Faq = () => {
  const items = [
    {
      value: "item-1",
      trigger: "How does listing and deal discovery work on AQQIRE?",
      content:
        "AQQIRE aggregates verified commercial listings from brokers, owners, and trusted partners. Once you set your criteria — asset type, location, square footage, cap rate, zoning, or tenant mix — our platform surfaces the most relevant opportunities. You can view comps, request documents, connect with brokers, or contact the seller directly, all in one place.",
    },
    {
      value: "item-2",
      trigger:
        "What financing or payment options are available for commercial deals?",
      content:
        "AQQIRE aggregates verified commercial listings from brokers, owners, and trusted partners. Once you set your criteria — asset type, location, square footage, cap rate, zoning, or tenant mix — our platform surfaces the most relevant opportunities. You can view comps, request documents, connect with brokers, or contact the seller directly, all in one place.",
    },
    {
      value: "item-3",
      trigger: "How does AQQIRE verify listings and ensure compliance?",
      content:
        "AQQIRE aggregates verified commercial listings from brokers, owners, and trusted partners. Once you set your criteria — asset type, location, square footage, cap rate, zoning, or tenant mix — our platform surfaces the most relevant opportunities. You can view comps, request documents, connect with brokers, or contact the seller directly, all in one place.",
    },
    {
      value: "item-4",
      trigger: "How does AQQIRE protect my business and financial information?",
      content:
        "AQQIRE aggregates verified commercial listings from brokers, owners, and trusted partners. Once you set your criteria — asset type, location, square footage, cap rate, zoning, or tenant mix — our platform surfaces the most relevant opportunities. You can view comps, request documents, connect with brokers, or contact the seller directly, all in one place.",
    },
    {
      value: "item-5",
      trigger: "How does AQQIRE protect my business and financial information?",
      content:
        "AQQIRE aggregates verified commercial listings from brokers, owners, and trusted partners. Once you set your criteria — asset type, location, square footage, cap rate, zoning, or tenant mix — our platform surfaces the most relevant opportunities. You can view comps, request documents, connect with brokers, or contact the seller directly, all in one place.",
    },
  ];
  return (
    <section className="flex gap-8 p-4 py-10">
      <div className="flex-1 space-y-2">
        <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
        <p className="text-lg">
          Navigating commercial real estate can feel complex — from due
          diligence and zoning to financing, vendors, and lease structures. hese
          FAQs to get clarity at every stage of the process.
        </p>
        <p className="text-lg">
          We've collected the most common questions from brokers, investors, and
          business owners to help you understand how AQQIRE works and how to
          make the most informed decisions. Explore t
        </p>
      </div>

      {/* Accordion Section */}
      <div className="flex-1">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="space-y-4"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border p-4 last:border-b rounded-md"
            >
              <AccordionTrigger className="cursor-pointer">
                <h3 className="text-lg font-semibold">{item.trigger}</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-md leading-6">{item.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
