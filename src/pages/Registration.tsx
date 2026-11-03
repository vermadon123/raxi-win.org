import RegistrationGuide from "@/components/RegistrationGuide";
import RegistrationGuidelines from "@/components/RegistrationGuidelines";
import RegistrationSteps from "@/components/RegistrationSteps";
import RegistrationVisualGuide from "@/components/RegistrationVisualGuide";
import RegisterGuideProse from "@/components/RegisterGuideProse";
import { Sparkles, Star, Trophy, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SeoHead } from "@/components/SeoHead";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SeoHead
        path="/registration"
        title="Raxi Win Register — Mobile Signup, OTP & Invite Code"
        description="Raxi Win register guide: +91 mobile, password, OTP and invite code. Fix SMS delays and spot fake signup links."
        keywords="raxi win register, raxiwin registration, raxi win signup, create raxiwin account, raxi win game register"
      />
      <Header />
      {/* Stunning 3D Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-gaming-purple via-gaming-blue to-gaming-orange rounded-full opacity-20 floating-element blur-xl shadow-[0_0_100px_hsl(var(--gaming-purple))]"></div>
        <div className="absolute top-1/3 left-20 w-24 h-24 bg-gradient-to-br from-gaming-orange via-gaming-yellow to-gaming-purple rounded-2xl opacity-30 floating-element blur-lg shadow-[0_0_80px_hsl(var(--gaming-orange))] transform rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-40 h-40 bg-gradient-to-br from-gaming-blue via-gaming-purple to-gaming-orange rounded-full opacity-15 floating-element blur-2xl shadow-[0_0_120px_hsl(var(--gaming-blue))]"></div>
        <div className="absolute bottom-20 left-10 w-28 h-28 bg-gradient-to-br from-gaming-yellow via-gaming-orange to-gaming-purple rounded-3xl opacity-25 floating-element blur-xl shadow-[0_0_90px_hsl(var(--gaming-yellow))] transform -rotate-12"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-40 left-1/4 floating-element">
          <div className="w-16 h-16 bg-gradient-to-br from-gaming-purple to-gaming-blue rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-700">
            <Star className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-1/3 right-20 floating-element">
          <div className="w-20 h-20 bg-gradient-to-br from-gaming-orange to-gaming-yellow rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-all duration-700">
            <Trophy className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 space-y-20 relative z-10 pt-32">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="space-y-6">
            {/* 3D Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full mb-8 animate-scroll-reveal shadow-[0_8px_20px_hsl(0_0%_0%_/_0.1),0_4px_10px_hsl(0_0%_0%_/_0.05),inset_0_1px_0_hsl(0_0%_100%_/_0.2)] backdrop-blur-20 bg-white/10 border border-white/20">
              <Sparkles className="w-4 h-4 text-gaming-orange mr-2" />
              <span className="text-sm font-medium text-gradient">JOIN THE WINNERS CIRCLE</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gradient floating-element">
              Raxi Win Register
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gaming-orange">
              Mobile number, password, OTP & invite code
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              New players create a Raxi Win account with a +91 mobile number, a unique password, and SMS OTP.
              Add an invite code only if you have one. After signup, use the same number for Raxi Win login.
              Screenshots below show the usual field order — your OTP stays on the live register screen, not on this website.
            </p>
          </div>
        </section>

        <section>
          <RegisterGuideProse />
        </section>

        {/* Registration Guide Section */}
        <section>
          <RegistrationGuide />
        </section>

        {/* 1. How to Create Your Account - Steps Section */}
        <section className="gaming-card p-8">
          <RegistrationSteps />
        </section>

        {/* 2. Images - Visual Guide Section */}
        <section className="gaming-card p-8">
          <RegistrationVisualGuide />
        </section>

        {/* 3. Guidelines Section */}
        <section className="gaming-card p-8">
          <RegistrationGuidelines />
        </section>

        {/* 4. FAQ Section */}
        <section className="gaming-card p-8 space-y-12">
          <div className="text-center space-y-6">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                raxiwin Registration FAQs
              </h2>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-gaming rounded-full opacity-60"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find quick answers to common questions about the raxi win game login and registration process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="gaming-card group relative overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-orange/10 via-transparent to-gaming-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gaming rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">?</span>
                  </div>
                  <h3 className="text-xl font-bold text-gradient">
                    Who is eligible for a raxiwin account?
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  Any individual aged 18 or above, who has not yet registered, is invited to join the Raxi Win gaming community and enjoy our diverse raxiwin game selection.
                </p>
              </div>
            </div>

            <div className="gaming-card group relative overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-purple/10 via-transparent to-gaming-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gaming rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">₹</span>
                  </div>
                  <h3 className="text-xl font-bold text-gradient">
                    Is the Raxi Win register process free?
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  Absolutely! Your Raxi Win registration is completely free. While some exclusive events may have entry fees, creating your account costs nothing.
                </p>
              </div>
            </div>

            <div className="gaming-card group relative overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-orange/10 via-transparent to-gaming-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gaming rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gradient">
                    Can I have multiple Raxi Win login accounts?
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  To ensure fair play, each user is limited to a single account. Attempting to create multiple accounts for the raxiwin game may lead to suspension.
                </p>
              </div>
            </div>

            <div className="gaming-card group relative overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-purple/10 via-transparent to-gaming-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gaming rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold text-gradient">
                    Is my information secure with Raxi Win?
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  Yes, your privacy is our priority. We employ advanced security protocols to safeguard your data, ensuring your raxiwin login and personal details are always protected.
                </p>
              </div>
            </div>

            <div className="gaming-card group relative overflow-hidden lg:col-span-2 hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-gaming opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative p-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gaming rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gradient">
                    How fast is the Raxi Win register process?
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  The Raxi Win register process is designed to be quick and efficient, taking less than two minutes. Once you complete the form and verify your mobile, you're all set for your first raxiwin game login!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="text-center space-y-6">
          <div className="gaming-card p-8 max-w-2xl mx-auto group hover:scale-105 transition-all duration-300 relative">
            <div className="absolute inset-0 bg-gradient-gaming opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold text-gradient mb-4">Next steps</h2>
              <p className="text-muted-foreground mb-6">
                After register, bookmark the host and try{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Raxi Win login
                </Link>
                . For installs, read the{" "}
                <Link to="/apk" className="text-primary font-medium hover:underline">
                  APK checklist
                </Link>{" "}
                before sideloading.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/login">
                  <Button variant="hero" size="lg">
                    Login guide
                  </Button>
                </Link>
                <a href="https://t.me/Newtrustedplateform" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Telegram
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
