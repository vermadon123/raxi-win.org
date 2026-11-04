import { Gift, UserPlus, Calendar, Video, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Bonuses = () => {
  const bonuses = [
    {
      icon: Gift,
      title: "Welcome Offer",
      description: "Get rewarded for joining Raxi Win",
      amount: "₹500",
      details: "Instant bonus on registration",
      bgGradient: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "First Deposit Bonus",
      description: "Extra value on your first top-up",
      amount: "100%",
      details: "Double your first deposit",
      bgGradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "Daily Login Rewards",
      description: "Earn rewards by logging in daily",
      amount: "₹50",
      details: "Every day for 30 days",
      bgGradient: "from-purple-500 to-violet-500"
    },
    {
      icon: UserPlus,
      title: "Referral Program",
      description: "Invite friends and receive bonuses",
      amount: "70%",
      details: "Commission on referrals",
      bgGradient: "from-orange-500 to-red-500"
    },
    {
      icon: Video,
      title: "Video Rewards",
      description: "Watch promotional content to earn extra credits",
      amount: "₹25",
      details: "Per video watched",
      bgGradient: "from-pink-500 to-rose-500"
    }
  ];

  const paymentMethods = [
    { name: "Paytm", logo: "📱" },
    { name: "PayU", logo: "💳" },
    { name: "RuPay", logo: "🏦" },
    { name: "UPI", logo: "📲" },
    { name: "PhonePe", logo: "📞" },
    { name: "MasterCard", logo: "💎" }
  ];

  return (
    <section id="bonuses" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-gradient-gaming opacity-10 floating-element"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-gradient-primary opacity-15 floating-element"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
            <Gift className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium">REWARDS & BONUSES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Bonuses on <span className="text-gradient">Raxi Win</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome offers, first deposit match, daily check-in and referral rewards — check live terms after login before you recharge.
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="gaming-card p-8 group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with Gradient Background */}
              <div className="relative mb-6 mx-auto">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${bonus.bgGradient} shadow-3d flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <bonus.icon className="w-10 h-10 text-white" />
                </div>
                <div className={`absolute -inset-2 bg-gradient-to-r ${bonus.bgGradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Bonus Amount */}
              <div className="text-4xl font-bold text-gradient mb-4">{bonus.amount}</div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {bonus.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {bonus.description}
              </p>
              <p className="text-sm text-accent font-medium">
                {bonus.details}
              </p>

              {/* Claim Button */}
              <Button variant="glass" className="w-full mt-6 group-hover:scale-105 transition-transform">
                Claim Now
              </Button>
            </div>
          ))}
        </div>

        {/* Earning Potential Section */}
        <div className="gaming-card p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Earning Potential with <span className="text-gradient">Raxi Win Game</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary shadow-3d flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Tournaments</h4>
                    <p className="text-muted-foreground">Compete for real cash prizes in daily tournaments and special events.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-gaming shadow-3d flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">In-Game Rewards</h4>
                    <p className="text-muted-foreground">Earn money while playing featured Raxi Win games with various reward opportunities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Earning Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Daily Earnings", value: "₹1000+", icon: "💰" },
                { label: "Weekly Bonus", value: "₹5000+", icon: "🎁" },
                { label: "Monthly Rewards", value: "₹25000+", icon: "🏆" },
                { label: "Referral Income", value: "₹10000+", icon: "👥" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 glass-effect rounded-xl">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Withdrawal Partners</h3>
          <div className="gaming-card p-8">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl glass-effect flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform text-2xl">
                    {method.logo}
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {method.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center mt-16">
          <div className="gaming-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Join the Raxi Win referral program and earn up to <span className="text-gradient">70% commission</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Start earning today with the generous Raxi Win referral program and bonus structure.
            </p>
            <a href="https://www.raxi888.com/#/register?invitationCode=62622134117" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                Start Earning Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
