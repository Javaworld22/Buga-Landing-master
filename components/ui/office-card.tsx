import React from "react";

interface OfficeCardProps {
  state: string;
  address: string;
  phone: string;
}

export default function OfficeCard({ state, address, phone }: OfficeCardProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-start space-x-4">
        <div className="w-12 h-12 bg-[#1C5D3E1A] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mb-4">
          <svg
            className="w-5 h-5 text-[#25a165]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div className="mb-4 flex-1">
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{state}</h3>
          <p className="text-[#4B5563] font-roboto mb-3 font-bold">{address}</p>
          <div className="space-y-1 text-sm text-[#6B7280] font-bold font-roboto">
            <p>Hours: Monday-Friday, 9am-5pm</p>
            <p>Phone: {phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
