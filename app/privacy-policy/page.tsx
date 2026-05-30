import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import {
  Shield,
  Eye,
  Share2,
  Lock,
  Cookie,
  Clock,
  UserCheck,
  Baby,
  Link2,
  RefreshCw,
  Phone,
  FileText,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | BUGA Games",
  description:
    "Learn how BUGA Games collects, uses, and protects your personal information.",
};

const sections = [
  {
    id: "introduction",
    icon: FileText,
    title: "1. Introduction",
    content: `BUGA Games ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website buga.games and use our digital lottery and gaming services.\n\nBy accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this policy, please discontinue use of our services.`,
  },
  {
    id: "information-we-collect",
    icon: Eye,
    title: "2. Information We Collect",
    content: `We may collect the following types of information:`,
    groups: [
      {
        label: "Personal Identification Information",
        items: [
          "Full name, date of birth, and gender",
          "Email address, phone number, and postal address",
          "Government-issued ID for identity verification (KYC compliance)",
          "Payment information including bank account and mobile money details",
        ],
      },
      {
        label: "Account Information",
        items: [
          "Username and password (encrypted)",
          "Account preferences and settings",
          "Transaction and gameplay history",
        ],
      },
      {
        label: "Technical Information",
        items: [
          "IP address and device identifiers",
          "Browser type and version",
          "Operating system",
          "Pages visited and time spent on our platform",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    icon: UserCheck,
    title: "3. How We Use Your Information",
    content: `We use the information we collect for the following purposes:`,
    list: [
      "Account Management — to create and manage your BUGA account",
      "Service Delivery — to process transactions, lottery entries, and prize payouts",
      "Legal Compliance — to verify your identity (KYC/AML regulations) and comply with applicable laws",
      "Security — to detect, prevent, and address fraud, abuse, and security incidents",
      "Communication — to send transactional emails, promotional offers, and platform updates",
      "Customer Support — to respond to your inquiries and resolve disputes",
      "Analytics — to understand how users interact with our platform and improve our services",
      "Responsible Gaming — to monitor usage patterns and enforce responsible gaming limits",
    ],
  },
  {
    id: "sharing",
    icon: Share2,
    title: "4. Sharing Your Information",
    content: `We do not sell your personal data to third parties. We may share your information with:`,
    groups: [
      {
        label: "Service Providers",
        items: [
          "Third-party vendors who assist in operating our platform, processing payments, sending communications, and providing customer support — all bound by confidentiality agreements.",
        ],
      },
      {
        label: "Regulatory Authorities",
        items: [
          "Government agencies, law enforcement, or regulators where required by law, including the State Lottery Regulatory Commission and financial intelligence units.",
        ],
      },
      {
        label: "With Your Consent",
        items: [
          "We may share your information with third parties when you have given us explicit consent to do so.",
        ],
      },
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "5. Data Security",
    content: `We implement industry-standard security measures to protect your personal information:`,
    list: [
      "Encryption — all data transmitted is encrypted using SSL/TLS technology",
      "Access Controls — strict role-based access controls limit internal access to your data",
      "Secure Storage — sensitive data is stored using AES-256 encryption",
      "Regular Audits — our systems undergo regular security audits and penetration testing",
      "Two-Factor Authentication — we offer and encourage 2FA for your account",
    ],
    footnote:
      "While we take every precaution, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.",
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "6. Cookies & Tracking Technologies",
    content: `We use cookies and similar tracking technologies to enhance your experience on our platform.`,
    groups: [
      {
        label: "Types of cookies we use",
        items: [
          "Essential Cookies — required for the platform to function correctly",
          "Analytics Cookies — help us understand how visitors interact with our site",
          "Marketing Cookies — used to deliver relevant promotions and track campaign effectiveness",
          "Preference Cookies — remember your settings and preferences",
        ],
      },
    ],
    footnote:
      "You can control cookie settings through your browser. Disabling certain cookies may affect the functionality of our platform.",
  },
  {
    id: "retention",
    icon: Clock,
    title: "7. Data Retention",
    content: `We retain your personal information for as long as your account is active or as needed to provide services. We may retain certain information for longer periods where required by law or regulatory obligations (e.g., AML regulations typically require 5–7 years), necessary for fraud prevention, or required to resolve disputes.\n\nWhen your data is no longer needed, we will securely delete or anonymize it.`,
  },
  {
    id: "your-rights",
    icon: Shield,
    title: "8. Your Rights",
    content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:`,
    list: [
      "Right to Access — request a copy of the personal data we hold about you",
      "Right to Rectification — request correction of inaccurate or incomplete data",
      "Right to Erasure — request deletion of your personal data",
      "Right to Restriction — request that we restrict processing of your data",
      "Right to Portability — receive your data in a structured, machine-readable format",
      "Right to Object — object to our processing of your data for marketing purposes",
      "Right to Withdraw Consent — withdraw consent at any time",
    ],
    footnote: "To exercise any of these rights, please contact us at privacy@buga.games. We will respond within 30 days.",
  },
  {
    id: "minors",
    icon: Baby,
    title: "9. Minors",
    content: `Our services are strictly intended for individuals who are 18 years of age or older. We do not knowingly collect personal information from minors.\n\nIf we become aware that a minor has provided us with personal information, we will take immediate steps to delete such information and terminate the associated account. If you believe a minor has registered on our platform, please contact us immediately at support@buga.games.`,
  },
  {
    id: "third-party",
    icon: Link2,
    title: "10. Third-Party Links",
    content: `Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of significant changes by posting the updated policy on this page with a revised date, sending an email notification, or displaying a notice on our platform.\n\nYour continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.`,
  },
  {
    id: "contact",
    icon: Phone,
    title: "12. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:\n\nEmail: privacy@buga.games\nSupport: support@buga.games\nWebsite: www.buga.games\n\nWe are committed to resolving any privacy concerns promptly and transparently.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white">
      <Navigation />

      {/* Hero */}
      <div className="bg-[#1C5D3E] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy
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
            Your privacy matters to us. This policy explains how we handle your
            personal information transparently and responsibly.
          </p>
        </div>
      </div>

      {/* Notice Banner */}
      <div className="bg-orange-500/10 border-y border-orange-500/30 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3 justify-center text-center">
          <Shield className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <p className="text-orange-400 text-sm">
            <strong className="text-orange-500">Licensed & Regulated</strong> — BUGA
            Games is regulated by the State Lottery Regulatory Commission and
            committed to protecting your data in accordance with applicable laws.
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
                <p className="text-white text-xs font-semibold mb-1">Privacy Concerns?</p>
                <p className="text-gray-400 text-xs mb-3">
                  Contact our privacy team for any data-related requests.
                </p>
                <a
                  href="mailto:privacy@buga.games"
                  className="block text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2 px-3 rounded-md transition-colors"
                >
                  Email Privacy Team
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

                    {section.groups &&
                      section.groups.map((group, i) => (
                        <div key={i} className="mt-4">
                          <p className="text-white font-semibold mb-2">{group.label}</p>
                          <ul className="space-y-2">
                            {group.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-3">
                                <span className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

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
              <Lock className="w-12 h-12 text-white/80 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Have Questions About Your Privacy?
              </h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                Our privacy team is here to help with any data-related concerns or requests.
              </p>
              <a
                href="mailto:privacy@buga.games"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Privacy Team
              </a>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
