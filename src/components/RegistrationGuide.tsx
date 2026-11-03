import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import raxiloginstep1 from '/assets/raxi-win-loginstep1.webp';
import raxiloginstep2 from '/assets/raxi-win-loginstep2.webp';
import raxiloginstep3 from '/assets/raxi-win-loginstep3.webp';
import raxiloginstep4 from '/assets/raxi-win-loginstep4.webp';
import raxiloginstep5 from '/assets/raxi-win-loginstep5.webp';

const RegistrationGuide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visionData = [
    {
      title: "Step 1: Access the Official Website",
      description: "Open your preferred web browser and navigate to raxi-win.org. Click on the “Register” button located on the homepage to begin the sign-up process. You will be redirected to the registration page.",
      image: raxiloginstep1
    },
    {
      title: "Step 2: Enter Your Details",
      description: "Provide your mobile number in the designated field. Create a strong password and confirm it by entering it again. Read and agree to the Privacy Policy by checking the corresponding box. Click “Register” to proceed.",
      image: raxiloginstep2
    },
    {
      title: "Step 3: Review Your Information",
      description: "Before continuing, ensure all required fields are correctly filled: Mobile Number, Password and Confirm Password, Invite Code: 18913432260. Carefully verify your details to avoid any issues during registration.",
      image: raxiloginstep3
    },
    {
      title: "Step 4: Verify Your Identity",
      description: "Complete the verification prompt, such as sliding a puzzle piece or performing a quick CAPTCHA action. Once verified, you’ll automatically proceed to the final step of the process.",
      image: raxiloginstep4
    },
    {
      title: "Step 5: Log In and Start Playing",
      description: "Upon successful registration, you’ll be redirected to the login screen. Enter your mobile number and password to access your account. You’re now ready to explore games, make deposits, and enjoy the full Raxi Win experience.",
      image: raxiloginstep5
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % visionData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + visionData.length) % visionData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);


  const currentItem = visionData[currentIndex];

  return (
    <section className="py-20 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Registration Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our simple step-by-step guide to create your account and start playing.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8 lg:order-1 order-2">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient leading-tight">
                {currentItem.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentItem.description}
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border-accent/30 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border-accent/30 hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center space-x-2">
                {visionData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-accent scale-110' 
                        : 'bg-accent/30 hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 lg:order-2 order-1">
            <img 
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationGuide;
