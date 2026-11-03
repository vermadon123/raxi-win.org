import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LoginGuide = () => {
  return (
    <article className="max-w-3xl mx-auto space-y-10 text-left">
      <div className="space-y-4">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Raxi Win login is how you get back into the same account after register. Most people only need
          three things: the mobile number they signed up with, the password they chose, and a quiet minute
          without switching networks mid-OTP. This guide covers the field order, phone vs email tabs, forgot
          password, OTP delays, and the fake login pages that copy the red logo. Nothing on this page asks
          for your password — use the live login button when you are ready to sign in for real.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          If you do not have an account yet, start with{" "}
          <Link to="/registration" className="text-primary font-medium hover:underline">
            Raxi Win register
          </Link>
          . If you are deciding between the app file and the browser, read the{" "}
          <Link to="/apk" className="text-primary font-medium hover:underline">
            APK checklist
          </Link>{" "}
          first. Gift codes and UPI deposits only work after a successful login.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="https://www.raxi12.com/#/login" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
              Open live Raxi Win Login
            </Button>
          </a>
          <Link to="/registration">
            <Button variant="outline" size="lg">
              New here? Register
            </Button>
          </Link>
          <Link to="/apk">
            <Button variant="ghost" size="lg">
              APK safety tips
            </Button>
          </Link>
        </div>
      </div>

      <section className="gaming-card p-6 md:p-8 space-y-3">
        <h2 className="text-2xl font-bold text-gradient">What you need before you sign in</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>The SIM for your registered number inside the phone you are using</li>
          <li>The password from Raxi Win register — or a reset if you forgot it</li>
          <li>A steady connection; hopping Wi-Fi mid-OTP is a common fail</li>
          <li>The real host in the address bar, not a forwarded “bonus login” link</li>
          <li>Enough battery and storage if you are opening the installed app instead of the browser</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          On a shared phone, sign out when you finish. “Remember password” is fine on a locked personal
          device; skip it in a shop or family handset.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">How to complete Raxi Win login</h2>
        <ol className="list-decimal pl-5 space-y-3 text-muted-foreground leading-relaxed">
          <li>Open the app or the live site and choose Login.</li>
          <li>Stay on the Phone Number tab unless you deliberately registered with email.</li>
          <li>Confirm +91 is selected, then enter your 10-digit mobile number with no spaces.</li>
          <li>Type your password carefully — watch Caps Lock and auto-correct.</li>
          <li>If the screen asks for OTP or CAPTCHA, complete that step on the same page.</li>
          <li>When the lobby opens, check the profile / masked number looks like yours. If not, log out.</li>
        </ol>
        <p className="text-muted-foreground leading-relaxed">
          After the first clean login, bookmark the host. Next visits are faster if you stop chasing random
          Telegram mirrors. From the lobby you can open{" "}
          <a href="/#gift-code" className="text-primary font-medium hover:underline">
            Account → Gifts
          </a>{" "}
          for codes, or{" "}
          <a href="/#payments" className="text-primary font-medium hover:underline">
            Wallet deposits
          </a>{" "}
          when you are ready to top up.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">Phone number tab vs email tab</h2>
        <p className="text-muted-foreground leading-relaxed">
          Many Raxi Win builds show two tabs: Phone Number and Email. If you registered with a mobile number
          — the usual path in India — stay on Phone Number. Switching to Email and typing a Gmail you never
          linked will look like “login failed” even when the password is right. Use Email only if that is how
          the account was created. Country code mistakes (missing +91, or pasting +9198… into the local field)
          cause the same confusion.
        </p>
      </section>

      <section id="forgot-password" className="gaming-card p-6 md:p-8 space-y-3 scroll-mt-28">
        <h2 className="text-2xl font-bold text-gradient">Forgot password</h2>
        <p className="text-muted-foreground leading-relaxed">
          On the login screen, tap Forgot password. Enter the registered mobile number, wait for the SMS OTP,
          then set a new password you do not use for email or banking. Prefer a long mix of letters and
          numbers over a name plus birth year. Save it in a password manager or write it somewhere private —
          not as a screenshot in a shared gallery.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          After reset, sign in once and confirm the lobby loads before you deposit or claim a gift code.
          Nobody from “support” needs your OTP on WhatsApp or Telegram. If a chat asks you to read the code
          aloud, close it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">When OTP does not arrive</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Wait 60–90 seconds, then tap Resend once — do not spam the button</li>
          <li>Confirm the number has no extra digit, missing digit, or space</li>
          <li>Turn off VPN; try mobile data instead of weak café Wi-Fi</li>
          <li>Check that the SIM receives SMS from other services (banks, OTP apps)</li>
          <li>Close in-app browsers opened from chat previews; open login in Chrome or the real app</li>
          <li>If the page design looks off or the URL spelling is wrong, leave immediately</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">Common login errors</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Wrong password</strong> — use Forgot password instead of
            guessing until the account locks
          </li>
          <li>
            <strong className="text-foreground">Number not registered</strong> — finish{" "}
            <Link to="/registration" className="text-primary hover:underline">
              Raxi Win register
            </Link>{" "}
            first, then come back
          </li>
          <li>
            <strong className="text-foreground">Blank or spinning page</strong> — refresh, update the browser,
            clear site data for that host, or try browser before any APK (
            <Link to="/apk" className="text-primary hover:underline">
              APK checklist
            </Link>
            )
          </li>
          <li>
            <strong className="text-foreground">Logged into the wrong account</strong> — log out, check the
            number, sign in again; do not deposit until the profile looks right
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">After a successful login</h2>
        <p className="text-muted-foreground leading-relaxed">
          Glance at the home banner and wallet icon so you know you are in your own lobby. If you use gift
          codes, redeem them from Account → Gifts, not from a stranger’s “claim link”. For deposits, stick to
          the payment methods shown in-wallet (PhonePe / UPI / similar) and check Deposit history afterward.
          Set a spend limit before the first top-up. Colour rounds and WinGo are chance — no tip channel can
          lock the next result.
        </p>
      </section>

      <section className="gaming-card p-6 md:p-8 space-y-3">
        <h2 className="text-2xl font-bold text-gradient">Stay safe at sign-in</h2>
        <p className="text-muted-foreground leading-relaxed">
          Check the hostname every time. A copied logo is easy to fake. This guide site never stores your
          password or OTP. Prefer the live login button above for the real form. Related reading:{" "}
          <Link to="/registration" className="text-primary hover:underline">
            register
          </Link>
          ,{" "}
          <Link to="/apk" className="text-primary hover:underline">
            APK
          </Link>
          ,{" "}
          <Link to="/blog" className="text-primary hover:underline">
            blog
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-gradient">Quick FAQ</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <div>
            <p className="font-semibold text-foreground">Can I login with a different number?</p>
            <p>Only the number linked at register works. If you changed SIM permanently, use in-app support on the real host — not a random chat admin.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Is email login required?</p>
            <p>No. Most India signups use mobile + password. Use email only if that is how you registered.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Should I download an APK just to login?</p>
            <p>
              Not required. Browser login is enough for many players. If you still want the file, follow{" "}
              <Link to="/apk" className="text-primary hover:underline">
                safe APK steps
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default LoginGuide;
