import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-poppins font-bold text-xl">AgriVaani</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering rural farmers with AI-powered crop disease diagnosis and smart farming solutions. 
              Building a sustainable agricultural future for India.
            </p>
            <div className="text-primary-foreground/60 text-sm">
              <p>The Smart Farm Revolution</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Demo
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  User Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent smooth-transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">support@agrivaani.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} AgriVaani. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-primary-foreground/60 text-sm">
              <span>Built with ❤️ for Indian farmers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;