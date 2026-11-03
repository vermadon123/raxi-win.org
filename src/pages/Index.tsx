import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Games from "@/components/Games";
import OfferPosters from "@/components/OfferPosters";
import GiftCodeGuide from "@/components/GiftCodeGuide";
import PaymentsGuide from "@/components/PaymentsGuide";
import Bonuses from "@/components/Bonuses";
import AppInfo from "@/components/AppInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SeoHead
        path="/"
        title="Raxi Win Game — Login, Register, APK & Invite Code | raxiwin"
        description="Raxi Win login and register with mobile OTP, gift codes, UPI deposit tips, and WinGo colour prediction — clear steps for players in India."
        keywords="raxi win, raxiwin, raxi win login, raxi win register, raxi win apk, raxi win invite code, colour prediction, wingo"
      />
      <Header />
      <Hero />
      <Features />
      <Games />
      <OfferPosters />
      <GiftCodeGuide />
      <PaymentsGuide />
      <Bonuses />
      <AppInfo />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
