import Image from "next/image";

const Hero = ({ img, name }: { img: string; name?: string }) => {
  return (
    <section className="relative pb-0 xl:pt-6 flex flex-col xl:flex-row gap-6">
      <div className="xl:max-w-3/4 w-full">
        <Image
          width={650}
          height={650}
          src={img}
          alt={`${name} banner image`}
          className="w-full rounded-2xl h-full"
        />
      </div>
      <div className="grow space-y-4">
        <Image
          width={650}
          height={650}
          src={img}
          alt={`${name} banner image`}
          className="w-full rounded-2xl"
        />
        <Image
          width={650}
          height={650}
          src={img}
          alt={`${name} banner image`}
          className="w-full rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
