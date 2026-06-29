"use client";

import Navigation from "@/components/ui/Navigation";
//import HeroSection from "@/components/sections/Hero";
import HeroSection1 from "@/components/sections/HeroSection";
//import { Transform } from "@/components/sections/Transform";
import HowItWorksSection from "@/components/sections/HowItWorks";
//import { Features } from "@/components/sections/Features";
import { WhatSetUsApart } from "@/components/sections/WhatSetUsApart";
import { TrustedAndSecure } from "@/components/sections/TrustedAndSecure";
//import { WhatOurWinnerSay } from "@/components/sections/WhatOurWinnerSay";
import { FAQ } from "@/components/sections/FAQ";
import { Support } from "@/components/sections/Support";
//import  Footer  from "@/components/sections/Footer";
import { GamesSection } from "@/components/sections/Games";
import LatestResultsPage  from "@/components/sections/resultPage";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection1 />
      {/* <Transform /> */}
      <LatestResultsPage/>
      <HowItWorksSection />
      {/* <Features /> */}
      <GamesSection /> {/* Add the GamesSection here */}
      <WhatSetUsApart />
      <TrustedAndSecure />
      {/* <WhatOurWinnerSay /> */}
      <FAQ />
      <Support />
      {/* <Footer/> */}
    </div>
  );
}
