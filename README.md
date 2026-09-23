# 🌟 Universal Portfolio Service Template (Dual-Market Ready)

> A high-performance, production-ready, and bilingual portfolio website template built with **React**, **Vite**, **Tailwind CSS**, **Lenis Smooth Scroll**, and **Lucide Icons**. 
> Designed specifically to launch client portfolios for both **Local (Cambodia 🇰🇭)** and **Global (International 🌐)** markets in under 10 minutes.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm.cmd install

# 2. Start local development server
npm.cmd run dev

# 3. Build for production (GitHub Pages or Vercel)
npm.cmd run build
```

---

## 📂 Project Architecture

```text
portfolio-universal/
├── public/
│   ├── favicon.svg               # Modern vector favicon
│   ├── images/
│   │   ├── avatar.svg            # 3D / Notion style vector avatar (Faceless)
│   │   ├── logo.svg              # Studio / Agency monogram logo (Faceless)
│   │   └── projects/             # High-res project mockup graphics
│   └── documents/
│       └── resume.pdf            # Client's CV/Resume document
│
├── src/
│   ├── config/
│   │   └── portfolio.config.js   # ⭐ THE SINGLE FILE TO EDIT FOR CLIENTS
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, ThemeToggle, LanguageToggle
│   │   ├── sections/             # Hero, About, Skills, Projects, Experience, Contact
│   │   └── ui/                   # ProjectModal, Badge, Toast
│   ├── context/                  # ThemeContext (Dark/Light), LanguageContext (Khmer/English)
│   ├── services/                 # Telegram Bot & Web3Forms notification dispatcher
│   ├── styles/                   # Tailwind globals, animations & Khmer typography
│   ├── App.jsx                   # Master App layout with Lenis smooth scroll
│   └── main.jsx
```

---

## 🛠️ How to Customize for a Client (In 5 Minutes)

Open `src/config/portfolio.config.js`. Everything is configured here:

### 1. Market Selection:
```javascript
market: "dual", // "local" (Khmer only), "global" (English only), or "dual" (Toggle)
```

### 2. Faceless Hero Style:
```javascript
heroStyle: "avatar", // "avatar" | "logo" | "terminal" | "photo"
```

### 3. Lead Notification (Telegram Alert):
Set your Telegram Bot credentials to receive instant notification alerts when someone submits the contact form:
```javascript
contactSettings: {
  enableTelegramAlert: true,
  telegramBotToken: "YOUR_BOT_TOKEN",
  telegramChatId: "YOUR_CHAT_ID",
}
```

---

## 🚀 Deployment (100% Free Hosting)

### Deploy to Vercel (Recommended):
1. Push this folder to your GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repo and click **"Deploy"**. Done in 30 seconds!

### Deploy to GitHub Pages:
1. In `vite.config.js`, set `base: '/repo-name/'`.
2. Run `npm.cmd run build`.
3. Push the `dist` folder to the `gh-pages` branch.
