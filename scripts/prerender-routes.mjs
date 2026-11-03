/**
 * After `vite build`, copy index.html into route folders and inject
 * route-specific <title>, description, and canonical so crawlers get
 * correct head tags without waiting on JS.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");
const indexPath = path.join(dist, "index.html");

const routes = [
  {
    path: "",
    title: "Raxi Win Game — Login, Register, APK & Invite Code | raxiwin",
    description:
      "Raxi Win login and register with mobile OTP, gift codes, UPI deposit tips, and WinGo colour prediction — clear steps for players in India.",
    canonical: "https://raxi-win.org/",
  },
  {
    path: "login",
    title: "Raxi Win Login — Phone Number, Password & OTP Fix",
    description:
      "Raxi Win login with your +91 number and password. Fix OTP delays, recover a forgotten password, and avoid fake login pages.",
    canonical: "https://raxi-win.org/login",
  },
  {
    path: "registration",
    title: "Raxi Win Register — Mobile Signup, OTP & Invite Code",
    description:
      "Raxi Win register guide: +91 mobile, password, OTP and invite code. Fix SMS delays and spot fake signup links.",
    canonical: "https://raxi-win.org/registration",
  },
  {
    path: "apk",
    title: "Raxi Win APK Download — Safe Install Checklist for Android",
    description:
      "Raxi Win APK tips for India: verify the host, refuse hack/mod files, check permissions, and keep browser login as a fallback.",
    canonical: "https://raxi-win.org/apk",
  },
  {
    path: "about",
    title: "About Raxi Win — Games, Security & Platform Overview",
    description:
      "About Raxi Win: colour prediction, WinGo, K3, withdrawals and how the platform works for players in India.",
    canonical: "https://raxi-win.org/about",
  },
  {
    path: "blog",
    title: "Raxi Win Blog — Login Guides, Tips & Game News",
    description:
      "Raxi Win blog: login steps, register tips, colour prediction and game guides for players in India.",
    canonical: "https://raxi-win.org/blog",
  },
  {
    path: "blog/0",
    title: "Lost Your Raxi Win Password? Recovery Guide | Raxi Win Blog",
    description: "Forgot your Raxi Win password? Step-by-step recovery with OTP and a new password.",
    canonical: "https://raxi-win.org/blog/0",
  },
  {
    path: "blog/1",
    title: "How to Register on Raxi Win | Raxi Win Blog",
    description: "Raxi Win register with mobile, invite code and gift code tips.",
    canonical: "https://raxi-win.org/blog/1",
  },
  {
    path: "blog/2",
    title: "Raxi Win Games Guide | Raxi Win Blog",
    description: "WinGo, colour prediction and other Raxi Win lobby games explained.",
    canonical: "https://raxi-win.org/blog/2",
  },
  {
    path: "terms",
    title: "Terms and Conditions — Raxi Win Game Rules",
    description: "Raxi Win terms and conditions: account rules, promotions and policies.",
    canonical: "https://raxi-win.org/terms",
  },
];

function injectHead(html, { title, description, canonical }) {
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);
  if (/name="description"/i.test(out)) {
    out = out.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${description}" />`,
    );
  } else {
    out = out.replace(
      /<\/title>/i,
      `</title>\n    <meta name="description" content="${description}" />`,
    );
  }
  if (/rel="canonical"/i.test(out)) {
    out = out.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${canonical}" />`,
    );
  } else {
    out = out.replace(
      /<\/head>/i,
      `    <link rel="canonical" href="${canonical}" />\n  </head>`,
    );
  }
  return out;
}

if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html missing — run vite build first");
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, "utf8");

for (const route of routes) {
  const html = injectHead(baseHtml, route);
  if (!route.path) {
    fs.writeFileSync(indexPath, html);
    console.log("OK /");
    continue;
  }
  const dir = path.join(dist, route.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log("OK /" + route.path);
}

console.log("Prerender route shells written.");
