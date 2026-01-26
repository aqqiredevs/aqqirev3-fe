"use client";

import { useState } from "react";

// Utils
import { apiInstance } from "@/utils/axiosInstance";
import { checkErrors } from "@/utils/checkError";

// Types
import { userType } from "@/types/user";

// Shadcn UI Components
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Icons
import { FaUserTie } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Registration = () => {
  const [user, setUser] = useState<userType>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiInstance.post(`/api/users/register`, {
        ...user,
        confirmPassword: undefined,
      });
      console.log("User Registered", res.data);
    } catch (e: unknown) {
      checkErrors(e);
    }
  };

  return (
    <div
      className="flex justify-center items-center p-4 h-screen"
      style={{
        background: `linear-gradient(90deg,rgba(0, 86, 150, 0.79) 0%, rgba(0, 86, 150, 0.26) 50%, rgba(0, 86, 150, 0.6) 100%), url('/background/skyline.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="lg:max-w-[25%] w-full flex-col flex items-center gap-3  bg-white dark:bg-primary dark:text-white text-primary p-4 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="p-4 w-full grid grid-cols-2 gap-4 "
        >
          <div className="flex gap-2 col-span-2 items-baseline justify-center">
            <FaUserTie size={30} />
            <h1 className="text-2xl font-semibold">Become a Member</h1>
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl">
            <Label htmlFor="first_name" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              onChange={onChange}
              value={user.first_name ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-black md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl">
            <Label htmlFor="last_name" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              onChange={onChange}
              value={user.last_name ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-black md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl col-span-2">
            <Label htmlFor="phone" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={onChange}
              value={user.phone ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-black md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl col-span-2">
            <Label htmlFor="email" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={onChange}
              value={user.email ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-black md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl">
            <Label htmlFor="password" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={onChange}
              value={user.password ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-black md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl">
            <Label htmlFor="confirmPassword" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={onChange}
              value={user.confirmPassword ?? ""}
              className="bg-transparent dark:bg-transparent border-0 w-full outline-none text-sm text-black md:text-base focus-visible:ring-transparent"
            />
          </div>

          <Button
            type="submit"
            className="col-span-2 py-6 cursor-pointer bg-gray-800 "
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
