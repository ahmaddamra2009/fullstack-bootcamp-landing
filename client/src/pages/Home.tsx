/**
 * Home Page - FullStack BootCamp Landing Page
 * Desert Night Campfire Theme
 * 
 * Design Philosophy:
 * - Atmospheric immersion in a night desert coding camp
 * - Primary: Cyan/Teal (#00d4ff) - represents technology
 * - Secondary: Warm Orange (#ff6b35) - represents campfire warmth
 * - Background: Deep navy gradients - night sky
 * - Glass morphism effects throughout
 * - Smooth animations and transitions
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import PhasesSection from "@/components/PhasesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import OutcomesSection from "@/components/OutcomesSection";
import FAQSection from "@/components/FAQSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {

  return (
    <div className="min-h-screen bg-[#0a1628] overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section with countdown */}
        <HeroSection />

        {/* Why Different Section */}
        <WhyDifferentSection />

        {/* Training Phases */}
        <PhasesSection />

        {/* Target Audience */}
        <TargetAudienceSection />

        {/* Training Outcomes */}
        <OutcomesSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Registration Form */}
        <RegisterSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
