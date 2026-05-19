import Image from "next/image";

export default function ImageComponent({
  image,
  alt,
}: {
  image?: string;
  alt: string;
}) {
  return (
    <div className="w-full md:w-[44%] flex items-center justify-center p-6 md:p-8">
      {/* Remove max-w-md and aspect-ratio constraints */}
      <div className="relative w-full h-full min-h-[300px]">
        <Image
          src={image || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
