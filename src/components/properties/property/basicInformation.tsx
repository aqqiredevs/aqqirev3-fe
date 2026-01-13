import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const BasicInformation = ({
  name,
  address,
}: {
  name: string;
  rating: number;
  address: string;
  description: string;
}) => {
  return (
    <section className="space-y-2 col-span-3 flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-medium text-accent-foreground">{name}</h1>
        <div>{address}</div>
      </div>
      <div className="text-2xl">Auctions by AQQIRE</div>
    </section>
  );
};

export default BasicInformation;
