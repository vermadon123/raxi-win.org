import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqData = [
    {
      question: "What is Raxi Win?",
      answer:
        "Raxi Win is a mobile gaming lobby with WinGo colour rounds, K3, 5D, Aviator and similar tiles. Most people land here to register, complete Raxi Win login, or check how deposits and withdrawals work.",
    },
    {
      question: "How do I register on Raxi Win?",
      answer:
        "Use your own +91 number, set a password, add an invite code only if you have one, then enter the SMS OTP on the register screen. Full walkthrough: see the registration page on this site.",
    },
    {
      question: "How does Raxi Win login work?",
      answer:
        "Open login, keep +91, enter the same mobile number you used at signup, type your password, and tap Log in. If OTP is asked, use the latest SMS — never share it on Telegram or WhatsApp.",
    },
    {
      question: "Where do I get the Raxi Win invite code?",
      answer:
        "Invite code 62622134117 is listed in App Information on this site. Paste it only in the invite field during register if you want that referral path. The field is optional on many builds.",
    },
    {
      question: "How do I redeem a Raxi Win gift code?",
      answer:
        "After login: Account → Gifts → paste the code → Receive. History shows successfully received amounts. One code usually claims one gift; don’t pay a stranger just for a code.",
    },
    {
      question: "Is the Raxi Win APK safe to download?",
      answer:
        "Only install from a host you trust. Skip “hack” or “mod” APKs. Prefer the browser login if you’re unsure. Check permissions before allowing install from unknown sources.",
    },
    {
      question: "Which games can I play?",
      answer:
        "Common tiles include colour prediction / WinGo, K3 lotre, 5D, TRX hash-style rooms, Aviator and Chicken Road. Labels can change between app builds.",
    },
    {
      question: "How do deposits and withdrawals work?",
      answer:
        "Players usually top up with UPI options such as PhonePe or UPI-QR, plus rails like ArbPayINR or USDT on some hosts. Check Wallet → Deposit history after every payment. Withdrawal time depends on the method and account checks.",
    },
    {
      question: "I forgot my Raxi Win password — what now?",
      answer:
        "Use Forgot password on the login screen with your registered number and OTP, then set a new password. Don’t send OTP to anyone claiming to be support.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick answers on Raxi Win register, login, APK, gift codes and payments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="gaming-card p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/30 rounded-lg px-6 py-2 gaming-card"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-8 text-sm text-muted-foreground text-center">
              Need more detail?{" "}
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
              <a href="/#gift-code" className="text-primary font-medium hover:underline">
                Gift code
              </a>
              {" · "}
              <a href="/#payments" className="text-primary font-medium hover:underline">
                Payments
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
