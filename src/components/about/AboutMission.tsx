import Image from "next/image";

const AboutMission = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="container flex flex-col lg:flex-row items-center gap-12 justify-center mx-auto my-auto p-6">
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <p className="font-bold text-primary text-3xl">Our Mission</p>
          <h2 className="font-bold text-4xl lg:text-5xl lg:leading-snug">
            Build a Smarter, Open CRE Market
          </h2>
          <p className="text-sm lg:text-base text-gray-400 leading-loose">
            AQQIRE exists to solve the outdated distribution model of CRE. We
            empower users to break out of closed networks, expand their reach,
            and amplify their listings and services in a high-value ecosystem
            built for growth.
          </p>
        </div>
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
      </div>
    </section>
  );
};

export default AboutMission;
