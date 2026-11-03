import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from '/assets/raxi-win-logo.png';

const Footer = () => {
  const footerLinks = {
    "Navigation": [
      { name: "Home", href: "#home" },
      { name: "Features", href: "#features" },
      { name: "Games", href: "#games" },
      { name: "Bonuses", href: "#bonuses" }
    ],
    "Games": [
      { name: "Colour Prediction", href: "#games" },
      { name: "Wingo Game", href: "#games" },
      { name: "K3 Lotre", href: "#games" },
      { name: "5D Lotre", href: "#games" },
      { name: "TRX Hash", href: "#games" },
      { name: "Aviator", href: "#games" }
    ],
    "Pages": [
      { name: "About", href: "/about" },
      { name: "Terms & Conditions", href: "/terms" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="relative overflow-hidden pt-20 pb-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/50"></div>
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-primary opacity-5 floating-element"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-gradient-gaming opacity-10 floating-element"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* App Download Section */}
        <div className="gaming-card p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Download the <span className="text-gradient">Raxi Win App</span> Now
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get the best gaming experience on your mobile device. Play, Win & Earn anywhere, anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.raxi12.com/#/register?invitationCode=18913432260" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="flex-1">
                    <Download className="w-5 h-5 mr-2" />
                    Download for Android
                  </Button>
                </a>
                <a href="https://www.raxi12.com/#/register?invitationCode=18913432260" target="_blank" rel="noopener noreferrer">
                  <Button variant="glass" size="lg" className="flex-1">
                    <Download className="w-5 h-5 mr-2" />
                    Download for iOS
                  </Button>
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="gaming-card p-6">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="text-2xl font-bold text-gradient mb-1">50K+</div>
                  <div className="text-sm text-muted-foreground">App Downloads</div>
                </div>
                <div className="gaming-card p-6">
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="text-2xl font-bold text-gradient mb-1">4.8</div>
                  <div className="text-sm text-muted-foreground">App Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Raxi Win"
                className="h-14 md:h-16 w-auto max-w-[220px] object-contain"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Raxi Win is the premier online gaming platform in India, offering a thrilling selection of games, including the popular Raxi Win colour prediction game. Join thousands of players and enjoy a secure, entertaining, and rewarding experience.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-muted-foreground">Follow us:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-xl glass-effect flex items-center justify-center hover:scale-110 transition-transform group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            © 2026 Raxi Win. All rights reserved. Play responsibly.
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 glass-effect rounded-xl">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Disclaimer:</strong> This is a game of skill and chance. Please play responsibly. 
            Users must be 18+ years old to participate. Gambling can be addictive - know your limits.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
