"use client";

import Navigation from "@/components/ui/Navigation";
// import Footer from "@/components/sections/Footer";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Trophy, Star, Crown, Zap, Calendar, Clock, Users, Ticket } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

type GameType = "Buga Solo" | "Buga Special" | "Buga Jackpot";

interface Winner {
  position: number;
  ticket: string;
  prize: string;
  maskedName: string;
}

interface DrawResult {
  id: string;
  game: GameType;
  date: string;       // ISO string
  drawTime: string;
  winningNumbers: number[];
  winners: Winner[];
  totalEntries: number;
  prizePool: string;
  status: "completed" | "pending";
}

// ── Mock data (replace with real API call) ────────────────────────────────────

function generateResults(): DrawResult[] {
  const games: GameType[] = ["Buga Solo", "Buga Special", "Buga Jackpot"];
  const results: DrawResult[] = [];

  for (let d = 0; d < 7; d++) {
    const date = new Date();
    date.setDate(date.getDate() - d);

    games.forEach((game, gi) => {
      const nums = Array.from({ length: 6 }, () => Math.floor(Math.random() * 45) + 1)
        .sort((a, b) => a - b);

      results.push({
        id: `${d}-${gi}`,
        game,
        date: date.toISOString(),
        drawTime: ["8:00 PM", "8:00 PM", "8:00 PM"][gi],
        winningNumbers: nums,
        totalEntries: Math.floor(Math.random() * 5000) + 500,
        prizePool: ["₦300,000", "₦700,000", "₦1,000,000"][gi],
        status: d === 0 && gi === 2 ? "pending" : "completed",
        winners: [
          { position: 1, ticket: `BG-${Math.random().toString(36).slice(2, 8).toUpperCase()}`, prize: ["₦300,000", "₦300,000", "₦300,000"][gi], maskedName: "J***n A." },
          { position: 2, ticket: `BG-${Math.random().toString(36).slice(2, 8).toUpperCase()}`, prize: ["₦700,000", "₦700,000", "₦700,000"][gi], maskedName: "A***a O." },
          { position: 3, ticket: `BG-${Math.random().toString(36).slice(2, 8).toUpperCase()}`, prize: ["₦1,000,000", "₦1,000,000", "₦1,000,000"][gi], maskedName: "E***e K." },
        ],
      });
    });
  }

  return results;
}

const ALL_RESULTS = generateResults();

// ── Config ────────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GAME_CONFIG: Record<GameType, { icon: any; color: string; bg: string; border: string }> = {
  "Buga Solo":    { icon: Zap,    color: "#F97316", bg: "rgba(249,115,22,0.1)",  border: "rgba(249,115,22,0.3)"  },
  "Buga Special": { icon: Star,   color: "#8B5CF6", bg: "rgba(139,92,246,0.1)",  border: "rgba(139,92,246,0.3)"  },
  "Buga Jackpot": { icon: Crown,  color: "#EAB308", bg: "rgba(234,179,8,0.1)",   border: "rgba(234,179,8,0.3)"   },
};

const POSITION_ICONS = ["🥇", "🥈", "🥉"];

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  const d = new Date(iso);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (d.toDateString() === today.toDateString()) return "Today";
  if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
  return d.toLocaleDateString("en-NG", { weekday: "short", month: "short", day: "numeric" });
}

function formatFullDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

// ── Day Carousel Tab ──────────────────────────────────────────────────────────

function DayTab({ date, active, onClick }: { date: string; active: boolean; onClick: () => void }) {
  const d = new Date(date);
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 flex flex-col items-center px-4 py-3 rounded-xl transition-all duration-200"
      style={{
        background: active ? "#F97316" : "rgba(255,255,255,0.05)",
        border: active ? "1px solid #F97316" : "1px solid rgba(255,255,255,0.1)",
        minWidth: "72px",
      }}
    >
      <span className="text-xs font-medium" style={{ color: active ? "#fff" : "rgba(255,255,255,0.5)" }}>
        {d.toLocaleDateString("en-NG", { weekday: "short" })}
      </span>
      <span className="text-xl font-bold mt-0.5" style={{ color: active ? "#fff" : "rgba(255,255,255,0.8)" }}>
        {d.getDate()}
      </span>
      <span className="text-xs" style={{ color: active ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)" }}>
        {d.toLocaleDateString("en-NG", { month: "short" })}
      </span>
    </button>
  );
}

// ── Result Card ───────────────────────────────────────────────────────────────

function ResultCard({ result }: { result: DrawResult }) {
  const [expanded, setExpanded] = useState(false);
  const config = GAME_CONFIG[result.game];
  const Icon = config.icon;

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: "#1A1A2E", border: `1px solid ${config.border}` }}
    >
      {/* Top accent */}
      <div className="h-1" style={{ background: `linear-gradient(to right, ${config.color}, transparent)` }} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: config.bg }}>
              <Icon className="w-5 h-5" style={{ color: config.color }} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{result.game}</h3>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" /> {result.drawTime}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Users className="w-3 h-3" /> {result.totalEntries.toLocaleString()} entries
                </span>
              </div>
            </div>
          </div>

          {result.status === "pending" ? (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 animate-pulse">
              ⏳ Pending
            </span>
          ) : (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
              ✓ Completed
            </span>
          )}
        </div>

        {/* Prize Pool */}
        <div className="bg-black/20 rounded-xl px-4 py-3 mb-5 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider">Prize Pool</p>
            <p className="text-white font-bold text-xl mt-0.5">{result.prizePool}</p>
          </div>
          <Trophy className="w-8 h-8 text-gray-700" />
        </div>

        {/* Winning Numbers */}
        {result.status === "completed" ? (
          <div className="mb-5">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Winning Numbers</p>
            <div className="flex gap-2 flex-wrap">
              {result.winningNumbers.map((num, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: i === result.winningNumbers.length - 1 ? config.color : config.bg,
                    color: i === result.winningNumbers.length - 1 ? "#fff" : config.color,
                    border: `2px solid ${config.color}`,
                    boxShadow: i === result.winningNumbers.length - 1 ? `0 0 12px ${config.color}60` : "none",
                  }}
                >
                  {num}
                </div>
              ))}
            </div>
            {result.winningNumbers.length > 0 && (
              <p className="text-gray-600 text-xs mt-2">★ Bonus ball highlighted</p>
            )}
          </div>
        ) : (
          <div className="mb-5 bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 text-center">
            <p className="text-yellow-400 text-sm">Draw results will be available after {result.drawTime}</p>
          </div>
        )}

        {/* Winners Toggle */}
        {result.status === "completed" && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-between text-sm font-medium py-2 transition-colors"
              style={{ color: config.color }}
            >
              <span>View Winners</span>
              <ChevronRight
                className="w-4 h-4 transition-transform duration-200"
                style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
              />
            </button>

            {expanded && (
              <div className="mt-3 space-y-2 border-t border-gray-800 pt-3">
                {result.winners.map((w, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5"
                    style={{ background: "rgba(0,0,0,0.2)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{POSITION_ICONS[i]}</span>
                      <div>
                        <p className="text-white text-sm font-medium">{w.maskedName}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Ticket className="w-3 h-3 text-gray-500" />
                          <p className="text-gray-500 text-xs font-mono">{w.ticket}</p>
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-sm" style={{ color: config.color }}>{w.prize}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function LatestResultsPage() {
  const uniqueDates = [...new Set(ALL_RESULTS.map(r => new Date(r.date).toDateString()))];
  const [selectedDate, setSelectedDate] = useState(uniqueDates[0]);
  const [selectedGame, setSelectedGame] = useState<GameType | "All">("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  const filteredResults = ALL_RESULTS.filter(r => {
    const sameDay = new Date(r.date).toDateString() === selectedDate;
    const sameGame = selectedGame === "All" || r.game === selectedGame;
    return sameDay && sameGame;
  });

  const selectedDateIso = ALL_RESULTS.find(r => new Date(r.date).toDateString() === selectedDate)?.date ?? "";

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white">
      <Navigation />

      {/* Hero */}
      <div className="bg-[#1C5D3E] py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center">
              <Trophy className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Latest Results</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Check winning numbers, prize amounts, and winners for all draws over the last 7 days.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Day Carousel */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4 text-orange-500" />
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Select Date</h2>
          </div>
          <div className="relative flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex-shrink-0 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide flex-1"
              style={{ scrollbarWidth: "none" }}
            >
              {uniqueDates.map(date => (
                <DayTab
                  key={date}
                  date={ALL_RESULTS.find(r => new Date(r.date).toDateString() === date)?.date ?? ""}
                  active={selectedDate === date}
                  onClick={() => setSelectedDate(date)}
                />
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="flex-shrink-0 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Selected Date Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {formatDate(selectedDateIso)}
            </h2>
            <p className="text-gray-500 text-sm mt-0.5">{formatFullDate(selectedDateIso)}</p>
          </div>

          {/* Game Filter */}
          <div className="flex gap-2 flex-wrap">
            {(["All", "Buga Solo", "Buga Special", "Buga Jackpot"] as const).map(g => {
              const config = g !== "All" ? GAME_CONFIG[g] : null;
              const isActive = selectedGame === g;
              return (
                <button
                  key={g}
                  onClick={() => setSelectedGame(g)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    background: isActive ? (config?.color ?? "#F97316") : "rgba(255,255,255,0.05)",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                    border: `1px solid ${isActive ? (config?.color ?? "#F97316") : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  {g}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Grid */}
        {filteredResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map(result => (
              <ResultCard key={result.id} result={result} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Trophy className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500">No results found for this selection.</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 bg-[#1A1A2E] border border-gray-800 rounded-xl p-5 text-center">
          <p className="text-gray-500 text-sm">
            Results are published immediately after each draw is verified.
            All draws are conducted under the supervision of the{" "}
            <span className="text-orange-500">Lagos State Lotteries and Gaming Authority</span>.
            Winner names are partially masked for privacy.
          </p>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
