import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const HeroSection = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Leaf className="w-6 h-6" />
                <span className="font-medium">The Smart Farm Revolution</span>
              </div>
              <h1 className="font-poppins text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Welcome to{" "}
                <span className="text-primary">AgriVaani</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Empowering rural farmers with AI-powered crop disease diagnosis. 
                Simply snap a photo and get instant, bilingual guidance for healthier crops.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToFeatures}
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 golden-glow text-lg px-8 py-6 font-medium"
              >
                Explore Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                Try Demo
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="font-poppins text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="font-poppins text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Farmers Helped</div>
              </div>
              <div className="text-center">
                <div className="font-poppins text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl nature-shadow">
              <img 
                src={heroImage} 
                alt="Modern farming with smartphone technology in lush green fields"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-foreground">Crop Diagnosed</div>
                    <div className="text-sm text-muted-foreground">Disease detected in 2.3 seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;