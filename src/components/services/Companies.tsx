import Image from "next/image";
import React from "react";

const Companies = () => {
  const logos = [
    "colliers.png",
    "hrec.png",
    "marcus.png",
    "sei.png",
    "tenx.png",
  ];
  return (
    <section className="bg-gray-300 p-12">
      <div className="container mx-auto space-y-4">
        <h2 className="text-center font-semibold text-gray-500 text-4xl">
          Companies That Trust Us
        </h2>

        <div className="flex flex-wrap justify-around gap-4 mx-auto max-w-3/4">
          {logos.map((logo, key) => (
            <Image
              src={"/logos/" + logo}
              width={250}
              height={400}
              alt={logo}
              key={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
