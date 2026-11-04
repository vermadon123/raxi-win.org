import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    "/assets/raxi-win-registration-tutorial1.webp",
    "/assets/raxi-win-registration-tutorial2.webp", 
    "/assets/raxi-win-registration-tutorial3.webp"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-scroll-reveal">
            <span className="text-gradient">Raxi Win</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-6 animate-scroll-reveal">
            Login, register & play on mobile
          </p>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-scroll-reveal">
            Open a Raxi Win account with your mobile number, sign in when you come back, and play WinGo, colour prediction, K3 and Aviator from one lobby. Invite code, gift codes and UPI deposits are covered below.
          </p>

          {/* Registration Tutorial Carousel */}
          <div className="mb-16">
            {/* Carousel Container */}
            <div className="relative w-full max-w-3xl mx-auto">
              {/* Main Carousel */}
              <div className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-video bg-muted/30">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 group ${
                      index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Registration Step ${index + 1}`}
                      width={1280}
                      height={720}
                      decoding="async"
                      fetchPriority={index === 0 ? "high" : "low"}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                ))}
              </div>

              {/* Simple Dots Indicator below image */}
              <div className="mt-3 flex justify-center space-x-2" role="tablist" aria-label="Registration steps">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-label={`Show registration step ${index + 1}`}
                    aria-selected={index === currentSlide}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-gradient-primary scale-110 shadow-glow"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons with enhanced 3D */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-scroll-reveal">
            <a href="https://www.raxi888.com/#/register?invitationCode=62622134117" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group shadow-[0_12px_24px_hsl(var(--gaming-orange)_/_0.4),0_6px_12px_hsl(var(--gaming-orange)_/_0.3),inset_0_1px_0_hsl(0_0%_100%_/_0.3),inset_0_-1px_0_hsl(0_0%_0%_/_0.2)] transform hover:scale-105 hover:shadow-glow hover:-translate-y-2 transition-all duration-500">
                <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                Raxi Win Register
              </Button>
            </a>
            <Link to="/login">
              <Button variant="outline" size="xl" className="border-2">
                Raxi Win Login
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm md:text-base text-muted-foreground animate-scroll-reveal">
            Guides:{" "}
            <Link to="/registration" className="text-primary font-medium hover:underline">
              Register
            </Link>
            {" · "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Login
            </Link>
            {" · "}
            <Link to="/apk" className="text-primary font-medium hover:underline">
              APK
            </Link>
            {" · "}
            <a href="#gift-code" className="text-primary font-medium hover:underline">
              Gift code
            </a>
            {" · "}
            <a href="#payments" className="text-primary font-medium hover:underline">
              Payments
            </a>
          </p>
        </div>
      </div>

      {/* 3D Hero Element */}
      <div
        ref={heroRef}
        className="absolute inset-0 pointer-events-none transition-transform duration-200 ease-out"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 rounded-full bg-gradient-primary opacity-5 blur-3xl animate-pulse-glow shadow-floating"></div>
        </div>
      </div>

      {/* Scroll Indicator with 3D effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1 shadow-[0_4px_12px_hsl(var(--gaming-orange)_/_0.3),inset_0_1px_0_hsl(0_0%_100%_/_0.2)] bg-white/5 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse shadow-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
