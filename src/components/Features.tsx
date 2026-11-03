import { Shield, Zap, Gift, Gamepad2, CreditCard, Headphones } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import Mentors from "@/components/Mentors";

const Features = () => {
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
    <>
    <section id="games" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-gaming opacity-5 floating-element"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-primary opacity-10 floating-element"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
            <Gamepad2 className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium">GAME SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Raxi Win <span className="text-gradient">games</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            WinGo and colour prediction, K3, 5D, Aviator, TRX-style rooms and Chicken Road — the tiles most people open after login.
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Chicken Road Game",
              description: "Embark on an exciting adventure with Chicken Road Game! Navigate through challenging obstacles and collect rewards in this thrilling mobile gaming experience.",
              image: "/assets/raxi-win-chiken-road-game.webp"
            },
            {
              name: "Colour Prediction Game",
              description: "Test your instincts in this popular game by predicting the next color. Simple yet exciting, this game keeps you on the edge of your seat with every round.",
              image: "/assets/raxi-win-colour-prediction-game.webp"
            },
            {
              name: "Wingo Game",
              description: "A fun and fast-paced game where luck and strategy combine. Wingo offers engaging gameplay with multiple chances to win big.",
              image: "/assets/raxi-win-wingo-game.webp"
            },
            {
              name: "K3 Lotre",
              description: "Enter the world of lottery gaming with K3 Lotre, where you choose numbers and wait for your luck to shine. Perfect for lottery enthusiasts.",
              image: "/assets/raxi-win-K3-lotre-game.webp"
            },
            {
              name: "5D Lotre",
              description: "A step up from traditional lotteries, 5D Lotre adds more excitement by allowing players to select five numbers, giving you even more ways to win.",
              image: "/assets/raxi-win-5D-lottery.webp"
            },
            {
              name: "TRX Hash Game",
              description: "A unique and modern gaming experience based on blockchain technology. In TRX Hash Game, players place bets on hash values, combining technology with thrilling gameplay.",
              image: "/assets/raxi-win-Trx-hash-game.webp"
            },
            {
              name: "Aviator Game",
              description: "Watch the plane take off and cash out before it flies away. Aviator delivers high-adrenaline multiplier action with every round.",
              image: "/assets/raxi-win-aviator-game.webp"
            }
          ].map((game, index) => (
            <div
              key={index}
              className="gaming-card p-6 group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Game Image with Hover Effect */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Game Info Below Image */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3 text-gradient">{game.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="gaming-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Become a <span className="text-gradient">Raxi Win Agent</span> Today!
            </h3>
            <p className="text-muted-foreground mb-6">
              Interested in a partnership? Contact us to learn more about the Raxi Win agent program and start earning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/Newtrustedplateform"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Raxi Win agent program on Telegram"
              >
                <button className="glass-effect px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <FaTelegramPlane className="mr-2" />
                  Raxi Win agent Telegram
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Mentors />
    </>
  );
};

export default Features;
