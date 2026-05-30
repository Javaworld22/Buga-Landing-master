import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import {
  Shield,
  AlertTriangle,
  Clock,
  UserX,
  Phone,
  Scale,
  RefreshCw,
  Heart,
} from "lucide-react";

export const metadata = {
  title: "Responsible Gaming | BUGA Games",
  description:
    "BUGA Games is committed to providing a safe, fair, and responsible gaming environment for all users.",
};

const sections = [
  {
    id: "introduction",
    icon: Heart,
    title: "Introduction",
    content: `At Buga Games, we are committed to providing a safe, fair, and responsible gaming environment for all users. We encourage our players to participate in gaming activities for entertainment purposes only and to maintain control over their gaming habits at all times.`,
  },
  {
    id: "age-restriction",
    icon: UserX,
    title: "Age Restriction",
    content: `Buga Games strictly prohibits underage gaming. Users must be at least 18 years old or meet the legal gaming age requirement in their jurisdiction before creating an account or participating on the platform.\n\nAny account found to belong to an underage user may be suspended or permanently terminated.`,
  },
  {
    id: "play-responsibly",
    icon: Shield,
    title: "Play Responsibly",
    content: `Gaming should be treated as a form of entertainment and not as a source of income. Players are encouraged to:`,
    list: [
      "Set personal spending limits",
      "Play within their financial means",
      "Avoid chasing losses",
      "Take regular breaks while gaming",
      "Maintain a healthy balance between gaming and daily activities",
    ],
  },
  {
    id: "self-control",
    icon: Clock,
    title: "Self-Control Measures",
    content: `Buga Games may provide tools and measures to help users manage their gaming activities, including:`,
    list: [
      "Deposit limits",
      "Temporary account suspension",
      "Self-exclusion options",
      "Account closure requests",
    ],
    footnote:
      "Users who feel they may be developing unhealthy gaming habits are encouraged to seek support and make use of these responsible gaming tools.",
  },
  {
    id: "problem-gaming",
    icon: AlertTriangle,
    title: "Signs of Problem Gaming",
    content: `Problem gaming may include:`,
    list: [
      "Spending more money or time than intended",
      "Borrowing money to continue gaming",
      "Neglecting personal, work, or family responsibilities",
      "Feeling stressed or anxious about gaming losses",
    ],
    footnote:
      "Players experiencing any of these signs are advised to seek professional assistance.",
  },
  {
    id: "fair-gaming",
    icon: Scale,
    title: "Fair Gaming",
    content: `Buga Games is committed to maintaining fairness and transparency in all games and draw processes. Any attempt to manipulate the platform, exploit vulnerabilities, or engage in fraudulent activity may result in account suspension or termination.`,
  },
  {
    id: "support",
    icon: Phone,
    title: "Support and Assistance",
    content: `Users who require assistance regarding responsible gaming concerns may contact the Buga Games support team for guidance and account management options.`,
  },
  {
    id: "policy-updates",
    icon: RefreshCw,
    title: "Policy Updates",
    content: `Buga Games reserves the right to modify or update this Responsible Gaming Policy at any time in accordance with regulatory requirements and platform improvements.`,
  },
];

export default function ResponsibleGamingPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white">
      <Navigation />

      {/* Hero */}
      <div className="bg-[#1C5D3E] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Responsible Gaming Policy
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            Your wellbeing is our priority. We are committed to providing a
            safe, fair, and responsible gaming environment for all users.
          </p>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-orange-500/10 border-y border-orange-500/30 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3 justify-center text-center">
          <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <p className="text-orange-400 text-sm">
            <strong className="text-orange-500">18+ Only.</strong> Gaming is
            for entertainment purposes only. If gaming is affecting your life
            negatively, please seek help immediately.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-[#1A1A2E] rounded-xl p-6 border border-gray-800">
              <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-500 transition-colors py-1.5 border-l-2 border-transparent hover:border-orange-500 pl-3"
                  >
                    <section.icon className="w-3.5 h-3.5 flex-shrink-0" />
                    {section.title}
                  </a>
                ))}
              </nav>

              {/* Help Box */}
              <div className="mt-8 bg-[#1C5D3E]/40 border border-[#1C5D3E] rounded-lg p-4">
                <p className="text-white text-xs font-semibold mb-1">
                  Need Help?
                </p>
                <p className="text-gray-400 text-xs mb-3">
                  Our support team is available 24/7 for responsible gaming
                  assistance.
                </p>
                <a
                  href="mailto:support@buga.games"
                  className="block text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2 px-3 rounded-md transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            <div className="space-y-10">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="bg-[#1A1A2E] rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-colors"
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 bg-[#1C5D3E]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <h2 className="text-xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="text-gray-300 leading-relaxed space-y-4 ml-14">
                    {section.content.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}

                    {section.list && (
                      <ul className="space-y-2 mt-3">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.footnote && (
                      <p className="text-gray-400 italic border-l-2 border-orange-500/50 pl-4 mt-4">
                        {section.footnote}
                      </p>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-[#1C5D3E] rounded-xl p-8 text-center">
              <Shield className="w-12 h-12 text-white/80 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                We&apos;re Here to Help
              </h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                If you or someone you know is struggling with gaming habits,
                please reach out to our support team immediately.
              </p>
              <a
                href="mailto:support@buga.games"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Support Team
              </a>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
