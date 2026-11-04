import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    title: "New Player Recharge Bonus",
    description:
      "First recharge tiers for new players. Invite + minimum deposit rules apply — miss either and the bonus may not credit. Check the live table before you pay.",
    image: "/assets/raxi-win-new-player-recharge-bonus.webp",
    alt: "Raxi Win new player recharge bonus table",
  },
  {
    title: "Referral Super Bonus",
    description:
      "Share your invite link, bring subordinates, and hit their deposit targets. Rewards usually credit when conditions clear — track them under agent / invite tools after login.",
    image: "/assets/raxi-win-referral-super-bonus.webp",
    alt: "Raxi Win referral super bonus chart",
  },
  {
    title: "Daily Salary System",
    description:
      "Team deposit targets mapped to daily salary tiers for active agents. Numbers on posters can change — treat the in-app board as the source of truth.",
    image: "/assets/raxi-win-daily-salary-system.webp",
    alt: "Raxi Win daily salary system chart",
  },
  {
    title: "Head Agent Salary",
    description:
      "Minimum team size and deposit amounts mapped to salary brackets. Build a real team with valid invites; fake accounts rarely stay paid.",
    image: "/assets/raxi-win-head-agent-salary.webp",
    alt: "Raxi Win head agent salary system",
  },
  {
    title: "VIP Agent Level 1 Salary",
    description:
      "Level 1 recharge + active members for team agent daily salary. Climb levels only when the live VIP / agent screen shows the next tier open.",
    image: "/assets/raxi-win-vip-agent-level1-salary.webp",
    alt: "Raxi Win VIP agent level 1 salary table",
  },
];

const OfferPosters = () => {
  return (
    <section id="offers" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-36 h-36 rounded-full bg-gradient-primary opacity-10 floating-element" />
      <div className="absolute bottom-10 right-10 w-44 h-44 rounded-full bg-gradient-gaming opacity-10 floating-element" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6">
            <Gift className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium">OFFERS & SALARY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Recharge bonus, referral & <span className="text-gradient">invite</span> offers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            First recharge tables, referral rewards and agent salary boards. Read the rules on each poster
            before you deposit — bonuses can cancel if invite or deposit conditions aren’t met.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <article key={offer.title} className="gaming-card p-4 md:p-6 group">
              <div className="overflow-hidden rounded-2xl bg-gray-50 mb-4">
                <img
                  src={offer.image}
                  alt={offer.alt}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gradient mb-2">{offer.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {offer.description}
              </p>
            </article>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 space-y-4 text-muted-foreground leading-relaxed">
          <h3 className="text-xl font-bold text-gradient text-center">How to use these offers safely</h3>
          <p>
            Start with a valid invite on register, finish Raxi Win login, then open Wallet / Activity for the
            live bonus that matches your account. Screenshot posters help as a guide, but amounts and
            turnover rules update often — never chase an old WhatsApp flyer.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>New-player recharge usually needs the first deposit on that UID</li>
            <li>Referral and salary boards need real team deposits, not recycled phones</li>
            <li>If a bonus is missing, check invite binding and Deposit history first</li>
            <li>Play only what you can afford after any bonus credits</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.raxi888.com/#/register?invitationCode=62622134117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg">
              Register & Claim Offers
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferPosters;
