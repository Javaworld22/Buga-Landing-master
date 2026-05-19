"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CreditCard,
  Smartphone,
  Gamepad2,
  Shield,
} from "lucide-react";
import NavLink from "../ui/nav-link";
import Link from "next/link";

export default function Footer() {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
    // Add your navigation logic here
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription");
    // Add your newsletter subscription logic here
  };

  return (
    <footer className="w-full">
      {/* CTA Section */}
      <div className="relative bg-[#1C5D3E] overflow-hidden" id="footer">
        <div className="w-full sm:px-6 py-16 lg:py-20">
          <div className="w-full py-12 lg:py-20 h-full">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end justify-between items-center gap-[17%] banner">
              {/* Text Section */}
              <div className="basis-[45%] pl-[12.5%] first">
                <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Ready to Try Your Luck?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-roboto">
                  Join thousands of winners today and experience the future of
                  digital lottery. Your jackpot could be just a tap away.
                </p>
                <Button
                  onClick={handleGetStarted}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold pt-4 pr-8 pb-4 pl-8 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                  size={"lg"}
                >
                  Get Started Now
                </Button>
              </div>

              {/* Right Section - Positioned to bottom right */}
              <div className="absolute bottom-0 right-0 w-[48%] h-[105%] img">
                <Image
                  src="/footer.png"
                  alt="Woman with megaphone promoting referral program"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#1A1A2E] text-white cards">
        <div className="w-full md:px-[12.5%] mx-auto sm:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* BUGA Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/logo/WHITE.svg"
                    alt="BUGA"
                    width={96}
                    height={36}
                  />
                </Link>
              </div>{" "}
              <p className="mt-5 text-gray-300 mb-6 leading-relaxed">
                The future of digital lottery is here. Play, win and cash out
                securely from anywhere, anytime.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <NavLink href="#" className="text-gray-300">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink href="#how-it-works" className="text-gray-300">
                    How It Works
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#features" className="text-gray-300">
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#app" className="text-gray-300">
                    App
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#faq" className="text-gray-300">
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#support" className="text-gray-300">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Responsible Gaming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    AML Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Newsletter
              </h4>
              <p className="text-gray-300 mb-4">
                Subscribe to get updates on new draws and promotions.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-colors"
                >
                  Subscribe
                </Button>
              </form>

              {/* Payment/Security Icons */}
              <div className="flex space-x-3 mt-6">
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-gray-300" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-gray-300" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-gray-300" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <Shield className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © 2023 BUGA. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm text-center sm:text-right">
                Licensed and regulated by the National Lottery Regulatory
                Commission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
