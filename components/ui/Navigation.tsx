"use client";

import NavLink from "./nav-link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      const scrollTop = window.scrollY;

      setScrolled(scrollTop > heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {" "}
      <div className="w-full md:px-[12.5%] mx-auto sm:px-6 ">
        <div className="flex items-center justify-between h-16 row">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo/BLACK.svg" alt="BUGA" width={96} height={36} />
            </Link>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#app">App</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-[#1C5D3E] hover:text-green-900 hover:bg-white/10"
              onClick={() => router.push("https://app.buga.games/login")}
            >
              Sign In
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6"
              onClick={() => router.push("https://app.buga.games/signup")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
