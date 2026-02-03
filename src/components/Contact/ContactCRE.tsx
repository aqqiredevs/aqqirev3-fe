import React from "react";
import { Input } from "../ui/input";
import { FaTelegram } from "react-icons/fa6";

const ContactCRE = () => {
  return (
    <section
      className="bg-primary p-4 md:p-16 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/expand-reach-bg.png')" }}
    >
      <div className="container mx-auto text-center space-y-4 md:space-y-6 py-4">
        <h2 className="text-white text-2xl md:text-4xl font-semibold">
          Stay in the Loop with CRE News
        </h2>
        <p className="text-blue-100 text-sm lg:text-2xl ">
          Subscribe to the AQQIRE newsletter and get the latest listings, market
          trends, vendor features, and sponsorship opportunities—straight to
          your inbox.
        </p>

        <div className="bg-white flex items-center gap-2 rounded-full p-2 px-4 max-w-xl mx-auto">
          <Input
            placeholder="Enter your email address"
            className="border-0 rounded-full shadow-none"
          />
          <div>
            <button className="cursor-pointer p-0 rounded-full">
              <FaTelegram className="text-primary" size={40} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCRE;
