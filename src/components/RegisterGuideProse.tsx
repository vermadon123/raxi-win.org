import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RegisterGuideProse = () => {
  return (
    <article className="max-w-3xl mx-auto space-y-10 text-left">
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Raxi Win register is the first step before login, gift codes, or deposits. You create the account
          on the live host with a mobile number you control, a password you will remember, and an SMS OTP.
          The screenshots further down this page show the usual field order. Your OTP and password stay on
          that register screen — this website never collects them.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
          <a
            href="https://www.raxi888.com/#/register?invitationCode=62622134117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg">
              Open live Raxi Win Register
            </Button>
          </a>
          <Link to="/login">
            <Button variant="outline" size="lg">
              Already have an account? Login
            </Button>
          </Link>
          <Link to="/apk">
            <Button variant="ghost" size="lg">
              APK download tips
            </Button>
          </Link>
        </div>
      </div>

      <section className="gaming-card p-6 md:p-8 space-y-3">
        <h2 className="text-2xl font-bold text-gradient">What Raxi Win register needs</h2>
        <p className="text-muted-foreground leading-relaxed">
          Bring a working Indian mobile number that receives SMS, a unique password (not your banking or
          email password), and a few minutes without switching apps mid-OTP. You should be 18+. Identity
          checks may appear later before a first withdrawal — keep your own documents ready, but creating
          the account itself should not require paying a stranger “to activate”.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Own SIM in the phone you are using</li>
          <li>Stable data or Wi-Fi</li>
          <li>Invite code only if you actually have one (optional)</li>
          <li>Time to read the terms checkbox before you tick it</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">Step-by-step signup</h2>
        <ol className="list-decimal pl-5 space-y-3 text-muted-foreground leading-relaxed">
          <li>Open the live register link and check the address bar spelling.</li>
          <li>Keep +91 selected and enter your 10-digit mobile number.</li>
          <li>Create a password, then confirm it in the second field if shown.</li>
          <li>Paste an invite code only if you mean to use one; otherwise leave it blank.</li>
          <li>Tick the privacy / terms box after you have actually glanced at it.</li>
          <li>Submit, enter the SMS OTP on the same screen, and wait for the success state.</li>
          <li>
            Immediately try{" "}
            <Link to="/login" className="text-primary hover:underline">
              Raxi Win login
            </Link>{" "}
            once so you know the password works.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">Invite code — optional</h2>
        <p className="text-muted-foreground leading-relaxed">
          The invite field is optional on most builds. Fill it only if someone you trust shared a code. On
          this site the listed invite code is{" "}
          <strong className="text-foreground">62622134117</strong> (also under App Information). Leave the
          box empty if you are unsure. Never pay only to “unlock” a code, and never send OTP to someone who
          claims they will register for you.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Gift codes are different from invite codes. Invites usually sit on the register form; gift codes
          are claimed later inside Account → Gifts after login. See the homepage{" "}
          <a href="/#gift-code" className="text-primary hover:underline">
            gift code section
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">If SMS OTP fails during register</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Confirm +91 and the 10-digit number have no typo</li>
          <li>Wait a full minute before Resend; hammering the button slows delivery</li>
          <li>Use the phone with that SIM — not a friend’s handset “for now”</li>
          <li>Try mobile data if Wi-Fi or a VPN is flaky</li>
          <li>Avoid registering inside WhatsApp / Telegram in-app browsers</li>
          <li>Check SMS inbox and blocked / spam folders for the code</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Enter the OTP only on the register screen you opened. If a “helper” asks you to forward the code,
          stop. After the account exists, sign in with the same number on the{" "}
          <Link to="/login" className="text-primary hover:underline">
            login guide
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">Password tips that save headaches</h2>
        <p className="text-muted-foreground leading-relaxed">
          Longer beats clever. Avoid your name, DOB, or “raxi123”. Do not reuse the password from Gmail or
          UPI apps. If the form rejects your password, check minimum length rules on screen — some builds
          want 8+ characters. After signup, store the password somewhere you control. If you lose it later,
          use Forgot password on the login page rather than creating a second account.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">Mistakes that cause trouble later</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Registering with a borrowed number — you lose OTPs when that SIM leaves</li>
          <li>Making several accounts on one phone — duplicates often get frozen</li>
          <li>Saving the password as a screenshot in a shared gallery</li>
          <li>
            Installing a “mod APK” right after signup — see the{" "}
            <Link to="/apk" className="text-primary hover:underline">
              APK checklist
            </Link>
          </li>
          <li>Depositing before you have tested login once on a host you trust</li>
        </ul>
      </section>

      <section className="gaming-card p-6 md:p-8 space-y-3">
        <h2 className="text-2xl font-bold text-gradient">After you register</h2>
        <p className="text-muted-foreground leading-relaxed">
          Bookmark the host, complete one clean login, then explore the lobby. Set a spend limit before the
          first deposit. Payment rails (PhonePe, UPI-QR, and similar) are covered under{" "}
          <a href="/#payments" className="text-primary hover:underline">
            payments
          </a>
          . Mentors and offer posters on the homepage are informational — always read live terms in-app
          before you recharge. Colour prediction and WinGo rounds are chance; tips do not change the outcome.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">Register FAQ</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <div>
            <p className="font-semibold text-foreground">Is Raxi Win register free?</p>
            <p>Creating the account should not cost money. Be wary of anyone who charges you to “open” or “upgrade” the ID.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Do I need the APK to register?</p>
            <p>
              No. Browser register works. Use the{" "}
              <Link to="/apk" className="text-primary hover:underline">
                APK page
              </Link>{" "}
              only if you specifically want a sideload and understand the risks.
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Can I register two numbers?</p>
            <p>Platforms usually allow one account per person. Extra accounts can trigger freezes on all of them.</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default RegisterGuideProse;
