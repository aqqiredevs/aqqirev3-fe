import Image from "next/image";

const Hero = ({ img, name }: { img: string; name?: string }) => {
  return (
    <section className="relative pb-0 pt-6 flex gap-6">
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
      <div className="absolute right-0 bottom-15 bg-white py-8 pl-8 rounded-tl-2xl pr-4 rounded-bl-2xl space-y-4">
        <p>Current Bid:</p>
        <h2 className="text-4xl font-bold text-primary">$20,000</h2>
      </div>
    </section>
  );
};

export default Hero;
