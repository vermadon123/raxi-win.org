# Raxi Win - updated for Vercel

Improved copy of the old Vite raxi-win.org site (same UI, assets, pages).

Parent folder = untouched old website
This folder = deploy this to Vercel

## What changed
- Per-route canonical + OG (SeoHead) - fixes GSC alternate canonical
- Homepage-only canonical removed from index.html
- /login route wired
- vercel.json SPA rewrites
- Sitemap/robots refreshed
- Same red theme + original /assets images

## Commands
npm install
npm run dev
npm run build

Vercel root = this folder. Build = npm run build. Output = dist.
Do not use raxiiwins.com code here.
