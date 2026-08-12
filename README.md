# Shamanic AI — Consciousness Interface (Next.js Clone)

Ye aapki di gayi image ka clone hai, Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + lucide-react icons k sath banaya gaya. Poora dashboard fully animated hai (glowing eye, rotating sacred-geometry rings, pulsing chakra dots, waveform, world-map dots, etc).

## Theme
- Background: deep black-green void (#050807)
- Accent: neon/mystic green (#6bff8e) with soft glow shadows
- Panels: translucent dark-green glass panels with hairline borders (.glow-panel)
- Fonts: Cinzel (display/headings), Cormorant Garamond (mystic subtitle/italic), Inter (body/UI) — loaded via Google Fonts link tag with serif/sans fallbacks so it still works offline.

## Structure
```
app/
  layout.tsx      -> fonts + global shell
  page.tsx        -> assembles the whole dashboard grid
  globals.css     -> theme tokens + animation keyframes
components/
  Sidebar.tsx     -> left nav + Shamanic Core widget
  TopBar.tsx      -> search / notifications / profile
  HeroEye.tsx     -> animated central eye + sacred geometry
  ChatPanel.tsx   -> conversation thread
  InputBar.tsx    -> message composer
  SideCards.tsx   -> Active Rituals / Knowledge Stream / Vision Feed
  RightPanel.tsx  -> Upgrade, Consciousness Overview, Energy Center,
                     Shamanic Music player, World Connection map
```

## Run locally
```bash
npm install
npm run dev
```
Phir browser mein http://localhost:3000 kholein.

## Production build
```bash
npm run build
npm run start
```

## Customize
- Rangon (colors) ko app/globals.css k :root variables se badal saktay hain.
- Sidebar links, ritual list, knowledge stats — sab respective component files mein plain arrays hain, easily editable.
- Chat messages abhi static hain — inko API se connect karne k liye components/ChatPanel.tsx mein state + fetch call add karein.
"# shamanic_ai" 
# new_shamanic_ai
# new_shamanic_ai
