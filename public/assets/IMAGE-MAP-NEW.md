# New assets — optimized + content plan

Source: `public/assets/new/` (raw Telegram JPG)  
Optimized: `public/assets/*.webp` (renamed, resized, WebP)

## Optimized files

| WebP | From | Type | Use on site |
|------|------|------|-------------|
| `raxi-win-new-player-recharge-bonus.webp` | 03-21-49 | Poster | First recharge bonus table |
| `raxi-win-referral-super-bonus.webp` | 03-21-52 | Poster | Invite / referral rewards |
| `raxi-win-head-agent-salary.webp` | 03-21-53 | Poster | Head agent salary tiers |
| `raxi-win-daily-salary-system.webp` | 03-21-54 | Poster | Daily salary by deposits |
| `raxi-win-vip-agent-level1-salary.webp` | 03-21-56 (2) | Poster | VIP L1 agent daily salary |
| `raxi-win-mentor-thalia.webp` | 03-21-55 | Mentor badge | Mentor Thalia |
| `raxi-win-mentor-jane.webp` | 03-21-56 | Mentor badge | Mentor / Team Jane |
| `raxi-win-mentor-sabby.webp` | 03-21-57 | Mentor badge | Mentor / Team Sabby |
| `raxi-win-mentor-marianna.webp` | 03-21-58 | Mentor badge | Mentor Marianna |
| `raxi-win-mentor-karen.webp` | 03-21-58 (2) | Mentor badge | Mentor Karen |
| `raxi-win-deposit-history.webp` | 03-21-59 | Phone UI | Deposit history proof / guide |
| `raxi-win-gift-code-history.webp` | 03-22-01 (2) | Phone UI | Gift redeem success |
| `raxi-win-gift-code-howto.webp` | 03-22-03 | How-to | Account → Gifts → Receive |
| `raxi-win-deposit-withdrawal-support.webp` | 03-22-00 | Square promo | Payment support CTA |
| `raxi-win-recommended-payments.webp` | 03-22-01 | Square promo | PhonePe / UPI / ArbPay / USDT |

Sizes: posters max width **1080**, badges **800**, phone UI **480**. Format **WebP** ~q78.

## Content plan — what we can add

### 1. Bonuses / offers section (home or `/bonuses`)
- New-player **1st recharge** table (HTML table + poster)
- **Referral super bonus** invite tiers
- CTA: Register / Invite

### 2. Agent / salary pages (optional `/agent` or blog posts)
- Daily salary system
- Head agent salary
- VIP Level 1 agent salary  
*(Tables as real HTML for SEO — image as visual only)*

### 3. Mentors strip
- **Mentors:** Jane, Sabby, Thalia, Marianna, Karen  
- Cards: Play · Win · Earn / High profit / Long term work  
- Link each mentor badge to register / invite CTA (+ Team Jane salary posters where relevant)

### 4. Payments & support
- Recommended banks: PhonePe QR, UPI-QR, ArbPayINR, USDT
- Deposit & withdrawal support graphic
- Deposit history screenshot (guide: how to check orders)

### 5. Gift codes guide (strong for SEO)
- How-to strip: Account → Gifts → paste → Receive
- Gift history screenshot (₹ credited example)
- Pair with existing register/login CTAs

## Suggested page order (next build step)

1. Home: add **Payments** + **Gift code** blocks (high intent)  
2. New `/gift-code` page with howto + history images  
3. New `/bonuses` with recharge + referral (tables in text)  
4. Optional `/agent-salary` later (dense posters)

Raw JPG folder `new/` can stay as backup; site should load only the `.webp` names above.
