import Line from "@/components/Line";
import { CiLocationOn } from "react-icons/ci";
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
    <section className="space-y-4">
      <h1 className="text-3xl md:text-4xl  text-accent-foreground">{name}</h1>
      <div className="text-gray-400 flex items-center gap-2">
        <CiLocationOn size={25} />
        {address}
      </div>
      <Line className="mt-4" />
    </section>
  );
};

export default BasicInformation;
