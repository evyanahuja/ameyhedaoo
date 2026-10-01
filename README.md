# Amey Hedaoo — Trusted Household Help in Bhopal, MP

Premium, conversion-focused landing page for **Amey Hedaoo**, a verified male housekeeper
offering cleaning, laundry, cooking support and general household work across **Bhopal,
Madhya Pradesh**.

**Book / call:** +91 72250 46460 · **Live site:** https://evyanahuja.github.io/ameyhedaoo/

Built with React 19 + Vite 7 + Tailwind CSS v4 + Framer Motion.

---

## Quick start

```bash
# 1. Use Node 20.19+ (22 recommended — see .nvmrc)
nvm use            # or: nvm install 22

# 2. Install dependencies
npm ci             # or: npm install

# 3. Run the dev server
npm run dev        # open http://localhost:5173
```

Production build:

```bash
npm run build      # outputs a single self-contained dist/index.html
npm run preview    # serve the production build locally
```

---

## Why it did not run before (and the fix)

The build was failing with:

```
Could not resolve "../assets/service-clean.jpg" from "src/components/Showcase.tsx"
```

**Root cause:** components imported photos from `src/assets/…`, but that folder was never
committed to the repo — the images only existed in `public/images/`. Without those files
`vite build` fails, so nothing was ever produced and the GitHub page stayed blank.

**Fix (already applied):**

1. **Images are now embedded in source code.** `src/assets/photos.ts` contains every photo as
   a base64 data URI. The build depends on a plain `.ts` file that git tracks like any other
   source file, so it can never break from missing binaries again — and the final page is a
   single self-contained `index.html` that runs on any host, at any sub-path.
2. **A GitHub Actions workflow** (`.github/workflows/deploy.yml`) installs, verifies the image
   module exists, builds, and deploys to GitHub Pages on every push to `main`.
3. **A guard step in CI** fails fast with a clear message if `src/assets/photos.ts` is missing.

---

## Deploying to GitHub Pages

1. Push these changes to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source: `GitHub Actions`**
   (this step is required — leaving it on "Deploy from a branch" serves raw source and
   produces a blank page).
3. Open the **Actions** tab and run the **Build & Deploy to GitHub Pages** workflow
   (it also runs automatically on push).
4. Your site appears at `https://evyanahuja.github.io/ameyhedaoo/`.

Deploying somewhere else (Netlify, Vercel, shared hosting)? Just run `npm run build` and
publish the `dist/` folder — the output is one static `index.html` with no external assets.

---

## Changing the photos

1. Drop your image into `public/images/` (e.g. replace `amey-hero.png`).
2. Regenerate the embedded module:

   ```bash
   node scripts/embed-images.mjs
   ```

   > Tip: `npm i -D sharp` first — the script then resizes and compresses the images
   > (≈150KB each instead of ~2MB). Without `sharp` it embeds the originals as-is.

3. Commit the updated `src/assets/photos.ts` and push.

| File in `public/images/` | Export            | Used for                        |
| ------------------------ | ----------------- | ------------------------------- |
| `amey-hero.png`          | `ameyPoster`      | Hero poster (the uploaded photo)|
| `amey-hero.png` (crop)   | `ameyPortrait`    | Bio card avatar                 |
| `service-clean.jpg`      | `cleanImg`        | "A Day With Amey" — morning     |
| `service-cooking.jpg`    | `cookImg`         | "A Day With Amey" — afternoon   |
| `service-organize.jpg`   | `organizeImg`     | "A Day With Amey" — evening     |

---

## Project structure

```
├── index.html                  # Meta, fonts (Fraunces / Inter / Caveat), favicon
├── scripts/embed-images.mjs    # Regenerates src/assets/photos.ts
├── src/
│   ├── assets/photos.ts        # All images embedded as data URIs (generated)
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glass nav + scroll progress + mobile menu
│   │   ├── Hero.tsx            # Poster hero, CTAs, trust signals
│   │   ├── SocialProof.tsx     # Animated counters + services marquee
│   │   ├── Services.tsx        # 8 household services grid
│   │   ├── Showcase.tsx        # Auto-advancing "A Day With Amey" tabs
│   │   ├── Benefits.tsx        # Why Amey — bio, verification, guarantee
│   │   ├── Testimonials.tsx    # Bhopal customer reviews
│   │   ├── Pricing.tsx         # ₹149 trial / monthly / full-day plans
│   │   ├── Faq.tsx             # Accessible accordion
│   │   ├── Cta.tsx             # Final call-to-action band
│   │   └── Footer.tsx          # Contact: +91 72250 46460, WhatsApp, service areas
│   └── App.tsx                 # Composition + floating call/WhatsApp bar
└── .github/workflows/deploy.yml
```

---

## Customising

| What                    | Where                                                          |
| ----------------------- | -------------------------------------------------------------- |
| Phone / WhatsApp number | `src/components/{Navbar,Hero,Footer,Faq,Cta,App}.tsx` (search `7225046460`) |
| Service areas           | `src/components/Footer.tsx`, `Hero.tsx`, `Faq.tsx`             |
| Pricing                 | `src/components/Pricing.tsx`                                   |
| Colours & fonts         | `src/index.css` (`@theme` tokens)                              |
| Page title / SEO        | `index.html`                                                   |

---

## Accessibility & performance

- Semantic landmarks, `aria` tablist/accordion, visible focus rings, and a skip link.
- `prefers-reduced-motion` respected globally via `MotionConfig`.
- Mobile-first responsive layout from 320px to wide desktop.
- All imagery is inlined and pre-optimised — no layout shift, no third-party image requests.
