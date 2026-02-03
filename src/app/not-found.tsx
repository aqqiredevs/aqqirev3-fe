"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/header/navbar";
import NavMobile from "@/components/header/navmobile";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <header className="sticky top-0 z-50">
        <NavBar />
        <NavMobile />
      </header>
      <main className="p-12 bg-white flex flex-col items-center justify-center gap-4">
        <div className=" bg-white rounded-full p-6 border-2 border-primary/20">
          <Home className="w-16 h-16 text-primary" strokeWidth={1.5} />
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-8xl font-bold text-primary mb-2">404</h1>
          <h2 className="text-4xl font-semibold text-primary">
            Property Not Found
          </h2>
          <p className="text-foreground/70 text-lg">
            We couldn't find the page you're looking for.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href="/properties">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground px-8 py-6 font-semibold transition-all flex items-center gap-2 group hover:opacity-90 cursor-pointer"
            >
              Browse Properties
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 font-semibold transition-all bg-transparent cursor-pointer"
            >
              Return Home
            </Button>
          </Link>
        </div>
      </main>
      ;
      <Footer />
    </>
  );
}
