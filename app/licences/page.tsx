import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import { Shield, CheckCircle, Award, Globe, Lock, FileText, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Licences & Certificates | BUGA Games",
  description:
    "BUGA Games is fully licensed and regulated by the Lagos State Lotteries and Gaming Authority.",
};

export default function LicencesPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white">
      <Navigation />

      {/* Hero */}
      <div className="bg-[#1C5D3E] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Licences & Certificates
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
            BUGA Games operates under full regulatory compliance, licensed by
            the Lagos State Lotteries and Gaming Authority.
          </p>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-orange-500/10 border-y border-orange-500/30 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-orange-400">
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-orange-500" /> Fully Licensed
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-orange-500" /> LSLGA Regulated
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-orange-500" /> Lagos State Approved
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-orange-500" /> Active Until 13/10/2026
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Official Certificate Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Official Gaming Licence</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Issued by the Lagos State Lotteries and Gaming Authority, authorizing
              PEFFNELO INDUSTRIES LIMITED (BUGA GAMES) to operate as a gaming
              operator in Lagos State.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Certificate Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1C5D3E] via-orange-500 to-[#1C5D3E] rounded-2xl blur-sm opacity-50" />
                <div className="relative rounded-2xl overflow-hidden border border-[#1C5D3E]/60 shadow-2xl">
                  <Image
                    src="/certificate.jpeg"
                    alt="BUGA Games Official Gaming Licence - Lagos State Lotteries and Gaming Authority"
                    width={800}
                    height={1100}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                {/* Verified badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1C5D3E] border border-green-500/40 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Verified & Active
                </div>
              </div>
            </div>

            {/* Licence Details */}
            <div className="w-full lg:w-1/2 space-y-4 lg:pt-4">
              <h3 className="text-xl font-bold text-white mb-6">Licence Details</h3>

              {[
                { label: "Company Name", value: "PEFFNELO INDUSTRIES LIMITED (BUGA GAMES)" },
                { label: "Issuing Authority", value: "Lagos State Lotteries and Gaming Authority" },
                { label: "Licence Number", value: "LSLGA/OP/OG/BG131025" },
                { label: "Category", value: "Other Games" },
                { label: "Initial Licensing Date", value: "13/10/2025" },
                { label: "New Licensing Date", value: "13/10/2025" },
                { label: "Expiring Date", value: "13/10/2026" },
                { label: "Status", value: "Active", highlight: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 bg-[#1A1A2E] border border-gray-800 rounded-xl px-5 py-4"
                >
                  <span className="text-gray-400 text-sm flex-shrink-0">{item.label}</span>
                  <span className={`text-sm font-semibold text-right ${item.highlight ? "text-green-400 flex items-center gap-1.5" : "text-white"}`}>
                    {item.highlight && (
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                    )}
                    {item.value}
                  </span>
                </div>
              ))}

              {/* Warning note */}
              <div className="flex items-start gap-3 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mt-6">
                <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-orange-400 text-sm leading-relaxed">
                  This licence is publicly verifiable through the Lagos State
                  Lotteries and Gaming Authority (LSLGA). For verification,
                  contact <strong>LSLGA</strong> directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Compliance Cards */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Additional Compliance</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Beyond our gaming licence, BUGA Games maintains certifications
              across security, fair play, and financial compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "AML Compliance",
                issuer: "Financial Intelligence Unit",
                description: "Certified compliant with Anti-Money Laundering regulations and financial reporting standards.",
              },
              {
                icon: Lock,
                title: "SSL / Data Security",
                issuer: "DigiCert Inc.",
                description: "256-bit SSL encryption certified for all data transmissions on the platform.",
              },
              {
                icon: Globe,
                title: "KYC Certification",
                issuer: "Identity Verification Board",
                description: "Certified for Know Your Customer procedures and identity verification processes.",
              },
              {
                icon: FileText,
                title: "Responsible Gaming",
                issuer: "Gaming Standards Authority",
                description: "Certified for responsible gaming policies, self-exclusion tools, and player protection.",
              },
              {
                icon: Award,
                title: "Fair Play Certification",
                issuer: "Independent Testing Lab",
                description: "Random number generators and draw processes independently tested and certified fair.",
              },
              {
                icon: CheckCircle,
                title: "Payment Security",
                issuer: "PCI Council",
                description: "PCI-DSS compliant for secure handling of all payment card and financial transactions.",
              },
            ].map((cert, i) => (
              <div
                key={i}
                className="bg-[#1A1A2E] border border-gray-800 hover:border-[#1C5D3E]/60 rounded-xl p-6 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-[#1C5D3E]/40 rounded-lg flex items-center justify-center">
                    <cert.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Active
                  </span>
                </div>
                <h3 className="text-white font-bold mb-1">{cert.title}</h3>
                <p className="text-orange-500/80 text-xs mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#1C5D3E]/20 border border-[#1C5D3E]/40 rounded-2xl p-8 sm:p-12 text-center">
          <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Committed to Full Compliance</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            BUGA Games operates with complete transparency under the supervision
            of the Lagos State Lotteries and Gaming Authority. For compliance
            inquiries, please contact our team.
          </p>
          <a
            href="mailto:compliance@buga.games"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Contact Compliance Team
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
