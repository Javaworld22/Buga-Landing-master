import React from "react";
import Image from "next/image";

export const Transform = () => {
  return (
    <div
      className="w-full md:px-[12.5%] mx-auto sm:px-6py-12 lg:py-20"
      id="tranform"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative">
          <Image
            src="/cta/transform.jpg"
            alt="Happy people celebrating lottery wins with confetti"
            width={515}
            height={411}
            className="lg:w-full lg:h-full rounded-lg md:w-full md:h-[411px] object-cover img"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-green leading-tight font-playfair transition-all duration-300">
              Transforming Digital Lottery in Africa
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed font-roboto">
              Founded in 2023, Buga has revolutionized the traditional lottery
              experience by bringing it into the digital age. Our platform
              combines cutting-edge technology with unwavering security to
              deliver a seamless, transparent, and exciting lottery experience.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500">
                1M+
              </div>
              <div className="text-gray-600 font-medium">Active Players</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500">
                ₦500M+
              </div>
              <div className="text-gray-600 font-medium">Prizes Awarded</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500">
                99.9%
              </div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
