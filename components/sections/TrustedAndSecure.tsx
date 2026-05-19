import React from "react";
import { Heading } from "../ui/heading";
import { GenericCardProps } from "@/types/type";
import GenericCard from "../ui/generic-card";

const cards: GenericCardProps[] = [
  {
    icon: "/trusted/1.svg",
    title: "NDPR Compliant",
    description: "Full compliance with Nigerian Data Protection Regulation",
    bgColor: "bg-[#FFF6F0]",
  },
  {
    icon: "/trusted/2.svg",
    title: "GDPR Compliant",
    description: "Meeting all European data protection requirements",
    bgColor: "bg-[#FFF6F0]",
  },
  {
    icon: "/trusted/3.svg",
    title: "SSL Encryption",
    description: "256-bit secure connection for all transactions",
    bgColor: "bg-[#FFF6F0]",
  },
  {
    icon: "/trusted/4.svg",
    title: "Bank-Grade Security",
    description: "Enterprise-level protection for your financial data",
    bgColor: "bg-[#FFF6F0]",
  },
];

export const TrustedAndSecure = () => {
  return (
    <div className="bg-white">
      <section
        id="trusted"
        className="w-full md:px-[12.5%] mx-auto sm:px-6 mt-20 p-2"
      >
        <Heading
          title="Trusted & Secure"
          description="We prioritize your security and privacy with industry-leading standards and compliance."
        />
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20 cards">
          {cards.map((feature, index) => (
            <GenericCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
