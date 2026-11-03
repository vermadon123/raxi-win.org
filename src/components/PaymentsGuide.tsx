import { CreditCard } from "lucide-react";

const PaymentsGuide = () => {
  return (
    <section id="payments" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-primary opacity-10 floating-element" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
            <CreditCard className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium">PAYMENTS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Raxi Win deposit & <span className="text-gradient">withdrawal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most players top up with PhonePe QR or UPI-QR; some hosts also show ArbPayINR and USDT.
            After paying, check Deposit history. Stuck payment? Use in-app assistant support — not a stranger’s UPI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="gaming-card p-4 md:p-6 md:col-span-1">
            <img
              src="/assets/raxi-win-recommended-payments.webp"
              alt="Raxi Win recommended payment methods PhonePe UPI ArbPay USDT"
              className="w-full h-auto rounded-2xl object-contain bg-gray-50"
              loading="lazy"
            />
            <h3 className="mt-4 text-xl font-bold text-gradient">Recommended bank options</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              PhonePe_QR · UPI-QR · ArbPayINR · USDT — pick what the live wallet shows that day. Names can
              move between builds.
            </p>
          </article>

          <article className="gaming-card p-4 md:p-6">
            <img
              src="/assets/raxi-win-deposit-withdrawal-support.webp"
              alt="Raxi Win deposit and withdrawal support assistant"
              className="w-full h-auto rounded-2xl object-contain bg-gray-50"
              loading="lazy"
            />
            <h3 className="mt-4 text-xl font-bold text-gradient">Payment support</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Stuck deposit or delayed withdrawal? Use in-app assistant / support on the real host — not a
              stranger’s UPI ID from Telegram.
            </p>
          </article>

          <article className="gaming-card p-4 md:p-6 md:col-span-2 lg:col-span-1">
            <div className="mx-auto w-full max-w-xs">
              <img
                src="/assets/raxi-win-deposit-history.webp"
                alt="Raxi Win deposit history with completed ArbPayINR orders"
                className="w-full h-auto rounded-2xl object-contain bg-gray-50"
                loading="lazy"
                width={480}
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gradient">Deposit history</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              After every top-up, open Wallet → Deposit history. Check order amount, status (Complete), time
              and order number before you play the balance.
            </p>
          </article>
        </div>

        <div className="max-w-3xl mx-auto mt-12 space-y-4 text-muted-foreground leading-relaxed">
          <h3 className="text-xl font-bold text-gradient text-center">Deposit & withdrawal habits</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Only pay inside the official wallet flow you opened after login</li>
            <li>Screenshot the order number if a payment hangs — useful for support</li>
            <li>Minimum deposit / withdrawal amounts change; read the live screen, not old blog numbers</li>
            <li>Never share UPI PIN, banking OTP, or remote-access apps with “agents”</li>
            <li>Set a personal spend limit before the first recharge</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PaymentsGuide;
