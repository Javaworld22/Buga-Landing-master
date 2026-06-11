"use client";

import { Zap, Star, Crown, ChevronRight, Clock, Users, Ticket } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const games = [
  {
    id: 1,
    name: "Buga Solo",
    tagline: "",  //Your Numbers. Your Win.
    description:
      "Pick your lucky numbers and enter daily solo draws. Fast rounds, instant results, and direct payouts to your wallet.",
    icon: Zap,
    accentColor: "#F97316",
    badge: "Daily Draws",
    entryFee: "₦1,000",
    prizePool: "₦300,000",
    nextDraw: "Today 5:00 PM",
    players: "1,240+",
    features: ["Quick entry", "Daily draws", "Instant payout"],
    countdownHours: 4,
  },
  {
    id: 2,
    name: "Buga Special",
    tagline: "",  //More Players. Bigger Stakes.
    description:
      "Join a larger pool of players for higher stakes draws with multiplied prize pools. The more players, the bigger the reward.",
    icon: Star,
    accentColor: "#8B5CF6",
    badge: "Weekly Event",
    entryFee: "₦3,000",
    prizePool: "₦700,000",
    nextDraw: "Today 5:00 PM",
    players: "1,240+",
    features: ["Bigger prize pool", "Weekly draws", "Multiplied rewards"],
    countdownHours: 4,
  },
  {
    id: 3,
    name: "Buga Jackpot",
    tagline: "",  //Life-Changing Prizes.
    description:
      "Enter the biggest draw on the platform. One ticket could change everything. The Buga Jackpot is where legends are made.",
    icon: Crown,
    accentColor: "#EAB308",
    badge: "Mega Prize",
    entryFee: "₦5,000",
    prizePool: "₦1,000,000",
    nextDraw: "Today 5:00 PM",
    players: "1,240+",
    features: ["Massive jackpot", "Weekly draws", "Life-changing win"],
    countdownHours: 4,
  },
];

function Countdown({ hours }: { hours: number }) {
  const [timeLeft, setTimeLeft] = useState({
    h: Math.floor(hours),
    m: 0,
    s: 0,
  });

  useEffect(() => {
    let totalSeconds = hours * 3600;
    const interval = setInterval(() => {
      totalSeconds -= 1;
      if (totalSeconds <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        h: Math.floor(totalSeconds / 3600),
        m: Math.floor((totalSeconds % 3600) / 60),
        s: totalSeconds % 60,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [hours]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-1 text-xs font-mono">
      <span className="bg-black/30 px-1.5 py-0.5 rounded">{pad(timeLeft.h)}</span>
      <span className="opacity-60">:</span>
      <span className="bg-black/30 px-1.5 py-0.5 rounded">{pad(timeLeft.m)}</span>
      <span className="opacity-60">:</span>
      <span className="bg-black/30 px-1.5 py-0.5 rounded">{pad(timeLeft.s)}</span>
    </div>
  );
}

export function GamesSection() {
  return (
    <section id="games" className="py-20 lg:py-28 bg-[#0F0F1A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/10 text-orange-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide">
            🎮 Our Games
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your Game
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Three ways to play, three ways to win. From quick daily draws to
            life changing jackpots. Buga has a game for every player.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="relative bg-[#1A1A2E] rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2"
              style={{
                border: `1px solid ${game.accentColor}30`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 24px 60px -10px ${game.accentColor}30`;
                (e.currentTarget as HTMLElement).style.borderColor = `${game.accentColor}70`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = `${game.accentColor}30`;
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(to right, ${game.accentColor}, transparent)`,
                }}
              />

              {/* Prize Pool Hero */}
              <div
                className="px-7 pt-6 pb-5"
                style={{ background: `linear-gradient(135deg, ${game.accentColor}15, transparent)` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${game.accentColor}20` }}
                  >
                    <game.icon className="w-5 h-5" style={{ color: game.accentColor }} />
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${game.accentColor}15`, color: game.accentColor }}
                  >
                    {game.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-0.5">{game.name}</h3>
                <p className="text-xs font-medium mb-4" style={{ color: game.accentColor }}>
                  {game.tagline}
                </p>

                {/* Prize Pool */}
                <div className="bg-black/20 rounded-xl p-4 mb-1">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Prize Pool</p>
                  <p className="text-2xl font-bold text-white">{game.prizePool}</p>
                </div>
              </div>

              {/* Details */}
              <div className="px-7 pb-7 flex flex-col flex-1">
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {game.description}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-[#0F0F1A] rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1">
                      <Ticket className="w-3 h-3" />
                      Entry Fee
                    </div>
                    <p className="text-white font-bold text-sm">{game.entryFee}</p>
                  </div>
                  <div className="bg-[#0F0F1A] rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1">
                      <Users className="w-3 h-3" />
                      Players
                    </div>
                    <p className="text-white font-bold text-sm">{game.players}</p>
                  </div>
                </div>

                {/* Countdown */}
                <div
                  className="flex items-center justify-between rounded-lg px-4 py-3 mb-6"
                  style={{ backgroundColor: `${game.accentColor}10`, border: `1px solid ${game.accentColor}20` }}
                >
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" style={{ color: game.accentColor }} />
                    Next Draw: {game.nextDraw}
                  </div>
                  <div style={{ color: game.accentColor }}>
                    <Countdown hours={game.countdownHours} />
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-7 flex-1">
                  {game.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: game.accentColor }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                href="https://app.buga.games/signup"
                  className="w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm"
                  style={{
                    backgroundColor: game.accentColor,
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.9";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  Play {game.name}
                  <ChevronRight className="w-4 h-4" />
                </Link>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All games are licensed and regulated by the{" "}
            <span className="text-orange-500">
              Lagos State Lotteries and Gaming Authority
            </span>
            . Play responsibly.{" "}
            <a href="/responsible-gaming" className="underline hover:text-orange-500 transition-colors">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
