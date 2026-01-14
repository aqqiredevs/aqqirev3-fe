"use client";
// React
import React, { useEffect, useState } from "react";

// NextJS
import Link from "next/link";
import { useRouter } from "next/navigation";

// Shadcn UI Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Utils
import checkAuth from "@/utils/checkAuth";
import { useAuth } from "@/utils/authContext";
import { apiInstance } from "@/utils/axiosInstance";

// Icons
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { checkErrors } from "@/utils/checkError";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      if (isAuthenticated) {
        router.push("/");
      }
    };
    verify();
  }, [router]);

  const handleLogin = async () => {
    try {
      const res = await apiInstance.post(`/api/users/login`, {
        email: email,
        password: password,
      });

      if (res.status == 200) {
        console.log("login success, token saved!");
        setIsAuthenticated(true);
        router.push("/");
      }
    } catch (err) {
      checkErrors(err);
    }
  };

  return (
    <div
      className="flex justify-center w-full h-screen items-center"
      style={{
        background: `linear-gradient(90deg,rgba(0, 86, 150, 0.79) 0%, rgba(0, 86, 150, 0.26) 50%, rgba(0, 86, 150, 0.6) 100%), url('/background/skyline.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="lg:max-w-[25%] w-full p-5 bg-white dark:bg-primary flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <h1 className="text-2xl md:text-xl font-bold dark:text-white text-primary">
          Welcome to Aqqire
        </h1>

        <div className="w-full flex flex-col gap-3">
          <div className="flex w-full items-center  p-2 rounded-xl border-2 dark:border-white border-primary">
            <Label htmlFor="firstName" className="dark:text-white text-primary">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="email"
              placeholder="Account Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent dark:bg-transparent border-0 w-full outline-none text-sm text-primary dark:text-white md:text-base focus-visible:ring-transparent"
            />
          </div>
          <div className="flex w-full items-center  p-2 rounded-xl border-2 dark:border-white border-primary gap-2 relative overflow-hidden">
            <Label htmlFor="email" className="text-primary dark:text-white">
              <FaFingerprint size={24} />
            </Label>
            <Input
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent dark:bg-transparent border-0 w-full outline-none text-sm text-primary dark:text-white md:text-base focus-visible:ring-transparent"
            />
            <FaRegEyeSlash
              className={`cursor-pointer mx-2 text-primary dark:text-white transform transition duration-300 absolute right-2  ${
                showPassword ? "translate-x-0" : "translate-x-20"
              }`}
              size={24}
              onClick={togglePasswordVisibility}
            />
            <FaRegEye
              size={24}
              className={`cursor-pointer mx-2 text-primary dark:text-white transform transition duration-300 absolute right-2 ${
                showPassword ? "translate-x-20" : "translate-x-0"
              }`}
              onClick={togglePasswordVisibility}
            />
          </div>
          <div>
            <Button
              className="text-white w-full bg-primary  cursor-pointer hover:bg-white border hover:text-primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
          <Link
            href="/register"
            className="dark:text-white text-primary text-center"
          >
            Dont have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
