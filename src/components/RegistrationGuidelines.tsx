import { AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";

const RegistrationGuidelines = () => {
  const guidelines = [
    {
      type: "success",
      icon: CheckCircle,
      title: "Do's",
      items: [
        "Use your real name and mobile number",
        "Create a strong, unique password", 
        "Keep your login credentials secure",
        "Verify your mobile number immediately",
        "Use the invite code for extra bonus"
      ]
    },
    {
      type: "error", 
      icon: XCircle,
      title: "Don'ts",
      items: [
        "Don't create multiple accounts",
        "Don't share your account with others",
        "Don't use fake or invalid information",
        "Don't ignore verification messages",
        "Don't use weak passwords"
      ]
    },
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Important Notes",
      items: [
        "Must be 18+ years old to register",
        "One account per person policy",
        "Valid mobile number required",
        "Account verification is mandatory",
        "Bonus terms and conditions apply"
      ]
    },
    {
      type: "info",
      icon: Info,
      title: "Tips for Success",
      items: [
        "Use a valid mobile number for OTP",
        "Remember your password securely",
        "Complete profile for better experience",
        "Read terms and conditions",
        "Contact support if you need help"
      ]
    }
  ];

  const getColorClasses = (type: string) => {
    switch (type) {
      case "success":
        return "from-green-400 to-emerald-500 border-green-500/20";
      case "error":
        return "from-red-400 to-rose-500 border-red-500/20";
      case "warning":
        return "from-yellow-400 to-orange-500 border-yellow-500/20";
      case "info":
        return "from-blue-400 to-cyan-500 border-blue-500/20";
      default:
        return "from-gaming-orange to-gaming-yellow border-gaming-orange/20";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
          Registration Guidelines
        </h2>
        <p className="text-muted-foreground">Important rules and tips for successful registration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guidelines.map((guideline, index) => (
          <div key={index} className="gaming-card group hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-gaming opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            
            <div className="p-6 relative">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getColorClasses(guideline.type)} flex items-center justify-center shadow-glow`}>
                  <guideline.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gradient">{guideline.title}</h3>
              </div>

              {/* Guidelines List */}
              <ul className="space-y-3">
                {guideline.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${getColorClasses(guideline.type)} mt-2 flex-shrink-0 shadow-sm`}></div>
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationGuidelines;