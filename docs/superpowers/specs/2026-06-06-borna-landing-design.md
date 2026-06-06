# Borna Plastic — Portal Landing Page Design Spec

**Date:** 2026-06-06  
**Status:** Approved  
**Stack:** Next.js 14+ (App Router) · TypeScript · Tailwind CSS v3 · ShadCN UI · Framer Motion · Lucide React

---

## 1. Overview

A fully Persian RTL, production-ready B2B landing page for the Borna Plastic Dealers Portal. The site introduces the portal, convinces dealers to register, and showcases features. No real backend — all UI-only.

---

## 2. Visual Identity

| Token | Value |
|---|---|
| `--primary` | `#1B4F72` — deep industrial blue |
| `--primary-light` | `#2E86C1` |
| `--accent` | `#1E8449` — industrial green |
| `--accent-light` | `#27AE60` |
| `--background` | `#F8FAFB` |
| `--surface` | `#FFFFFF` |
| `--border` | `#E2E8F0` |
| `--text-primary` | `#1A202C` |
| `--text-secondary` | `#4A5568` |
| `--text-muted` | `#718096` |

Font: **Vazirmatn** (arabic subset, weights 400/500/600/700/800)  
Direction: `rtl` on `<html dir="rtl" lang="fa">`  
Style: clean Enterprise SaaS — `border-slate-200`, `shadow-sm`, `rounded-xl`, no loud gradients.

---

## 3. Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/features` | Features |
| `/contact` | Contact Us |

---

## 4. Shared Layout

### Header (sticky, 64px)
- Logo (Borna icon + text)
- Nav links: خانه / امکانات / ارتباط با ما
- CTA button: «ورود به پورتال» (outline → primary on hover)
- On scroll: white background + `backdrop-blur`
- Mobile: hamburger → ShadCN `Sheet`

### Footer
- Logo + short description
- Quick links
- Contact info
- Social icons
- Copyright line: `© ۱۴۰۴ برنا پلاستیک — تمامی حقوق محفوظ است`

---

## 5. Home Page `/`

### Section 1 — Hero
- Background: very subtle top-to-bottom gradient (deep blue → white) or geometric SVG pattern at low opacity
- H1: «پورتال هوشمند بنکداران برنا»
- Subtitle: «مدیریت سفارش، فاکتور، و ارتباط با برنا — همه در یک پلتفرم یکپارچه»
- CTAs: [ورود به پورتال — primary] [مشاهده امکانات — outline]
- Dashboard mockup: the enterprise-SaaS style portal mockup (sidebar: سفارشات / مالی / باشگاه / فاکتورها / محصولات) built from the approved HTML prototype
- Animation: fade-in + slide-up on page load (Framer Motion)

### Section 2 — Stats Bar
Three stat cards:
- +۵۰۰ بنکدار فعال
- +۱۲۰ محصول متنوع
- ۳۰ سال سابقه فعالیت

Animation: count-up on viewport entry.

### Section 3 — Features Preview
Title: «همه چیزی که یک بنکدار نیاز دارد»

3×3 grid of Feature Cards (icon + title + 1–2 sentence description):
1. اتصال به حسابداری آسا — `Link2`
2. ثبت و پیگیری سفارش — `ClipboardList`
3. باشگاه مشتریان برنا — `Award`
4. فاکتور و رسید خرید — `Receipt`
5. تاریخچه خرید — `BarChart3`
6. فروشگاه آنلاین — `ShoppingCart`
7. پشتیبانی و تیکتینگ — `HeadphonesIcon`

Animation: staggered fade-in on scroll.

### Section 4 — How It Works
Title: «شروع به کار آسان است»

Three steps with connector line:
1. ثبت‌نام بنکدار
2. تأیید توسط برنا
3. شروع مدیریت آنلاین

Layout: horizontal timeline on desktop, vertical on mobile.

### Section 5 — Testimonials
Title: «بنکدارانی که به برنا اعتماد کرده‌اند»

Three quote cards (name, city, 5-star rating, testimonial text).

### Section 6 — FAQ
Title: «سوالات پرتکرار»

ShadCN Accordion — 5 Q&A items covering eligibility, Asa sync, pricing, support, mobile.

### Section 7 — Final CTA
Background: `--primary` with subtle pattern  
Title: «همین الان به پورتال برنا بپیوندید»  
Subtitle: «هزاران بنکدار در سراسر ایران از پورتال برنا استفاده می‌کنند»  
Buttons: [ورود به پورتال — white] [تماس با ما — white outline]

---

## 6. Features Page `/features`

Small hero + 7 two-column sections (one per feature). Each section:
- Detailed description (3–4 sentences)
- Bulleted benefit list with green checkmarks
- ShadCN Card mockup of the UI
- Alternating layout (image left / image right)

---

## 7. Contact Page `/contact`

Small hero + two-column layout:

**Right col — Contact Form (UI + validation only, no backend)**
Fields: name (required), phone (required, 09x pattern), email (optional), subject (Select), message (Textarea, min 20 chars)  
On submit: green success alert (inline or Toast)  
Errors shown below each field.

**Left col — Contact Info**
Address, phone, email, working hours + map placeholder.

---

## 8. Animation Pattern (Framer Motion)

```ts
// All sections:
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Grids:
const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

// whileInView + viewport: { once: true } throughout
```

---

## 9. File Structure

```
app/
  layout.tsx            ← RTL, Vazirmatn, metadata
  page.tsx              ← Home
  features/page.tsx
  contact/page.tsx
components/
  layout/Header.tsx, Footer.tsx
  home/
    HeroSection.tsx
    StatsSection.tsx
    FeaturesSection.tsx
    HowItWorksSection.tsx
    TestimonialsSection.tsx
    FaqSection.tsx
    CtaSection.tsx
  features/FeatureDetail.tsx
  contact/ContactForm.tsx
  ui/                   ← ShadCN
lib/utils.ts
public/logo.svg
```

---

## 10. Configuration

- `app/layout.tsx`: Vazirmatn from `next/font/google`, `<html lang="fa" dir="rtl">`
- `tailwind.config.ts`: custom colors + Vazirmatn as `fontFamily.sans`
- `next build` + `next lint` must pass with zero TS errors

---

## 11. Dashboard Mockup Component (Hero)

The `HeroSection` embeds a scaled-down, non-interactive version of the approved enterprise SaaS portal mockup:
- White sidebar (neutral, no color) with: سفارشات / مالی / باشگاه مشتریان / فاکتورها / محصولات
- Shows the Orders panel (stats + table) as the default view
- Rendered as a real React component (not an iframe) using ShadCN Cards and Tailwind
- Scaled to ~70% with CSS transform inside a browser-frame wrapper

---

## 12. Constraints

- No backend or real API
- Contact form: UI + validation only (no actual submission)
- Portal link: `href="#"` for now
- Zero unrelated dependencies
- exactly compatible to https://shadcn-nextjs-flow-landing-page.vercel.app/ for design