import React from "react";
import { HeadingProps } from "@/types/type";

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="text-center px-4 mb-13 md:pt-20 head">
      <h2 className="text-4xl lg:text-5xl font-bold text-green font-playfair mb-4">
        {title}
      </h2>
      <p className="text-lg text-[#4B5563] max-w-2xl mx-auto font-roboto font-normal">
        {description}
      </p>
    </div>
  );
};
