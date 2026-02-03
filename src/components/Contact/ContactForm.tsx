"use client";
import { submitForm } from "@/app/(main)/contact/action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaX,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

const Form = () => {
  const [state, formAction, isPending] = useActionState(submitForm, null);
  const radioItems = [
    "General Inquiry",
    "Property Listing",
    "Vendor Directory",
    "Sponsorship",
    "Press",
  ];
  return (
    <section className="rounded-md p-4 flex flex-col xl:flex-row gap-20 min-h-[70vh]">
      {/* Left */}
      <div className="bg-primary rounded-md p-10 flex flex-col justify-between text-white space-y-8 py-12 xl:max-w-2/5">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold ">Contact Information</h2>
          <p className="text-gray-200 text-xl max-w-3/4">
            Say hello or start a conversation with the AQQIRE team.
          </p>
        </div>

        <div className="space-y-12 font-light md:max-w-3/4">
          <a className="flex gap-8 items-center" href="">
            <FaPhone size={30} />
            <p>+1 (123) 456‑7890</p>
          </a>

          <a className="flex gap-8 items-center " href="">
            <FaEnvelope size={30} />
            <p>hello@aqqire.com</p>
          </a>

          <div className="flex gap-8 items-center">
            <FaLocationDot size={30} />
            <p>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </p>
          </div>
        </div>

        <div className="flex gap-8">
          <a
            href="https://x.com/"
            className="rounded-full p-2 bg-white text-primary"
          >
            <FaX size={16} />{" "}
          </a>
          <a
            href="https://instagram.com/"
            className="rounded-full p-2 bg-white text-primary"
          >
            <FaInstagram size={16} />
          </a>
        </div>
      </div>

      {/* right */}
      <form action={formAction} className="flex flex-col grow md:p-12 gap-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              className="border-0 border-b shadow-none rounded-none"
            />
            {state?.errors?.properties?.firstName && (
              <p className="text-red-500 text-sm mt-1">
                Please fill in your first name
              </p>
            )}
          </div>

          <div className="flex-1">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              className="border-0 border-b shadow-none rounded-none"
            />
            {state?.errors?.properties?.lastName && (
              <p className="text-red-500 text-sm mt-1">
                please fill in your last name
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="border-0 border-b shadow-none rounded-none"
            />
            {state?.errors?.properties?.email && (
              <p className="text-red-500 text-sm mt-1">
                Please fill in your Email Address
              </p>
            )}
          </div>

          <div className="flex-1">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              className="border-0 border-b shadow-none rounded-none"
            />
          </div>
        </div>

        <div>
          <p className="font-bold my-4">Select Subject?</p>
          <div className="flex justify-between">
            <RadioGroup
              defaultValue={radioItems[0]}
              className="flex gap-4 flex-col md:flex-row"
              name="subject"
            >
              {radioItems.map((item, key) => (
                <div className="flex gap-2 items-center" key={key}>
                  <RadioGroupItem value={item} id={item} />
                  <Label htmlFor={item}>{item}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="mb-4">
            Message
          </Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Tell us more about how we can help"
          />
          {state?.errors?.properties?.message && (
            <p className="text-red-500 text-sm mt-1">Message is required.</p>
          )}
        </div>

        {state?.message && (
          <div
            className={`p-4 rounded-lg ${
              state.success
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {state.message}
          </div>
        )}

        <Button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </section>
  );
};

export default Form;
