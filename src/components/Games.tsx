import { Shield, Zap, Gift, Gamepad2, CreditCard, Headphones } from "lucide-react";

const Games = () => {
  const features = [
    {
      icon: Shield,
      title: "Unmatched Security",
      description: "Fully certified gaming network with 100% secure payment systems and total data protection.",
      details: ["Certified Gaming Network", "Secure Payment Systems", "Data Protection"]
    },
    {
      icon: Gift,
      title: "Exciting Bonuses & Rewards",
      description: "Join and get signup bonus, earn rewards with referral program, and welcome back bonuses.",
      details: ["Signup Bonus", "Referral Program", "Welcome Bonuses"]
    },
    {
      icon: Gamepad2,
      title: "Outstanding Gaming Experience",
      description: "Access a wide variety of games online with friendly competitive play and thrilling betting rounds.",
      details: ["Wide Game Variety", "Competitive Play", "Thrilling Betting"]
    },
    {
      icon: Zap,
      title: "Unlimited Gaming Opportunities",
      description: "Big wins and swift withdrawals await with unlimited earnings through missions and referrals.",
      details: ["Swift Withdrawals", "Mission Earnings", "Bonus Offers"]
    },
    {
      icon: CreditCard,
      title: "Trusted Payment Methods",
      description: "Multiple secure payment options including Paytm, UPI, PayU, and all major cards.",
      details: ["Multiple Options", "Instant Deposits", "Quick Withdrawals"]
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance with friendly support team ready to help you anytime.",
      details: ["24/7 Available", "Expert Support", "Quick Response"]
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-gaming opacity-10 floating-element"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-primary opacity-15 floating-element"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
            <Zap className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium">KEY FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why Choose <span className="text-gradient">Raxi Win</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover a world-class gaming experience with Raxi Win, where we prioritize your security, entertainment, and success. Enjoy every game with complete confidence on the most reliable platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gaming-card p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary shadow-3d flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Feature Details */}
              <div className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary mr-3"></div>
                    <span className="text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
