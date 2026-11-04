import { Link } from "react-router-dom";
import { Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

const GiftCodeGuide = () => {
  return (
    <section id="gift-code" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-gaming opacity-10 floating-element" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
            <Ticket className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium">GIFT CODES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Raxi Win <span className="text-gradient">gift code</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            After Raxi Win login, open Account → Gifts, paste the code, then tap Receive. History shows when
            cash or a coupon lands. Gift codes are not the same as the register invite code — and you should
            never buy a code from a random chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="gaming-card p-4 md:p-6">
            <img
              src="/assets/raxi-win-gift-code-howto.webp"
              alt="Raxi Win gift code steps: Account, Gifts, paste code, Receive"
              className="w-full h-auto rounded-2xl object-contain bg-gray-50"
              loading="lazy"
            />
            <h3 className="mt-4 text-xl font-bold text-gradient">Step-by-step on mobile</h3>
            <ol className="mt-3 space-y-2 text-muted-foreground text-sm md:text-base list-decimal list-inside">
              <li>Complete Raxi Win login on a host you trust</li>
              <li>Tap Account on the bottom bar</li>
              <li>Open Gifts</li>
              <li>Paste the gift code exactly (no extra spaces)</li>
              <li>Tap Receive and wait for the success state</li>
            </ol>
          </div>

          <div className="gaming-card p-4 md:p-6 flex flex-col">
            <div className="mx-auto w-full max-w-sm">
              <img
                src="/assets/raxi-win-gift-code-history.webp"
                alt="Raxi Win gift code history showing successfully received amount"
                className="w-full h-auto rounded-2xl object-contain bg-gray-50"
                loading="lazy"
                width={480}
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gradient">Gift history</h3>
            <p className="mt-2 text-muted-foreground text-sm md:text-base leading-relaxed">
              After a successful redeem, History shows “Successfully received” with the amount and time. One
              code usually claims one gift. Coupons may sit under top-up coupons with a spend threshold — read
              the redemption notes on that screen.
            </p>
            <div className="mt-auto pt-6">
              <a href="https://www.raxi888.com/#/register?invitationCode=62622134117" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Open Raxi Win Login
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 space-y-4 text-muted-foreground leading-relaxed">
          <h3 className="text-xl font-bold text-gradient text-center">Gift code tips</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Codes expire — redeem sooner rather than saving a screenshot for weeks</li>
            <li>Do not post private codes in public groups; someone else will claim them</li>
            <li>
              Invite codes belong on{" "}
              <Link to="/registration" className="text-primary hover:underline">
                register
              </Link>
              ; gift codes belong in Gifts after login
            </li>
            <li>If Receive fails, check you are logged into the right number, then try once more</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GiftCodeGuide;
