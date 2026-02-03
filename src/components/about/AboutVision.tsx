import Image from "next/image";

const AboutVision = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 justify-center mx-auto my-auto p-6">
        {/* Image content */}
        <div className="flex-1 ">
          <Image
            src="https://placehold.co/800x600/png"
            width={800}
            height={600}
            alt="Image"
            className="rounded-tl-4xl rounded-br-4xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <p className="font-bold text-primary text-3xl">Our Vision</p>
          <h2 className="font-bold text-4xl lg:text-5xl lg:leading-snug">
            To become the digital backbone of commercial real estate
          </h2>
          <p className="text-sm lg:text-base text-gray-400 leading-loose">
            Our long-term vision is to build the most trusted, open, and
            effective platform for commercial real estate transactions and
            promotion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
