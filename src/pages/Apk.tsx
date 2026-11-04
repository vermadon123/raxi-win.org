import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Smartphone } from "lucide-react";

const Apk = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHead
        path="/apk"
        title="Raxi Win APK Download — Safe Install Checklist for Android"
        description="Raxi Win APK tips for India: verify the host, refuse hack/mod files, check permissions, and keep browser login as a fallback."
        keywords="raxi win apk, raxiwin apk, raxi win app download, raxi win apk download, raxiwin app"
      />
      <Header />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <header className="text-center space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect">
              <Smartphone className="w-4 h-4 text-accent mr-2" />
              <span className="text-sm font-medium">APK & APP</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">Raxi Win APK</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Searching “Raxi Win APK” or “raxiwin app download” usually means you want an Android file to
              sideload. Treat that like any unknown install: verify the source, skip hack packs, review
              permissions, and keep browser login working if anything looks wrong. This website does not host
              or send APK files.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://www.raxi888.com/#/register?invitationCode=62622134117" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  Prefer browser login
                </Button>
              </a>
              <Link to="/registration">
                <Button variant="outline" size="lg">
                  Raxi Win Register
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost" size="lg">
                  Login guide
                </Button>
              </Link>
            </div>
          </header>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gradient">Do you need the APK at all?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Many players complete Raxi Win register, Raxi Win login, gift codes and UPI deposits in Chrome
              (or another updated browser) without installing anything. A home-screen shortcut often feels
              “app-like” enough. Sideload only if you have a clear reason — push convenience, offline icon —
              and a source you trust. If you are unsure, stay in the browser.
            </p>
          </section>

          <section className="gaming-card p-6 md:p-8 space-y-3">
            <h2 className="text-2xl font-bold text-gradient flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-gaming-orange" />
              Safe download checklist
            </h2>
            <ol className="list-decimal pl-5 space-y-3 text-muted-foreground leading-relaxed">
              <li>Only download from a host you typed or bookmarked yourself — not a shortened link from a stranger.</li>
              <li>Match the brand spelling. Extra letters or odd TLDs are a common trap.</li>
              <li>Note the file size roughly; tiny “mod” packs that promise unlimited balance are a red flag.</li>
              <li>Before install, read Android’s permission list. Refuse SMS, Accessibility, or Device admin if there is no clear need.</li>
              <li>Install once. If Play Protect or your antivirus warns you, stop and use the mobile browser instead.</li>
              <li>After install, sign in with your own number. If login fails or a second overlay asks for OTP, uninstall.</li>
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gradient">Typical Android install order</h2>
            <ol className="list-decimal pl-5 space-y-3 text-muted-foreground leading-relaxed">
              <li>Download the file only from the trusted host.</li>
              <li>Open Settings → allow install from that browser or file manager for this one time.</li>
              <li>Tap the APK, review permissions, then Install.</li>
              <li>Open the app, complete Raxi Win login with your registered mobile number.</li>
              <li>Turn “unknown sources” back off for that browser if you prefer a tighter phone.</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed">
              Exact menu names vary by Android version (Samsung, Xiaomi, Pixel). The idea is the same: one
              trusted file, one install, then normal login.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gradient">Hack / mod APK warning</h2>
            <p className="text-muted-foreground leading-relaxed">
              Files labelled “unlimited balance”, “auto prediction”, “sure shot”, or “mod menu” are not safe
              shortcuts. They often steal sessions, overlay a fake Raxi Win login, or read SMSs. Delete them.
              No tip channel can guarantee the next colour or WinGo result. If a Telegram pack asks you to
              disable Play Protect “so the hack works”, that is your cue to walk away.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gradient">Browser fallback</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can finish register and login in the browser, then add a home-screen shortcut. That avoids
              unknown-sources installs when you only need the lobby, gift codes, or deposit screens. See{" "}
              <a href="/#gift-code" className="text-primary hover:underline">
                gift code steps
              </a>{" "}
              and{" "}
              <a href="/#payments" className="text-primary hover:underline">
                payments
              </a>{" "}
              on the homepage. Keep the browser updated so layout and WebView quirks stay low.
            </p>
          </section>

          <section className="gaming-card p-6 md:p-8 space-y-3">
            <h2 className="text-2xl font-bold text-gradient">App size and “latest version” claims</h2>
            <p className="text-muted-foreground leading-relaxed">
              Marketing pages quote different APK sizes (sometimes under 10 MB, sometimes larger). Treat those
              as approximate. What matters more is the source and the permissions. After you install, update
              only from the same trusted channel — do not chase “new version” files from random blogs or
              mirror APK sites that inject ads.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gradient">If something feels wrong after install</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Uninstall the app immediately</li>
              <li>Change your Raxi Win password from a clean browser login</li>
              <li>Do not enter UPI PIN on any overlay that appeared outside the normal wallet flow</li>
              <li>Scan the phone with Play Protect or your usual antivirus</li>
              <li>
                Re-read{" "}
                <Link to="/login" className="text-primary hover:underline">
                  login safety
                </Link>{" "}
                before signing in again
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gradient">APK FAQ</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <p className="font-semibold text-foreground">Does this site give the APK file?</p>
                <p>No. We only explain safer habits. Download only from a host you trust.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Is iOS covered?</p>
                <p>Most “APK” searches are Android. On iPhone, use the mobile browser unless the operator publishes an official store listing you can verify.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Register first or install first?</p>
                <p>
                  Either works. Many people{" "}
                  <Link to="/registration" className="text-primary hover:underline">
                    register in the browser
                  </Link>
                  , confirm login, then decide on an APK later.
                </p>
              </div>
            </div>
          </section>

          <p className="text-center text-sm text-muted-foreground">
            Related:{" "}
            <Link to="/registration" className="text-primary hover:underline">
              Register
            </Link>
            {" · "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
            {" · "}
            <Link to="/blog" className="text-primary hover:underline">
              Blog
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Apk;
