
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AgentsSection from "@/components/AgentsSection";
import AboutUsSection from "@/components/AboutUsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { FormSubmissionsProvider } from "@/context/FormSubmissionsContext";

const Index = () => {
  return (
    <FormSubmissionsProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
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
    </FormSubmissionsProvider>
  );
};

export default Index;
