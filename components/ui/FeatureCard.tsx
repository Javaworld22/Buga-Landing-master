"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ImageContainer from "./full-width";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  imagePosition?: "left" | "right";
  bgColor?: string;
  className?: string;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  alt,
  imagePosition = "left",
  className = "",
  index,
}) => {
  const isImageRight = imagePosition === "right";

  return (
    <div className="cardContainer">
      <Card
        className={`w-full bg-[#F8F6F3] border-2 border-[#D4B896] rounded-3xl overflow-hidden ${className} card`}
        style={{
          top: `calc(-5vh + ${index * 25}px)`,
        }}
      >
        <CardContent className="p-0 h-full">
          <div
            className={`flex flex-col-reverse md:flex-row ${
              isImageRight ? "md:flex-row-reverse" : ""
            } h-full md:justify-between md:items-center`}
          >
            {/* Image Section */}
            <ImageContainer image={ image} alt={alt} />
            {/* Spacer */}
            <div className="hidden md:block w-[12%]" />
            {/* Text Section */}
            <div
              className={`w-full md:w-[42%] flex flex-col justify-center text-center md:text-left p-6 sm:p-8 ${
                isImageRight ? "md:pl-[0.5%]" : "md:pr-[0.5%]"
              }`}
            >
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 font-playfair ${
                  isImageRight ? "md:ml-12" : "md:mr-0"
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-roboto ${
                  isImageRight ? "md:ml-12" : "md:mr-4"
                }`}
              >
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
