"use client";

import Navigation from "@/components/ui/Navigation";
import HeroSection from "@/components/sections/Hero";
import { Transform } from "@/components/sections/Transform";
import HowItWorksSection from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { WhatSetUsApart } from "@/components/sections/WhatSetUsApart";
import { TrustedAndSecure } from "@/components/sections/TrustedAndSecure";
import { WhatOurWinnerSay } from "@/components/sections/WhatOurWinnerSay";
import { FAQ } from "@/components/sections/FAQ";
import { Support } from "@/components/sections/Support";
import  Footer  from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Transform />
      <HowItWorksSection />
      <Features />
      <WhatSetUsApart />
      <TrustedAndSecure />
      <WhatOurWinnerSay />
      <FAQ />
      <Support />
      <Footer/>
    </div>
  );
}
