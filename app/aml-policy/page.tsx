import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/sections/Footer";
import {
    Shield,
    AlertTriangle,
    UserCheck,
    Eye,
    FileText,
    Lock,
    RefreshCw,
    Phone,
    Ban,
    Search,
    ClipboardList,
    Scale,
} from "lucide-react";

export const metadata = {
    title: "AML Policy | BUGA Games",
    description:
        "BUGA Games Anti-Money Laundering (AML) Policy — our commitment to preventing financial crime and maintaining regulatory compliance.",
};

const sections = [
    {
        id: "introduction",
        icon: FileText,
        title: "1. Introduction",
        content: `BUGA Games (operated by PEFFNELO INDUSTRIES LIMITED) is committed to the highest standards of Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) compliance. This policy outlines our obligations and procedures in accordance with the applicable laws and regulations of the Federal Republic of Nigeria, including the Lagos State Lotteries and Gaming Authority (LSLGA) licensing requirements.\n\nMoney laundering is the process of making illegally obtained funds appear legitimate. BUGA Games has a zero-tolerance policy toward any form of money laundering, terrorist financing, or other financial crimes on our platform.`,
    },
    {
        id: "scope",
        icon: Scale,
        title: "2. Scope & Application",
        content: `This AML Policy applies to:`,
        list: [
            "All users and customers of the BUGA Games platform",
            "All employees, contractors, and agents of PEFFNELO INDUSTRIES LIMITED",
            "All financial transactions processed through the platform",
            "All third-party payment providers and partners",
        ],
        footnote:
            "This policy is reviewed and updated regularly to reflect changes in applicable laws, regulations, and industry best practices.",
    },
    {
        id: "kyc",
        icon: UserCheck,
        title: "3. Know Your Customer (KYC)",
        content: `BUGA Games implements a robust Know Your Customer program to verify the identity of all users. KYC procedures include:`,
        groups: [
            {
                label: "Identity Verification",
                items: [
                    "Government-issued photo ID (National ID Card, Passport, or Driver's Licence)",
                    "Proof of address (utility bill or bank statement not older than 3 months)",
                    "Date of birth verification to confirm users are 18 years or older",
                    "Biometric or selfie verification where required",
                ],
            },
            {
                label: "Enhanced Due Diligence (EDD)",
                items: [
                    "Source of funds documentation for high-value transactions",
                    "Source of wealth documentation for Politically Exposed Persons (PEPs)",
                    "Additional identity documents for high-risk customers",
                    "Ongoing monitoring of accounts flagged for suspicious activity",
                ],
            },
        ],
        footnote:
            "Accounts that fail to complete KYC verification within the required timeframe may be suspended or terminated.",
    },
    {
        id: "monitoring",
        icon: Eye,
        title: "4. Transaction Monitoring",
        content: `BUGA Games continuously monitors all transactions on the platform to detect suspicious activity. Our monitoring systems flag:`,
        list: [
            "Unusually large deposits or withdrawals inconsistent with a user's profile",
            "Frequent deposits followed by immediate withdrawals without gaming activity",
            "Multiple accounts operated by the same individual or from the same device",
            "Transactions structured to avoid reporting thresholds (structuring/smurfing)",
            "Deposits from or withdrawals to high-risk jurisdictions",
            "Use of multiple payment methods by a single user in a short period",
            "Rapid movement of funds with no apparent gaming purpose",
        ],
    },
    {
        id: "reporting",
        icon: ClipboardList,
        title: "5. Suspicious Activity Reporting",
        content: `Where suspicious activity is identified, BUGA Games is obligated to report to the relevant authorities. Our reporting obligations include:`,
        groups: [
            {
                label: "Internal Reporting",
                items: [
                    "All staff must immediately report any suspicions to the designated AML Compliance Officer",
                    "Reports are documented and investigated within 24–48 hours",
                    "No tipping off — suspected individuals must not be informed of any investigation",
                ],
            },
            {
                label: "External Reporting",
                items: [
                    "Suspicious Transaction Reports (STRs) are filed with the Nigerian Financial Intelligence Unit (NFIU)",
                    "Currency Transaction Reports (CTRs) are filed for transactions above the regulatory threshold",
                    "Reports are submitted to LSLGA as required by our gaming licence conditions",
                ],
            },
        ],
    },
    {
        id: "prohibited",
        icon: Ban,
        title: "6. Prohibited Activities",
        content: `The following activities are strictly prohibited on the BUGA Games platform:`,
        list: [
            "Using the platform to launder proceeds of crime or illegal activity",
            "Depositing funds from stolen, unauthorized, or fraudulent payment methods",
            "Conducting transactions on behalf of a third party without disclosure",
            "Structuring transactions to avoid AML thresholds or reporting requirements",
            "Operating multiple accounts to obscure transaction trails",
            "Using the platform to finance terrorism or any illegal organization",
            "Providing false or misleading information during KYC verification",
        ],
        footnote:
            "Violation of any prohibited activity will result in immediate account suspension, forfeiture of funds, and mandatory reporting to law enforcement authorities.",
    },
    {
        id: "risk",
        icon: Search,
        title: "7. Risk Assessment",
        content: `BUGA Games applies a risk-based approach to AML compliance. Customers are classified into risk categories based on:`,
        list: [
            "Geographic location and country of residence",
            "Transaction volume and frequency",
            "Payment methods used",
            "Politically Exposed Person (PEP) status",
            "Adverse media or sanctions screening results",
            "Source of funds and wealth",
        ],
        footnote:
            "Higher-risk customers are subject to Enhanced Due Diligence (EDD) and more frequent monitoring reviews.",
    },
    {
        id: "sanctions",
        icon: AlertTriangle,
        title: "8. Sanctions Screening",
        content: `BUGA Games screens all customers and transactions against international and domestic sanctions lists, including:`,
        list: [
            "United Nations Security Council (UNSC) Sanctions List",
            "Office of Foreign Assets Control (OFAC) SDN List",
            "European Union Consolidated Sanctions List",
            "Nigerian Sanctions List issued by the CBN and relevant authorities",
        ],
        footnote:
            "Any match against a sanctions list will result in immediate account freeze and reporting to the relevant regulatory authority.",
    },
    {
        id: "data-retention",
        icon: Lock,
        title: "9. Record Keeping",
        content: `BUGA Games maintains comprehensive records of all KYC documentation, transactions, and AML-related activities in accordance with regulatory requirements.\n\nAll records are retained for a minimum of 5 years from the date of the transaction or the end of the customer relationship, whichever is later. Records are stored securely and made available to regulatory authorities upon request.`,
    },
    {
        id: "training",
        icon: Shield,
        title: "10. Staff Training",
        content: `All employees of PEFFNELO INDUSTRIES LIMITED who interact with customers or handle financial transactions receive mandatory AML training covering:`,
        list: [
            "Recognition of suspicious activity and red flags",
            "KYC procedures and customer due diligence requirements",
            "Internal reporting obligations and procedures",
            "Regulatory requirements under Nigerian law and LSLGA licence conditions",
            "Consequences of non-compliance for individuals and the company",
        ],
        footnote: "AML training is conducted at onboarding and refreshed annually or whenever there are significant regulatory changes.",
    },
    {
        id: "officer",
        icon: UserCheck,
        title: "11. AML Compliance Officer",
        content: `BUGA Games has appointed a designated AML Compliance Officer responsible for:\n\n- Overseeing implementation of this AML Policy\n- Reviewing and investigating suspicious activity reports\n- Filing regulatory reports with the NFIU and LSLGA\n- Ensuring staff training is up to date\n- Keeping this policy current with regulatory changes\n\nFor AML-related concerns, contact: compliance@buga.games`,
    },
    {
        id: "updates",
        icon: RefreshCw,
        title: "12. Policy Updates",
        content: `This AML Policy is reviewed at least annually and updated as required to reflect changes in applicable laws, regulations, and industry best practices. BUGA Games reserves the right to amend this policy at any time.\n\nUsers will be notified of material changes through the platform or via email.`,
    },
    {
        id: "contact",
        icon: Phone,
        title: "13. Contact Us",
        content: `For questions or concerns regarding our AML Policy or to report suspicious activity:\n\nCompliance Team: compliance@buga.games\nSupport: support@buga.games\nWebsite: www.buga.games\n\nPEFFNELO INDUSTRIES LIMITED (BUGA GAMES)\nLicensed by the Lagos State Lotteries and Gaming Authority\nLicence No: LSLGA/OP/OG/BG131025`,
    },
];

export default function AMLPolicyPage() {
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
                        Anti-Money Laundering Policy
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
                        BUGA Games maintains a zero-tolerance policy toward money laundering,
                        terrorist financing, and all forms of financial crime.
                    </p>
                </div>
            </div>

            {/* Notice Banner */}
            <div className="bg-orange-500/10 border-y border-orange-500/30 py-4 px-4">
                <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-orange-400">
                    <span className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" /> Zero Tolerance for Money Laundering
                    </span>
                    <span className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-orange-500" /> LSLGA & NFIU Compliant
                    </span>
                    <span className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-orange-500" /> KYC Verified Platform
                    </span>
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
                                <p className="text-white text-xs font-semibold mb-1">Report Suspicious Activity</p>
                                <p className="text-gray-400 text-xs mb-3">
                                    Contact our compliance team immediately if you suspect financial crime.
                                </p>
                                <a
                                    href="mailto:compliance@buga.games"
                                    className="block text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2 px-3 rounded-md transition-colors"
                                >
                                    Contact Compliance
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

                        {/* CTA */}
                        <div className="mt-12 bg-[#1C5D3E] rounded-xl p-8 text-center">
                            <Shield className="w-12 h-12 text-white/80 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">
                                Committed to Financial Integrity
                            </h3>
                            <p className="text-white/70 mb-6 max-w-md mx-auto">
                                BUGA Games works closely with Nigerian regulatory authorities to
                                maintain the highest standards of financial compliance.
                            </p>
                            <a
                                href="mailto:compliance@buga.games"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                                Contact Compliance Team
                            </a>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
