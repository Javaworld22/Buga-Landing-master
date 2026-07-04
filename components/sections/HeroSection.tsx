"use client";

import { ChevronLeft, ChevronRight, Play, Shield, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/cta/people.png",
    bgImage: "/cta/bg.jpg",
    bgColor: "#1C5D3E",
    badge: "🎰 Buga Solo",
    title: "Play.",
    titleAccent: "Win.",
    titleEnd: "Repeat.",
    description:
      "Your trusted digital lottery platform with secure draws and instant payouts. Join thousands of winners today.",
    cta: "Play Now",
    ctaHref: "https://app.buga.games/signup",
  },
  {
    id: 2,
    image: "/cta/people2.png",
    bgImage: null,
    bgColor: "#1A1A2E",
    badge: "⭐ Buga Special",
    title: "Bigger",
    titleAccent: "Stakes.",
    titleEnd: "Bigger Wins.",
    description:
      "Join a larger pool of players for higher-stakes weekly draws with multiplied prize pools.",
    cta: "Join Now",
    ctaHref: "https://app.buga.games/signup",
  },
  {
    id: 3,
    image: "/cta/people.png",
    bgImage: null,
    bgColor: "#1a1200",
    badge: "👑 Buga Jackpot",
    title: "Life",
    titleAccent: "Changing",
    titleEnd: "Prizes.",
    description:
      "Enter the biggest draw on the platform. One ticket could change everything forever.",
    cta: "Enter Jackpot",
    ctaHref: "https://app.buga.games/signup",
  },
];

const accentColors: Record<string, string> = {
  "#1C5D3E": "#F97316",
  "#1A1A2E": "#8B5CF6",
  "#1a1200": "#EAB308",
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const current = slides[currentSlide];
  const accentColor = accentColors[current.bgColor] ?? "#F97316";

  const goToSlide = (index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length, "right");
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length, "left");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    autoPlayRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentSlide]); // eslint-disable-line react-hooks/exhaustive-deps

  const backgroundStyle = current.bgImage
    ? {
        backgroundImage: `url('${current.bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { backgroundColor: current.bgColor };

  return (
    <section
      id="hero"
      className="relative h-screen pt-16 overflow-hidden"
      style={{ ...backgroundStyle, transition: "background-color 0.5s ease" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${current.bgColor}ee 0%, ${current.bgColor}99 50%, transparent 100%)`,
          transition: "background 0.5s ease",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: accentColor }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: accentColor }}
      />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Main Content */}
      <div
        className="relative z-10 w-full h-full flex items-center"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating
            ? `translateX(${direction === "right" ? "-30px" : "30px"})`
            : "translateX(0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <div className="w-full px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full py-12">

          {/* Left - Text */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: `${accentColor}25`, color: accentColor, border: `1px solid ${accentColor}40` }}
            >
              {current.badge}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 font-playfair">
              {current.title}{" "}
              <span style={{ color: accentColor }}>{current.titleAccent}</span>{" "}
              <br />
              {current.titleEnd}
            </h1>

            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              {current.description}
            </p>

            {/* 18+ Stake Responsibly Banner */}
            <div
              className="flex items-start gap-3 rounded-xl px-4 py-3 mb-8"
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm mt-0.5"
                style={{ backgroundColor: accentColor, color: "#fff" }}
              >
                18+
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Stake Responsibly</p>
                <p className="text-white/50 text-xs mt-0.5 leading-relaxed">
                  Gambling can be addictive. Only play with what you can afford to lose.{" "}
                  <Link
                    href="/responsible-gaming"
                    className="underline hover:text-white/80 transition-colors"
                    style={{ color: accentColor }}
                  >
                    Learn more
                  </Link>
                </p>
              </div>
              <AlertTriangle className="flex-shrink-0 w-4 h-4 text-white/30 mt-1" />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href={current.ctaHref}
                className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 4px 20px ${accentColor}50`,
                }}
              >
                <Play className="w-5 h-5 fill-white" />
                {current.cta}
              </Link>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-5 py-4 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Image src="/cta/apple.svg" alt="Apple" width={20} height={20} />
                  <span className="text-sm font-medium">App Store</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-5 py-4 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Image src="/cta/play.svg" alt="Google Play" width={20} height={20} />
                  <span className="text-sm font-medium">Google Play</span>
                </a>
              </div>
            </div>

            {/* LSLGA licence note */}
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <Shield className="w-3.5 h-3.5 flex-shrink-0" />
              <span>
                Licensed & regulated by the Lagos State Lotteries and Gaming Authority —
                Licence No: LSLGA/OP/OG/BG131025
              </span>
            </div>
          </div>

          {/* Right - Character Image */}
          <div className="relative flex-shrink-0 w-[45%] h-[85%] hidden md:block">
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: accentColor }}
            />
            <Image
              src={current.image || "/placeholder.svg"}
              alt="Hero character"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              style={{
                filter: `drop-shadow(0 20px 40px ${accentColor}40)`,
                transition: "filter 0.5s ease",
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index, index > currentSlide ? "right" : "left")}
            className="transition-all duration-300"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: index === currentSlide ? "32px" : "10px",
                height: "10px",
                backgroundColor: index === currentSlide ? accentColor : "rgba(255,255,255,0.4)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-6 z-20 text-white/40 text-sm font-mono">
        {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
