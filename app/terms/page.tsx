import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import {
  FileText,
  UserCheck,
  ShieldAlert,
  CreditCard,
  Trophy,
  Ban,
  Scale,
  RefreshCw,
  Globe,
  Phone,
  AlertTriangle,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service | BUGA Games",
  description:
    "Read the Terms of Service governing your use of the BUGA Games platform.",
};

const sections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: `By accessing or using the BUGA Games platform ("Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use our Platform.\n\nThese Terms constitute a legally binding agreement between you and BUGA Games. We reserve the right to update or modify these Terms at any time, and your continued use of the Platform constitutes acceptance of any changes.`,
  },
  {
    id: "eligibility",
    icon: UserCheck,
    title: "2. Eligibility",
    content: `To use the BUGA Games Platform, you must:`,
    list: [
      "Be at least 18 years of age or the legal gaming age in your jurisdiction",
      "Have the legal capacity to enter into a binding contract",
      "Not be a resident of any jurisdiction where online gaming is prohibited",
      "Not be a current employee, director, or affiliate of BUGA Games",
      "Not have a previously terminated BUGA Games account",
    ],
    footnote:
      "We reserve the right to verify your eligibility at any time and suspend accounts that do not meet these requirements.",
  },
  {
    id: "account",
    icon: Lock,
    title: "3. Account Registration",
    content: `To participate on the Platform, you must create an account. By registering, you agree to:`,
    list: [
      "Provide accurate, current, and complete information during registration",
      "Maintain and promptly update your account information",
      "Keep your password secure and confidential",
      "Accept responsibility for all activities that occur under your account",
      "Notify us immediately of any unauthorized use of your account",
      "Create only one account per person — multiple accounts are strictly prohibited",
    ],
    footnote:
      "BUGA Games reserves the right to refuse registration or cancel accounts at its sole discretion.",
  },
  {
    id: "kyc",
    icon: ShieldAlert,
    title: "4. Identity Verification (KYC)",
    content: `In compliance with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations, we may require you to provide identity verification documents at any time, including:`,
    list: [
      "Government-issued photo identification (National ID, Passport, Driver's License)",
      "Proof of address (utility bill, bank statement)",
      "Proof of payment method ownership",
      "Source of funds documentation",
    ],
    footnote:
      "Failure to provide requested verification documents may result in account suspension or termination and withholding of funds until compliance is confirmed.",
  },
  {
    id: "deposits-withdrawals",
    icon: CreditCard,
    title: "5. Deposits & Withdrawals",
    content: `All financial transactions on the Platform are subject to the following conditions:`,
    list: [
      "Deposits must be made using payment methods registered in your name",
      "Minimum and maximum deposit limits apply as stated on the Platform",
      "Withdrawals are processed to the same payment method used for deposits",
      "Withdrawal requests are subject to identity verification and AML checks",
      "Processing times vary depending on the payment method selected",
      "BUGA Games is not responsible for delays caused by third-party payment processors",
    ],
    footnote:
      "BUGA Games reserves the right to decline or reverse transactions that appear suspicious or violate these Terms.",
  },
  {
    id: "prizes",
    icon: Trophy,
    title: "6. Prizes & Payouts",
    content: `Prize winnings are subject to the following terms:`,
    list: [
      "All prizes are subject to verification before payout",
      "BUGA Games reserves the right to withhold prizes pending investigation of suspected fraud",
      "Prizes must be claimed within the period specified on the Platform",
      "Winnings may be subject to applicable taxes in your jurisdiction — you are solely responsible for declaring and paying any taxes",
      "Prizes cannot be transferred to another user or account",
      "In the event of a technical error, BUGA Games reserves the right to void affected draws",
    ],
  },
  {
    id: "prohibited",
    icon: Ban,
    title: "7. Prohibited Activities",
    content: `The following activities are strictly prohibited on the Platform:`,
    list: [
      "Using automated software, bots, or scripts to interact with the Platform",
      "Exploiting bugs, glitches, or vulnerabilities in the Platform",
      "Colluding with other users to manipulate outcomes",
      "Using stolen, fraudulent, or unauthorized payment methods",
      "Creating multiple accounts or sharing accounts",
      "Engaging in money laundering or any other illegal financial activity",
      "Harassing, abusing, or threatening other users or staff",
      "Attempting to reverse-engineer or copy any part of the Platform",
    ],
    footnote:
      "Violation of any prohibited activity may result in immediate account suspension, forfeiture of funds, and referral to law enforcement authorities.",
  },
  {
    id: "responsible-gaming",
    icon: ShieldAlert,
    title: "8. Responsible Gaming",
    content: `BUGA Games is committed to promoting responsible gaming. We provide tools to help you manage your gaming activity, including deposit limits, session time reminders, self-exclusion, and account cooling-off periods.\n\nIf you feel your gaming is becoming a problem, please refer to our Responsible Gaming Policy or contact our support team immediately.`,
  },
  {
    id: "liability",
    icon: Scale,
    title: "9. Limitation of Liability",
    content: `To the fullest extent permitted by law, BUGA Games shall not be liable for:`,
    list: [
      "Any indirect, incidental, special, or consequential damages",
      "Loss of profits, revenue, data, or goodwill",
      "Service interruptions caused by technical failures or force majeure events",
      "Unauthorized access to or alteration of your account",
      "Any third-party conduct or content on the Platform",
    ],
    footnote:
      "Our total liability to you for any claim arising out of or related to these Terms shall not exceed the amount deposited by you in the 30 days preceding the claim.",
  },
  {
    id: "intellectual-property",
    icon: Globe,
    title: "10. Intellectual Property",
    content: `All content on the BUGA Games Platform — including but not limited to logos, graphics, text, software, and game designs — is the intellectual property of BUGA Games or its licensors and is protected by applicable copyright and trademark laws.\n\nYou may not copy, reproduce, distribute, or create derivative works from any content on the Platform without our prior written consent.`,
  },
  {
    id: "termination",
    icon: AlertTriangle,
    title: "11. Termination",
    content: `BUGA Games reserves the right to suspend or terminate your account at any time, with or without notice, for reasons including but not limited to:`,
    list: [
      "Breach of these Terms of Service",
      "Suspected fraudulent, illegal, or abusive activity",
      "Failure to complete identity verification",
      "Inactivity for an extended period",
      "Regulatory or legal requirements",
    ],
    footnote:
      "Upon termination, any balance remaining in your account may be forfeited if the termination was caused by a breach of these Terms.",
  },
  {
    id: "governing-law",
    icon: Scale,
    title: "12. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.\n\nIf any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.`,
  },
  {
    id: "updates",
    icon: RefreshCw,
    title: "13. Updates to These Terms",
    content: `BUGA Games reserves the right to modify these Terms at any time. We will notify users of significant changes via email or a prominent notice on the Platform. Your continued use of the Platform after such changes constitutes your acceptance of the revised Terms.`,
  },
  {
    id: "contact",
    icon: Phone,
    title: "14. Contact Us",
    content: `If you have any questions about these Terms of Service, please contact us:\n\nEmail: legal@buga.games\nSupport: support@buga.games\nWebsite: www.buga.games`,
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white">
      <Navigation />

      {/* Hero */}
      <div className="bg-[#1C5D3E] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-white/70 mt-2">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            Please read these terms carefully before using the BUGA Games
            platform. By using our services, you agree to be bound by these terms.
          </p>
        </div>
      </div>

      {/* Notice Banner */}
      <div className="bg-orange-500/10 border-y border-orange-500/30 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3 justify-center text-center">
          <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <p className="text-orange-400 text-sm">
            <strong className="text-orange-500">18+ Only.</strong> By
            accessing this platform you confirm you are of legal gaming age and
            agree to these Terms of Service.
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

              <div className="mt-8 bg-[#1C5D3E]/40 border border-[#1C5D3E] rounded-lg p-4">
                <p className="text-white text-xs font-semibold mb-1">Have Questions?</p>
                <p className="text-gray-400 text-xs mb-3">
                  Contact our legal team for any terms-related queries.
                </p>
                <a
                  href="mailto:legal@buga.games"
                  className="block text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2 px-3 rounded-md transition-colors"
                >
                  Email Legal Team
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
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 bg-[#1C5D3E]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>

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

            <div className="mt-12 bg-[#1C5D3E] rounded-xl p-8 text-center">
              <FileText className="w-12 h-12 text-white/80 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Questions About Our Terms?
              </h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                Our legal team is available to clarify any aspect of these Terms of Service.
              </p>
              <a
                href="mailto:legal@buga.games"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Legal Team
              </a>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
