import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-poppins text-4xl lg:text-5xl font-bold text-foreground">
            Contact{" "}
            <span className="text-primary">AgriVaani Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about AgriVaani? Need support with the app? 
            We're here to help farmers succeed with smart agricultural technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins text-2xl font-bold text-foreground mb-6">
                Reach Out to Us
              </h3>
              <p className="text-muted-foreground mb-8">
                Our dedicated support team is available to assist farmers and agricultural professionals. 
                We welcome feedback and are always looking to improve AgriVaani.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="border-border/50 hover:border-primary/20 smooth-transition">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">Email Support</h4>
                      <p className="text-muted-foreground">support@agrivaani.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-secondary/20 smooth-transition">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">Phone Support</h4>
                      <p className="text-muted-foreground">+91 9876543210</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-accent/20 smooth-transition">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">Office Location</h4>
                      <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Note */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h4 className="font-poppins font-semibold text-foreground mb-2">
                Frequently Asked Questions
              </h4>
              <p className="text-muted-foreground text-sm">
                Looking for quick answers? Check our FAQ section covering common questions about 
                app usage, supported crops, and troubleshooting tips.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="nature-shadow border-border/50">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl text-foreground">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  We value every farmer's feedback and inquiry.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-foreground font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-border focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-foreground font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your farming needs, questions, or feedback about AgriVaani..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-border focus:border-primary min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 smooth-transition"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll only use your information to respond to your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Support Options */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl p-8 md:p-12">
            <h3 className="font-poppins text-2xl font-bold text-foreground mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For urgent crop-related issues or technical support with the AgriVaani app, 
              our team is available to provide immediate assistance to farmers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Phone className="mr-2 w-5 h-5" />
                Call Support
              </Button>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <MessageCircle className="mr-2 w-5 h-5" />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;