import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gamepad2, Shield, Zap, Gift, Users } from "lucide-react";
import Header from "@/components/Header";
import { SeoHead } from "@/components/SeoHead";

const AboutUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Login & Quick Register",
      description: "Top-level security with fast registration and reliable Raxi Win login processes."
    },
    {
      icon: Zap,
      title: "Fast Withdrawals & Instant Deposits",
      description: "Quick financial transactions with secure payment gateways."
    },
    {
      icon: Gift,
      title: "Daily Rewards & Gift Codes",
      description: "Exciting daily bonuses, invite codes, and special rewards for players."
    },
    {
      icon: Users,
      title: "Responsive Support",
      description: "24/7 customer support with easy-to-use app interface across all devices."
    }
  ];

  const games = [
    {
      title: "Raxi Win Lottery",
      description: "Exciting lottery games with daily draws and big winning opportunities.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Color Prediction",
      description: "Test your prediction skills with our popular color prediction games.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "Casino-Style Games",
      description: "Professional casino experience with various game formats.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Skill-Based Challenges",
      description: "Challenge yourself with games that reward skill and strategy.",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <SeoHead
        path="/about"
        title="About Raxi Win — Games, Security & Platform Overview"
        description="About Raxi Win: colour prediction, WinGo, K3, withdrawals and how the platform works for players in India."
        keywords="about raxi win, raxiwin information, raxi win details, raxi win lottery, raxiwin game info"
      />
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-orange-500/5 to-blue-500/10" />
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full opacity-20 blur-xl" />
        <div className="floating-element absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">About</span> Raxi Win
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Raxi Win is a colour-prediction and WinGo-style lobby for India — register with mobile OTP,
            login when you return, and use UPI for deposits when you’re ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.raxi12.com/#/register?invitationCode=18913432260" target="_blank" rel="noopener noreferrer">
              <Button className="gaming-button">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Start Playing Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Raxi Win Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-entering">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                About Raxi Win
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Players usually search Raxi Win for login help, a clean register path, or APK download tips.
                The lobby mixes colour prediction, lottery-style rooms and crash games like Aviator.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                This website explains those steps with screenshots. We don’t ask for your OTP or password here —
                register and login buttons open the live host. Play only if you’re 18+ and set a spend limit first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Raxi Win Offers Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-background via-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              What Raxi Win Offers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience a diverse range of gaming formats designed for both entertainment and rewards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {games.map((game, index) => (
              <Card key={index} className="gaming-card p-6 text-center group transform-gpu hover:shadow-3d transition-all duration-500 hover:-translate-y-3 hover:scale-105">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${game.gradient} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                  <Gamepad2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                <p className="text-sm text-muted-foreground">{game.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Users can easily access their accounts via Raxi Win login, and explore 
              multiple versions of the platform, whether it's through the Raxi Win APK, Raxi Win app, or 
              direct Raxi Win game download.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            Vision
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            The vision is to become India's most reliable and innovative gaming platform, trusted by 
            millions for both fun and fair play. From simple Raxi Win login processes to secure app downloads, 
            Raxi Win is dedicated to creating a smooth and safe experience for every user.
          </p>
          <Card className="gaming-card p-8 max-w-4xl mx-auto transform-gpu hover:shadow-3d transition-all duration-500 hover:-translate-y-2 hover:scale-102">
            <p className="text-lg text-muted-foreground">
              Raxi Win constantly upgrades the system, security, and gameplay—whether it's optimizing the Raxi Win login app 
              or adding new modes and gift code promotions. Growth is powered 
              by trust, and Raxi Win is committed to maintaining transparency at every level.
            </p>
          </Card>
        </div>
      </section>

      {/* Why Choose Raxi Win Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-background via-accent/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Why Choose Raxi Win?
            </h2>
            <p className="text-xl text-muted-foreground">
              Raxi Win believes gaming should be fun, fair, and rewarding
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="gaming-card p-6 text-center group transform-gpu hover:shadow-3d transition-all duration-500 hover:-translate-y-4 hover:scale-105 hover:rotate-1">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Play Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Play?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your journey now! Simply register, login to Raxi Win, download the latest APK, 
            and dive into the action.
          </p>
          <div className="flex justify-center">
            <a href="https://www.raxi12.com/#/register?invitationCode=18913432260" target="_blank" rel="noopener noreferrer">
              <Button className="gaming-button text-lg px-12 py-6">
                <Gamepad2 className="mr-2 h-6 w-6" />
                Start Playing Today
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
