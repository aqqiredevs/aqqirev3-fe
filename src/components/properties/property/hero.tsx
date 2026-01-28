import Image from "next/image";

const Hero = ({ img, name }: { img: string; name?: string }) => {
  return (
    <section className="relative pb-0 xl:pt-6 flex flex-col xl:flex-row gap-6">
      <div>
        <Image
          width={650}
          height={650}
          src={img}
          alt={`${name} banner image`}
          className="w-full rounded-sm"
        />
      </div>
      <div>
        <Image
          width={650}
          height={650}
          src={img}
          alt={`${name} banner image`}
          className="w-full rounded-sm"
        />
      </div>
      <div className="xl:absolute right-0 bottom-15 bg-white xl:py-8 xl:pl-8 rounded-tl-2xl pr-4 rounded-bl-2xl space-y-4">
        <p>Current Bid:</p>
        <h2 className="text-4xl font-bold text-primary">$20,000</h2>
      </div>
    </section>
  );
};

export default Hero;
