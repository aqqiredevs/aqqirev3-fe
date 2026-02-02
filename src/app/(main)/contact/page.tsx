import ContactCRE from "@/components/Contact/ContactCRE";
import ContactForm from "@/components/Contact/ContactForm";
import ContactMap from "@/components/Contact/ContactMap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa6";
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-6 pt-12 shadow-md">
      <div className="container mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-2 p-4">
          <h1 className="text-primary text-5xl font-bold">Contact Us</h1>
          <p className="text-gray-400">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <ContactForm />
        <ContactCRE />
        <section className="min-h-[70] bg-gray-50 text-center p-4 space-y-2">
          <h2 className="text-4xl font-bold">Where You Can Find Us</h2>
          <p className="font-light">
            Map with property pins or CRE hotspots—can double as visual
            credibility.
          </p>
          <ContactMap />
        </section>
      </div>
    </div>
  );
}
