import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Smartphone, Camera, CheckCircle } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";
import farmerHands from "@/assets/farmer-hands.jpg";

const DemoSection = () => {
  const demoSteps = [
    {
      step: "1",
      title: "Capture Photo",
      description: "Take a clear picture of the affected plant or crop using your smartphone camera.",
      icon: Camera
    },
    {
      step: "2", 
      title: "AI Analysis",
      description: "Our AI instantly analyzes the image to detect diseases, pests, or nutrient deficiencies.",
      icon: Smartphone
    },
    {
      step: "3",
      title: "Get Solutions",
      description: "Receive detailed treatment recommendations with both organic and chemical options.",
      icon: CheckCircle
    }
  ];

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <Play className="w-4 h-4" />
            <span>Interactive Demo</span>
          </div>
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-foreground">
            See AgriVaani{" "}
            <span className="text-primary">In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how easy it is to diagnose crop diseases and get instant solutions. 
            Our simple 3-step process makes advanced agricultural technology accessible to everyone.
          </p>
        </div>

        {/* Demo Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {demoSteps.map((step, index) => (
            <Card key={index} className="text-center group hover:shadow-lg smooth-transition">
              <CardContent className="p-8 space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 smooth-transition">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-poppins text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* App Mockups Demo */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - App Mockup */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl nature-shadow">
              <img 
                src={appMockup} 
                alt="AgriVaani mobile app interface showing crop disease diagnosis features"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Demo Badge */}
              <div className="absolute top-6 left-6 bg-accent/90 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                  <Play className="w-4 h-4 text-accent-foreground" />
                  <span className="text-accent-foreground font-medium text-sm">Live Demo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Demo Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-poppins text-3xl font-bold text-foreground">
                Experience the Power of AI
              </h3>
              <p className="text-lg text-muted-foreground">
                Our intuitive interface makes crop diagnosis as simple as taking a photo. 
                The app works seamlessly across different devices and provides results in both Telugu and English.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">
                  Instant disease detection with 95% accuracy
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">
                  Bilingual support for Telugu and English speakers
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">
                  Detailed treatment recommendations with alternatives
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground text-xs">✓</span>
                </div>
                <span className="text-muted-foreground">
                  Works offline in remote farming areas
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Play className="mr-2 w-5 h-5" />
                Try Interactive Demo
              </Button>
              <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                Download App
              </Button>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-6">
              <h4 className="font-poppins text-2xl font-bold text-foreground">
                "AgriVaani saved my cotton crop!"
              </h4>
              <p className="text-muted-foreground text-lg">
                "I was able to detect early signs of bollworm infestation using AgriVaani. 
                The app suggested organic treatment options that not only saved my crop but also 
                reduced my pesticide costs by 40%. The Telugu language support made it so easy to understand."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">RK</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">Ramesh Kumar</div>
                  <div className="text-sm text-muted-foreground">Cotton Farmer, Telangana</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={farmerHands} 
                alt="Farmer hands carefully holding healthy green plant"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;