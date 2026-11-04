import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, User, Lock, Eye, EyeOff, Gift } from "lucide-react";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    password: "",
    confirmPassword: "",
    inviteCode: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="gaming-card p-8 space-y-8 relative group max-w-md mx-auto">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-gaming opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
      
      {/* Header */}
      <div className="text-center space-y-4 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-gaming shadow-[0_12px_30px_hsl(var(--gaming-orange)_/_0.4),0_6px_15px_hsl(var(--gaming-orange)_/_0.3),inset_0_2px_4px_rgba(255,255,255,0.3)] floating-element">
          <Gift className="w-10 h-10 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gradient">Join Raxi Win</h2>
          <p className="text-muted-foreground">Get ₹51 bonus instantly!</p>
        </div>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        {/* Mobile Number Field */}
        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-sm font-medium text-foreground flex items-center">
            <Smartphone className="w-4 h-4 mr-2 text-gaming-orange" />
            Mobile Number *
          </Label>
          <div className="relative">
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleInputChange}
              className="gaming-card border-0 pl-12 h-12 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.15)] transition-all duration-300"
              required
            />
            <Smartphone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gaming-orange" />
          </div>
        </div>

        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-foreground flex items-center">
            <User className="w-4 h-4 mr-2 text-gaming-blue" />
            Full Name *
          </Label>
          <div className="relative">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              className="gaming-card border-0 pl-12 h-12 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.15)] transition-all duration-300"
              required
            />
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gaming-blue" />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-foreground flex items-center">
            <Lock className="w-4 h-4 mr-2 text-gaming-purple" />
            Password *
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
              className="gaming-card border-0 pl-12 pr-12 h-12 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.15)] transition-all duration-300"
              required
            />
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gaming-purple" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Invite Code Field */}
        <div className="space-y-2">
          <Label htmlFor="inviteCode" className="text-sm font-medium text-foreground flex items-center">
            <Gift className="w-4 h-4 mr-2 text-gaming-yellow" />
            Invite Code (Optional)
          </Label>
          <div className="relative">
            <Input
              id="inviteCode"
              name="inviteCode"
              type="text"
              placeholder="62622134117"
              value={formData.inviteCode}
              onChange={handleInputChange}
              className="gaming-card border-0 pl-12 h-12 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.15)] transition-all duration-300"
            />
            <Gift className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gaming-yellow" />
          </div>
          <p className="text-xs text-gaming-yellow">Use invite code for extra ₹100 bonus!</p>
        </div>

        {/* Register Button */}
        <Button 
          type="submit" 
          variant="hero" 
          size="xl" 
          className="w-full h-14 text-lg shadow-[0_12px_24px_hsl(var(--gaming-orange)_/_0.4),0_6px_12px_hsl(var(--gaming-orange)_/_0.3),inset_0_1px_0_hsl(0_0%_100%_/_0.3),inset_0_-1px_0_hsl(0_0%_0%_/_0.2)] hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
        >
          Create Account & Get ₹51
        </Button>
      </form>

      {/* Terms */}
      <div className="text-center text-xs text-muted-foreground relative z-10">
        By creating an account, you agree to our{" "}
        <span className="text-gaming-orange">Terms & Conditions</span> and{" "}
        <span className="text-gaming-orange">Privacy Policy</span>
      </div>
    </div>
  );
};

export default RegistrationForm;