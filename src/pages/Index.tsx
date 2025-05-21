import Navbar from "@/components/Navbar";
import DemoBanner from "@/components/DemoBanner";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AgentsSection from "@/components/AgentsSection";
import AboutUsSection from "@/components/AboutUsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <DemoBanner />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AgentsSection />
        <AboutUsSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;