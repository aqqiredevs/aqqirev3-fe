import React from "react";

const ServicesStrip = () => {
  const items = [
    {
      header: "16,000+",
      subheader: "Engaged CRE Subscribers",
    },
    {
      header: "35%",
      subheader: "Email Open Rate",
    },
    {
      header: "2%",
      subheader: "Average Click Through Rate",
    },
    {
      header: "15+",
      subheader: "Years of Experience",
    },
  ];
  return (
    <section className="bg-primary p-16">
      <div className="container mx-auto grid grid-cols-1 xl:grid-cols-4 gap-12 text-white">
        {items.map((item, key) => (
          <div className="col-span-1 space-y-4 text-center" key={key}>
            <h2 className="font-bold text-5xl">{item.header}</h2>
            <p className="text-gray-300 font-semibold">{item.subheader}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesStrip;
