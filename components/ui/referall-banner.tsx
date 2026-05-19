import Image from "next/image";

export default function ReferralBanner() {
  return (
    <div
      className="relative overflow-hidden py-[6%]"
      style={{
        backgroundImage: "url('/set-us-apart/bg.png')",
        backgroundColor: "#1c5d3e",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Content Container */}
      <div className="w-full py-12 md:py-20 h-full invite">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end justify-between items-center gap-[17%]">
          {/* Text Section */}
          <div className="basis-[45%] pl-[12.5%] first">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight font-playfair ">
              Invite Friends. Earn Coins.
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-md lg:max-w-full mx-auto lg:mx-0">
              Share your referral code with friends and family. For every new
              user who signs up and makes their first deposit, you'll both
              receive bonus coins to use in{" "}
              <span className="text-yellow-300 font-semibold">
                future draws
              </span>
              .
            </p>
          </div>

          {/* Right Section - Positioned to bottom right */}
          <div className="absolute bottom-0 -right-25 w-[38%]  h-[105%] img">
            <Image
              src="/set-us-apart/woman.png"
              alt="Woman with megaphone promoting referral program"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
