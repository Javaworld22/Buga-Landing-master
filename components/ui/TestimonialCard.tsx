import { TestimonialCardProps } from "@/types/type";
import React from "react";

export const TestimonialCard = ({
  rating,
  testimonial,
  name,
  location,
  initials,
}: TestimonialCardProps) => {
  const generateInitials = (fullName: string): string => {
    return fullName
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const displayInitials = initials || generateInitials(name);

  const renderStars = (count: number) => {
    const stars = [];
    const validCount = Math.max(0, Math.min(5, Math.floor(count))); // Ensure between 0-5

    for (let i = 0; i < validCount; i++) {
      stars.push(
        <span key={i} className="text-orange-500 text-xl">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 max-w-md w-full shadow-sm h-full flex flex-col">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">{renderStars(rating)}</div>

      {/* Testimonial */}
      <blockquote className="text-gray-700 text-base leading-relaxed mb-6 flex-1">
        "{testimonial}"
      </blockquote>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
          <span className="text-green-800 font-semibold text-sm">
            {displayInitials}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-base">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};
