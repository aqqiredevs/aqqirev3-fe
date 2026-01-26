"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../components/ui/navigation-menu";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Button } from "../../../components/ui/button";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const HeaderAdmin = () => {
  const dashboardLinks = [
    "properties",
    "users",
    "testimonials",
    "pricing",
    "logos",
  ];

  const { isDark, toggleDark } = useDarkMode();
  return (
    <div className="bg-accent-foreground p-4 list-none ">
      <NavigationMenu className="max-w-full  ">
        <NavigationMenuItem className="mr-auto size-8">
          <Link href={`/`} className="capitalize ">
            <FaHome className="text-accent text-6xl size-full" />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuList className="gap-5">
          {dashboardLinks.map((item, key) => (
            <NavigationMenuItem key={key}>
              <NavigationMenuLink asChild>
                <Link
                  href={`/dashboard/${item}`}
                  className="capitalize text-accent"
                >
                  {item}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <Button
            onClick={() => toggleDark()}
            className="cursor-pointer rounded-full p-5 text-accent bg-accent-foreground border-accent border ml-auto"
          >
            {isDark ? <FaRegLightbulb /> : <FaLightbulb />}
          </Button>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default HeaderAdmin;
