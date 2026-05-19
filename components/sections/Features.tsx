"use client";

import { FeatureCard } from "../ui/FeatureCard";
import type { FeatureCardProps } from "@/types/type";
import { Heading } from "../ui/heading";

const features: FeatureCardProps[] = [
  {
    image: "/features/1.png",
    imagePosition: "left",
    title: "Digital Wallet",
    description:
      "Safeguard your funds and winnings with top-tier bank-grade encryption, ensuring your financial data is protected at all times. Enjoy the convenience of instant withdrawals, allowing you to access your money whenever you need it.",
    alt: "Digital Wallet",
  },
  {
    image: "/features/2.png",
    imagePosition: "right",
    title: "Referral Bonus",
    description:
      "Invite your friends to join us and earn bonus coins for every referral who signs up and completes their first deposit. The more friends you invite, the more rewards you can accumulate!",
    alt: "Referral Bonus",
    bgColor: "bg-gradient-to-br from-[#e6f4eb] to-[#d4f0dc]",
    className: "bg-[#F3FCF8] border-[#31EA94]",
  },
  {
    image: "/features/3.png",
    imagePosition: "right",
    title: "Fraud Detection",
    description:
      "Implementing cutting-edge security protocols to safeguard your account while promoting a fair and enjoyable experience for every participant.",
    alt: "Fraud Detection",
  },
  {
    image: "/features/4.png",
    imagePosition: "left",
    title: "Real Time Results",
    description:
      "Get instant notifications when draws are completed and see results in real-time on your device.",
    alt: "Real Time Results",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="section pt-16 lg:pt-10 bg-white overflow-visible w-full md:px-[12.5%] mx-auto sm:px-6"
    >
      <div className="py-5">
        <Heading
          title="Feature Highlights"
          description="Our platform offers a seamless lottery experience with these premium features."
        />
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            imagePosition={feature.imagePosition}
            title={feature.title}
            description={feature.description}
            alt={feature.alt}
            bgColor={feature.bgColor}
            className={feature.className}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
