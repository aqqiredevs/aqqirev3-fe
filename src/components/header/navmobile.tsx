"use client";

import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const navMobile = () => {
  return (
    <nav className="lg:hidden flex gap-4 justify-between px-4 py-6 items-center bg-primary shadow-sm">
      <Link href="/">
        <Image src="/logo.png" width="100" height="100" alt="Aqqire Logo" />
      </Link>

      <Sheet>
        <SheetTrigger>
          <HiMenu size={32} className="text-white cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="w-full max-w-4/4" side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default navMobile;
