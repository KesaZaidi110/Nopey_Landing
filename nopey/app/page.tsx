import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStrip from "@/components/ProblemStrip";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import PrivacySection from "@/components/PrivacySection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProblemStrip />
        <HowItWorks />
        <Features />
        <PrivacySection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
