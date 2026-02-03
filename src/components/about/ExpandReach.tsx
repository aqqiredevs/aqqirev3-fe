import { Button } from "@/components/ui/button";
import Link from "next/link";

const ExpandReach = () => {
  return (
    <section
      className="bg-primary p-4 md:p-16 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/expand-reach-bg.png')" }}
    >
      <div className="container mx-auto text-center space-y-4 md:space-y-6 py-4">
        <h2 className="text-white text-xl md:text-4xl font-semibold">
          Ready to Expand Your Reach in Commercial Real Estate?
        </h2>
        <p className="text-blue-100 text-lg md:text-2xl ">
          Start listing, sponsoring, or promoting your brand with AQQIRE today.
        </p>
        <Link href="/contact">
          <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 cursor-pointer">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ExpandReach;
