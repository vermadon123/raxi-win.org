import { Image, Play, Shield, Star } from "lucide-react";

const RegistrationVisualGuide = () => {
  const features = [
    {
      icon: Image,
      title: "Visual Registration Guide",
      description: "Step-by-step screenshots showing the registration process"
    },
    {
      icon: Play,
      title: "Video Tutorial",
      description: "Watch our quick video guide for easy registration"
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Your data is protected with industry-standard encryption"
    },
    {
      icon: Star,
      title: "Instant Bonus",
      description: "Get ₹51 welcome bonus immediately after registration"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
          Visual Registration Guide
        </h2>
        <p className="text-muted-foreground">See how easy it is to get started</p>
      </div>

      {/* Placeholder for images - you can replace this with actual screenshots */}
      <div className="gaming-card p-8 text-center group hover:scale-105 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-gaming opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-gaming rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.3),inset_0_3px_6px_rgba(255,255,255,0.3)]">
            <Image className="w-16 h-16 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gradient mb-3">Registration Screenshots</h3>
          <p className="text-muted-foreground mb-6">
            Detailed visual guide with screenshots of each registration step will be available here.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="gaming-card p-4 group hover:scale-105 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-gaming-orange mx-auto mb-2" />
                <h4 className="text-sm font-semibold text-gradient mb-1">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationVisualGuide;
