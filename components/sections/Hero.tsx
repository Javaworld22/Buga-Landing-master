"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/cta/people.png",
    bgImage: "/cta/bg.jpg",
    title: "Play. Win. Repeat.",
    description:
      "Your trusted digital lottery platform with secure draws and instant payouts.",
  },
  {
    id: 2,
    image: "/cta/people2.png",
    title: "Play. Win. Repeat.",
    description:
      "Your trusted digital lottery platform with secure draws and instant payouts.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const current = slides[currentSlide];

  const backgroundStyle = current.bgImage
    ? {
        backgroundImage: `url('${current.bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundColor: "#FFAE7A",
      };

  return (
    <section
      id="hero"
      className="relative h-screen pt-16 overflow-hidden transition-all duration-500 ease-in-out"
      style={backgroundStyle}
    >
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2 none">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-emerald-800/20" /> */}

      {/* Main content */}
      <div className="relative z-10 w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-20 h-full">
        <div className="main flex flex-col md:flex-row md:justify-between md:items-center justify-center items-center gap-[17%] h-full">
          {/* Text Section */}
          <div className="basis-[45%] pl-[12.5%] text-section">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black font-playfair leading-tight transition-all duration-300">
              {current.title.split(" ").map((word, index) => (
                <span key={index}>
                  {word === "Repeat." ? (
                    <span className="text-green">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-xl mx-auto lg:mx-0 transition-all duration-300">
              {current.description}
            </p>
            {/* Buttons */}
            <div className="flex flex-row sm:flex-row gap-4 buttons mt-7">
              {/* Button 1 */}
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-gray-800 transition whitespace-nowrap">
                <img src="/cta/apple.svg" alt="Apple" className="w-6 h-6" />
                <span className="text-sm sm:text-base font-medium">
                  App Store
                </span>
              </button>

              {/* Button 2 */}
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-gray-800 transition whitespace-nowrap">
                <img
                  src="/cta/play.svg"
                  alt="Google Play"
                  className="w-6 h-6"
                />
                <span className="text-sm sm:text-base font-medium">
                  Google Play
                </span>
              </button>
            </div>
          </div>

          {/* Right Section - Positioned to bottom right */}
          <div className="absolute bottom-0 -right-70 w-[68%] h-[90%] img">
            <Image
              src={current.image || "/placeholder.svg"}
              alt="Woman with megaphone promoting referral program"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
