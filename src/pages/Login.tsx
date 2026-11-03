import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginGuide from "@/components/LoginGuide";
import { SeoHead } from "@/components/SeoHead";

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        path="/login"
        title="Raxi Win Login — Phone Number, Password & OTP Fix"
        description="Raxi Win login with your +91 number and password. Fix OTP delays, recover a forgotten password, and avoid fake login pages."
        keywords="raxi win login, raxiwin login, raxi win sign in, raxi win forgot password, raxiwin game login"
      />
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient">Raxi Win Login</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sign in with your registered mobile number — step-by-step, OTP fixes, and forgot password.
          </p>
        </div>
        <LoginGuide />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
