"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface SupportCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  availabilityText?: string;
  responseTimeText?: string;
  buttonText: string;
  onButtonClick: () => void;
  iconBgColor?: string;
  iconColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  cardBgColor?: string;
  className?: string;
}

export default function SupportCard({
  icon: Icon,
  title,
  description,
  availabilityText,
  responseTimeText,
  buttonText,
  onButtonClick,
  iconBgColor = "bg-[#F4E6D7]",
  iconColor = "text-orange-500",
  buttonColor = "bg-orange-500",
  buttonHoverColor = "hover:bg-orange-600",
  cardBgColor = "bg-[#F5F3F0]",
  className = "",
}: SupportCardProps) {
  return (
    <Card
      className={`w-full ${cardBgColor} border-0 shadow-sm ${className}`}
    >
      <CardContent className="flex flex-col items-center text-center p-8 space-y-6 font-roboto">
        {/* Icon Container */}
        <div
          className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center`}
        >
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>

        {/* Heading */}
        <h3 className="text-2xl font-bold text-gray-900 font-playfair">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#4B5563] text-base leading-relaxed font-bold">
          {description}
        </p>

        {/* Availability Info */}
        {availabilityText && (
          <p className="text-[#6B7280] text-sm font-medium">
            {availabilityText}
          </p>
        )}

        {/* Response Time */}
        {responseTimeText && (
          <p className="text-[#1C5D3E] text-sm font-bold">
            {responseTimeText}
          </p>
        )}

        {/* CTA Button */}
        <Button
          onClick={onButtonClick}
          className={`w-full ${buttonColor} ${buttonHoverColor} text-white font-semibold pt-3 pr-6 pb-3 pl-6 rounded-lg transition-colors`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
