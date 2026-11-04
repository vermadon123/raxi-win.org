import { Smartphone, User, Gift, CheckCircle } from "lucide-react";

const RegistrationSteps = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Enter Mobile Number",
      description: "Provide your valid mobile number for verification",
      color: "gaming-orange"
    },
    {
      icon: User,
      title: "Fill Personal Details",
      description: "Enter your name and create a secure password",
      color: "gaming-blue"
    },
    {
      icon: Gift,
      title: "Add Invite Code",
      description: "Use code 62622134117 for extra ₹100 bonus",
      color: "gaming-yellow"
    },
    {
      icon: CheckCircle,
      title: "Start Playing",
      description: "Get ₹51 welcome bonus and start winning!",
      color: "gaming-purple"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
          How to Create Your Account
        </h2>
        <p className="text-muted-foreground">Follow these simple steps to join Raxi Win</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="gaming-card p-6 text-center group hover:scale-105 transition-all duration-300 relative">
            <div className="absolute inset-0 bg-gradient-gaming opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
            
            {/* Step Number */}
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-gaming rounded-full flex items-center justify-center text-white font-bold text-sm shadow-glow">
              {index + 1}
            </div>
            
            <div className="relative">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${step.color} to-${step.color} shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-gradient mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationSteps;