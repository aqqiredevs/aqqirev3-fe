"use client";
import { format } from "date-fns";
import Line from "@/components/Line";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { TimePicker } from "@/components/ui/time-picker";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  phone: z.string().optional(),
  date: z.date({ message: "Please select a date" }),
  time: z.date(),
  message: z.string().min(1, "Message is required"),
});

const PropertyBroker = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: undefined as Date | undefined,
    time: (() => {
      const d = new Date();
      d.setHours(10, 30, 0, 0);
      return d;
    })(),
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateForm = <K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = appointmentSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    const combined = new Date(result.data.date);
    combined.setHours(
      result.data.time.getHours(),
      result.data.time.getMinutes(),
      0,
      0,
    );

    const formData = {
      name: result.data.name,
      email: result.data.email,
      phone: result.data.phone,
      dateTime: combined,
      message: result.data.message,
    };
    console.log("Appointment submitted:", formData);
  };

  return (
    <aside className="relative xl:pt-0 space-y-4">
      {/* Broker */}
      <div className="space-y-2 p-4 rounded-lg border border-gray-200">
        <Image
          src="https://placehold.co/160x160/png"
          width={250}
          height={250}
          alt="Broker"
          className="rounded-2xl mx-auto"
        />
        <div className="flex justify-between items-center w-full font-semibold text-lg">
          <h3 className="max-w-4/5 grow">Jane Evelynn</h3>
          <div className="grow text-right">140 Listings</div>
        </div>
        <p className="text-left text-gray-400">Commercial Listing Agent</p>
        <Button className="w-full mt-4 rounded-full">Contact Agent</Button>
      </div>

      {/* Appointment Form */}

      <div className="space-y-2 p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-lg">Make Appointment</h3>
        <Line className="my-4" />
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your Full Name"
              value={form.name}
              onChange={(e) => updateForm("name", e.target.value)}
              className="border-gray-200"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          <Line />

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!form.date}
                  className="border-gray-200 data-[empty=true]:text-muted-foreground justify-start text-left font-normal bg-transparent w-full"
                >
                  <CalendarIcon />
                  {form.date ? (
                    format(form.date, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-4">
                <Calendar
                  mode="single"
                  selected={form.date}
                  onSelect={(d) => updateForm("date", d)}
                  className="p-0"
                />
              </PopoverContent>
            </Popover>
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date}</p>
            )}
          </div>
          <Line />

          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="justify-start text-left font-normal bg-transparent w-full border-gray-200"
                >
                  <CalendarIcon />
                  {format(form.time, "p")}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-4">
                <TimePicker
                  value={form.time}
                  onChange={(t) => updateForm("time", t)}
                />
              </PopoverContent>
            </Popover>
          </div>
          <Line />

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => updateForm("email", e.target.value)}
              placeholder="Enter your Email Address"
              className="border-gray-200"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <Line />

          <div className="space-y-2">
            <Label htmlFor="phone">Contact Number</Label>
            <Input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={(e) => updateForm("phone", e.target.value)}
              placeholder="Enter your Contact Number"
              className="border-gray-200"
            />
          </div>
          <Line />

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              placeholder="Enter your message"
              value={form.message}
              onChange={(e) => updateForm("message", e.target.value)}
              className="border-gray-200"
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <Line />

          <Button type="submit" className="w-full rounded-full">
            Book Appointment
          </Button>
        </form>
      </div>
    </aside>
  );
};

export default PropertyBroker;
