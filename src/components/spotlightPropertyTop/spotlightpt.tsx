import React from "react";

const TestData = [
  {
    id: 1,
    name: "Property 1",
    industryType: "Hotel",
    image: "https://placehold.co/280x190/png",
    description: "How Boutique Firms Are Winning Large CRE Mandates in 2025",
    uploader: "Admin",
    dateUploaded: "2 Dec 2025",
  },
  {
    id: 2,
    name: "Property 2",
    industryType: "Residential",
    image: "https://placehold.co/280x190/png",
    description: "Private Credit Funds Step Into Hotel Refinancing Gap",
    uploader: "Admin",
    dateUploaded: "3 Dec 2025",
  },
];

const Spotlightpt = () => {
  return (
    <div className="grid gap-6">
      {TestData.map((item) => (
        <div key={item.id} className="overflow-hidden bg-white ">
          <img
            src={item.image}
            alt={item.name}
            className="h-[160px] w-[280]  object-cover"
          />

          <div className="space-y-1 ">
            <div>{item.industryType}</div>
            <div>{item.description}</div>
          </div>

          <div className=" flex ">
            <div className="mr-4">
              <p> By: {item.uploader}</p>
            </div>
            <div>{item.dateUploaded}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Spotlightpt;
