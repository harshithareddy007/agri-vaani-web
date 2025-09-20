import { Camera, Globe, Droplets, Volume2, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Camera,
      title: "Photo-Based Diagnosis",
      description: "Snap a photo of your crop and get instant AI-powered disease detection with 95% accuracy rate.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Bilingual Support",
      description: "Available in Telugu and English to serve rural farming communities across India effectively.",
      color: "text-secondary"
    },
    {
      icon: Droplets,
      title: "Smart Pesticide Recommendations",
      description: "Get personalized organic and chemical solution suggestions based on your crop's specific needs.",
      color: "text-accent"
    },
    {
      icon: Volume2,
      title: "Audio Guidance",
      description: "Listen to clear, step-by-step instructions in your preferred language for easy understanding.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Preventive Care Tips",
      description: "Receive proactive farming advice to prevent diseases before they affect your crop yield.",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Real-Time Results",
      description: "Get instant diagnosis and treatment recommendations within seconds of capturing the image.",
      color: "text-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>Smart Agriculture Technology</span>
          </div>
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-foreground">
            Powerful Features for{" "}
            <span className="text-primary">Modern Farming</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AgriVaani combines cutting-edge AI technology with deep agricultural knowledge 
            to provide farmers with the tools they need for successful crop management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg smooth-transition border-border/50 hover:border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className={`w-14 h-14 ${feature.color} bg-current/10 rounded-2xl flex items-center justify-center group-hover:scale-110 smooth-transition`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-poppins text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="font-poppins text-3xl font-bold text-foreground">
                Why Choose AgriVaani?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Offline Capability:</strong> Works without internet connectivity in remote areas
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Local Expertise:</strong> Built by agricultural experts familiar with Indian farming
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs">✓</span>
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Continuous Learning:</strong> AI model improves with every diagnosis
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 rounded-2xl p-6 nature-shadow">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto golden-glow">
                  <Camera className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="font-poppins text-xl font-semibold text-foreground">
                  Start Diagnosing Today
                </h4>
                <p className="text-muted-foreground text-sm">
                  Join thousands of farmers already using AgriVaani to protect their crops
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;