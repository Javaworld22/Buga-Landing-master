import Image from "next/image"

interface StepCardProps {
  stepNumber: number
  title: string
  description: string
  icon: string
}

export function StepCard({ stepNumber, title, description, icon }: StepCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-auto card">
      {/* Responsive Icon Container */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 flex items-center justify-center">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>

      {/* Step Label */}
      <div className="text-orange-500 font-medium text-sm mb-2">
        Step {stepNumber}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 md:mb-1">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
