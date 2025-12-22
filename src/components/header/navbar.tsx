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
import {
  FaLightbulb,
  FaMagnifyingGlass,
  FaRegLightbulb,
} from "react-icons/fa6";

// Component Imports
import { publicNavItems, privateNavItems } from "./navItems";

const NavBar = () => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const { isDark, toggleDark } = useDarkMode();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {
      const auth = await checkAuth();
      console.log("Auth status from checkAuth:", auth);
      setIsAuthenticated(auth);
    };
    verifyUser();
  }, []);

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
    <div>
      <div className="upperNav bg-white flex justify-end space-x-4 space-y-4 pt-4">
        {!isAuthenticated ? (
          <>
            <Button
              asChild
              className="bg-primary cursor-pointer hover:border-primary hover:text-primary hover:bg-white border text-white text-base font-semibold rounded-xs"
            >
              <Link href="/login">Sign In</Link>
            </Button>

            <Button
              asChild
              className="bg-primary bg-blue-500 cursor-pointer hover:border-primary hover:text-primary hover:bg-white border text-white text-base font-semibold rounded-xs"
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
      <nav className="hidden xl:flex gap-4 justify-center px-4 py-6 bg-white shadow-sm">
        <Link href="/">
          <Image src="/logo.png" width="150" height="100" alt="Aqqire Logo" />
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {(isAuthenticated ? privateNavItems : publicNavItems).map(
              (item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href} className="text-black">
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
};

export default NavBar;
