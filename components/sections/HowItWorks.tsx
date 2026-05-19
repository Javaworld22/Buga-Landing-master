import { StepCard } from "../ui/step-card";

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="min-h-screen bg-gray-50 flex items-center justify-center py-1"
    >
      <div className="w-full md:px-[12.5%] mx-auto sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair">
            How Our <span className="text-orange-500">Buga</span> App Works
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto font-roboto font-normal">
            Start playing in just three simple steps and experience the future
            <br />
            of digital lottery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-1 cards">
          <StepCard
            stepNumber={1}
            title="Sign Up"
            description="Create your account in seconds with just your email and phone number. No complicated forms."
            icon="/how-it-works/step-1.svg"
          />

          <StepCard
            stepNumber={2}
            title="Top Up Wallet"
            description="Fund your wallet using multiple secure payment methods. Instant deposits with no hidden fees."
            icon="/how-it-works/step-2.svg"
          />

          <StepCard
            stepNumber={3}
            title="Enter Draws"
            description="Choose your lucky numbers or use our quick pick option. Get notified instantly when you win."
            icon="/how-it-works/step-3.svg"
          />
        </div>
      </div>
    </section>
  );
}
