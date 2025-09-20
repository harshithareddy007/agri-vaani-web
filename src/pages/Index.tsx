import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
