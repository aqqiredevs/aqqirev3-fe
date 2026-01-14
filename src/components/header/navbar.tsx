"use client";

// React Imports
import React, { useState, useEffect } from "react";

// NextJS Imports
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Utils
import checkAuth from "@/utils/checkAuth";
import { useAuth } from "@/utils/authContext";
import { useDarkMode } from "@/hooks/useDarkMode";

// SHADCN imports
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

// Icons
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

// Component Imports
import { publicNavItems, privateNavItems } from "./navItems";
import { Input } from "../ui/input";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const { isDark, toggleDark } = useDarkMode();
  const { isAuthenticated, setIsAuthenticated, setUser, loading, setLoading } =
    useAuth();
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {
      const data = await checkAuth();

      if (data && data.authenticated) {
        console.log("Auth status from checkAuth:", data);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };
    verifyUser();
  }, [setIsAuthenticated]);

  const handleLogout = async () => {
    try {
      await fetch(`${api}/users/logout`, {
        method: "POST",
        credentials: "include",
      });
      router.push("/login");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="hidden lg:block bg-white shadow-sm">
      <div className="bg-primary p-4">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/logo.png"
            width={250}
            height={100}
            style={{ width: "250px", height: "auto" }}
            alt="Aqqire Logo"
            priority
          />
        </div>
      </div>
      <div className="flex justify-between items-center space-x-4 space-y-4 p-4 max-w-7xl mx-auto py-6                                         ">
        <div className="text-xl text-slate-400 font-semibold flex">
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>

        <div className="flex gap-4">
          {!isAuthenticated ? (
            <>
              <Button
                asChild
                variant={"ghost"}
                className="cursor-pointer hover:border-primary hover:text-primary hover:bg-white text-slate-400  text-base font-semibold rounded-xs"
              >
                <Link href="/login">
                  <FaUser /> Sign In
                </Link>
              </Button>

              <Button
                asChild
                className="bg-primary cursor-pointer hover:border-primary hover:text-primary hover:bg-white border text-white text-base font-semibold rounded-xs"
              >
                <Link href="/register">Subscribe</Link>
              </Button>
            </>
          ) : (
            <Button
              onClick={handleLogout}
              className="bg-white text-primary hover:bg-primary hover:text-white border border-primary text-base font-semibold rounded-md"
            >
              Logout
            </Button>
          )}
        </div>
      </div>

      <NavigationMenu className="border-t border-slate-300 pt-0 h-full pb-0">
        <div className="max-w-7xl w-full h-full py-0 pb-0 pt-0">
          <NavigationMenuList className="flex relative gap-6">
            <NavigationMenuItem className="mr-auto p-4 border-slate-300 border-x">
              <NavigationMenuLink asChild>
                <Link href="/">
                  <GiHamburgerMenu className="size-6 text-slate-500" />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {(isAuthenticated ? privateNavItems : publicNavItems).map(
              (item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="text-primary font-semibold hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}

            <NavigationMenuItem className="ml-auto p-4 flex gap-2 ">
              <Input
                placeholder="Search..."
                className="border-0 outline-none hover:outline-0 shadow-none focus-visible:ring-0 text-primary"
              />
              <CiSearch className="size-8" />
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
