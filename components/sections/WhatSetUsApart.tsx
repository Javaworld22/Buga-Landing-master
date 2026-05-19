import { GenericCardProps } from "@/types/type";
import React from "react";
import { Heading } from "../ui/heading";
import GenericCard from "../ui/generic-card";
import ReferallBanner from "../ui/referall-banner";

const cards: GenericCardProps[] = [
  {
    icon: "/set-us-apart/1.svg",
    title: "Draw Transparency",
    description:
      "Watch live draws with our transparent drawing system. All results are verifiable and permanently recorded on our secure platform.",
  },
  {
    icon: "/set-us-apart/2.svg",
    title: "Secure Payments",
    description:
      "Multiple payment options with bank-grade security. Your financial information is always protected with advanced encryption.",
  },
  {
    icon: "/set-us-apart/3.svg",
    title: "Mini Games",
    description:
      "Enjoy a variety of mini-games between draws. Win bonus entries and increase your chances in the main lottery draws.",
  },
];

export const WhatSetUsApart = () => {
  return (
    <div>
      <section
        id="app"
        className="pt-16 lg:pt-10 overflow-hidden w-full md:px-[12.5%] mx-auto"
      >
        <Heading
          title="What Sets Us Apart"
          description="Our platform offers a comprehensive suite of features designed to enhance your lottery experience"
        />
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-4 mb-20 sm:place-items-center">
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
      <ReferallBanner />
    </div>
  );
};
