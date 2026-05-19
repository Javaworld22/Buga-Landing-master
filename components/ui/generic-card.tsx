import { GenericCardProps } from '@/types/type'
import React from 'react'
import Image from 'next/image';

const GenericCard = ({
    icon,
    title,
    description,
    bgColor = "bg-[#FFFFFF]",
    

}:GenericCardProps) => {
    return (
      <div
        className={`flex flex-col items-start justify-evenly ${bgColor} rounded-2xl p-8 shadow-sm border-0 hover:shadow-lg lg:h-full  lg:w-full`}
      >
        <Image src={icon} alt={title} width={64} height={64} />
        <h4 className="font-roboto text-[#111827] font-semibold text-xl leading-7 mb-2">
          {title}
        </h4>
        <p className="font-roboto text-[#4B5563] font-normal text-base leading-6">
          {description}
        </p>
      </div>
    );
}

export default GenericCard