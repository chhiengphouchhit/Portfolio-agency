/**
 * UNIVERSAL PORTFOLIO CONFIGURATION
 * =================================
 * Single source of truth containing 16+ rich, high-end projects
 * across Web Apps, UI/UX Design, Branding, Photography, and Motion.
 */

export const portfolioConfig = {
  market: "dual", // "local" | "global" | "dual"
  heroStyle: "avatar", // "avatar" | "logo" | "terminal" | "photo"

  // 1. PROFILE DETAILS
  profile: {
    name: {
      en: "Alex Vathana",
      km: "អាឡិច វឌ្ឍនា",
    },
    title: {
      en: "Full-Stack Developer & Creative Director",
      km: "អ្នកអភិវឌ្ឍន៍គេហទំព័រ & នាយកផ្នែកច្នៃប្រឌិត",
    },
    tagline: {
      en: "Building sleek, fast, and revenue-driving digital products.",
      km: "បង្កើតគេហទំព័រទំនើប ល្បឿនលឿន និងជួយពង្រីកអាជីវកម្មរបស់អ្នក។",
    },
    bio: {
      en: "With over 4+ years of hands-on experience, I craft end-to-end digital solutions ranging from interactive web apps to brand design systems. I combine aesthetic precision with solid software engineering.",
      km: "មានបទពិសោធន៍ជាង ៤ ឆ្នាំក្នុងការបង្កើតដំណោះស្រាយឌីជីថល ចាប់ពីគេហទំព័រ Web Application រហូតដល់ការរចនាប្រព័ន្ធម៉ាកយីហោ (Branding)។ ខ្ញុំរួមបញ្ចូលគ្នានូវសោភ័ណភាព និងវិស្វកម្មសូហ្វវែររឹងមាំ។",
    },
    location: {
      en: "Phnom Penh, Cambodia (Available Globally 🌍)",
      km: "រាជធានីភ្នំពេញ, កម្ពុជា (ទទួលការងារទូទាំងពិភពលោក 🌍)",
    },
    status: {
      en: "Available for freelance & full-time roles",
      km: "ទំនេរសម្រាប់ការងារគម្រោង & ការងារពេញម៉ោង",
    },
    avatarUrl: "/images/avatar.svg",
    logoUrl: "/images/logo.svg",
    photoUrl: "/images/avatar.svg",
    resumeUrl: "#contact",
  },

  // 2. TERMINAL CONFIG (Used if heroStyle === 'terminal')
  terminal: {
    user: "alex@creative-dev",
    path: "~/portfolio",
    commands: [
      { cmd: "whoami", output: "Full-Stack Developer & Product Designer" },
      { cmd: "stack", output: "['React', 'Next.js', 'Tailwind', 'Node.js', 'Figma']" },
      { cmd: "location", output: "'Phnom Penh, KH' // UTC+7" },
      { cmd: "status", output: "'Ready to take on high-impact projects' 🚀" },
    ],
  },

  // 3. STATS
  stats: [
    {
      value: "4+",
      label: { en: "Years Experience", km: "ឆ្នាំនៃបទពិសោធន៍" },
    },
    {
      value: "45+",
      label: { en: "Projects Completed", km: "គម្រោងបានបញ្ចប់" },
    },
    {
      value: "99%",
      label: { en: "Client Satisfaction", km: "ការពេញចិត្តពីអតិថិជន" },
    },
    {
      value: "< 24h",
      label: { en: "Response Time", km: "រយៈពេលឆ្លើយតប" },
    },
  ],

  // 4. SKILLS & CAPABILITIES
  skills: [
    {
      category: { en: "Frontend & Web", km: "ការអភិវឌ្ឍន៍គេហទំព័រ" },
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "REST & GraphQL", "State Management"],
    },
    {
      category: { en: "UI/UX & Creative", km: "ការរចនា និងច្នៃប្រឌិត" },
      items: ["Figma", "Design Systems", "Adobe Photoshop", "Adobe Illustrator", "Wireframing", "Micro-Interactions"],
    },
    {
      category: { en: "Media & Production", km: "ការផលិតមេឌៀ និងរូបភាព" },
      items: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Commercial Photography", "Lighting & Studio"],
    },
    {
      category: { en: "Backend & Cloud", km: "ប្រព័ន្ធ Backend & Cloud" },
      items: ["Node.js", "Express", "Supabase", "PostgreSQL", "Firebase", "Vercel / GitHub Pages"],
    },
  ],

  // 5. 16 DETAILED CURATED PROJECTS (Web, Mobile, Design, Photography, Video)
  projects: [
    {
      id: "project-1",
      title: "FinTech Trading & Portfolio Dashboard",
      category: "Web App",
      description: {
        en: "Real-time analytics dashboard with cryptocurrency price charts, dark mode, multi-asset tracking, and instant transaction feeds.",
        km: "ផ្ទាំងគ្រប់គ្រងទិន្នន័យហិរញ្ញវត្ថុ និងវិភាគការជួញដូរ មានក្រាហ្វទាន់ហេតុការណ៍ និងតាមដានទ្រព្យសកម្មចម្រុះ។",
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Recharts", "WebSockets"],
      liveUrl: "https://example.com/fintech",
      githubUrl: "https://github.com/example/fintech",
      featured: true,
    },
    {
      id: "project-2",
      title: "Aura AI - Prompt Engineering Workspace",
      category: "Web App",
      description: {
        en: "Generative AI web platform offering multimodal prompt workflows, team collaboration, and automated API fine-tuning.",
        km: "វេទិកា AI ជំនាន់ថ្មីសម្រាប់បង្កើត និងគ្រប់គ្រង Workflow ការងារស្វ័យប្រវត្តជាមួយប្រព័ន្ធ API ទំនើប។",
      },
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "OpenAI API", "Tailwind", "Supabase"],
      liveUrl: "https://example.com/aura-ai",
      githubUrl: "https://github.com/example/aura-ai",
      featured: true,
    },
    {
      id: "project-3",
      title: "Lumina Minimalist Fashion Boutique",
      category: "Web App",
      description: {
        en: "High-fashion e-commerce platform with micro-animations, seamless cart transitions, and multi-currency checkout.",
        km: "គេហទំព័រទិញទំនិញម៉ូដសម្លៀកបំពាក់កម្រិតខ្ពស់ មានចលនា Animation ទាក់ទាញ និងប្រព័ន្ធទូទាត់លុយរហ័ស។",
      },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Shopify Headless", "Tailwind", "Stripe"],
      liveUrl: "https://example.com/lumina",
      githubUrl: null,
      featured: true,
    },
    {
      id: "project-4",
      title: "EcoTrack - Carbon Footprint Tracker",
      category: "UI/UX Design",
      description: {
        en: "Mobile app UI/UX focusing on environmental awareness, daily habit checklists, community challenges, and badge rewards.",
        km: "ការរចនា UI/UX កម្មវិធីទូរស័ព្ទសម្រាប់តាមដានបរិស្ថាន និងកាត់បន្ថយកាបូន ជាមួយប្រព័ន្ធពិន្ទុលើកទឹកចិត្ត។",
      },
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      tags: ["Figma", "Mobile UI", "Design System", "Prototyping"],
      liveUrl: "https://example.com/ecotrack",
      githubUrl: "https://github.com/example/ecotrack",
      featured: true,
    },
    {
      id: "project-5",
      title: "Pulse - Spatial Audio & Podcast App",
      category: "UI/UX Design",
      description: {
        en: "Deep-dark theme music and podcast player designed with glassmorphic cards, dynamic album waves, and swipeable queues.",
        km: "កម្មវិធីស្តាប់តន្ត្រី និងផតខាសបែបទំនើប រចនាលើផ្ទាំងពណ៌ខ្មៅរលោង មានរលកសម្លេងឌីណាមិក។",
      },
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      tags: ["Figma", "Audio UI", "iOS 18 Guidelines", "Motion"],
      liveUrl: "https://example.com/pulse-app",
      githubUrl: null,
      featured: false,
    },
    {
      id: "project-6",
      title: "TeleHealth Patient Consultation Suite",
      category: "UI/UX Design",
      description: {
        en: "End-to-end medical booking and video consultation interface designed with maximum accessibility for all age demographics.",
        km: "ផ្ទាំងកម្មវិធីវេជ្ជសាស្ត្រសម្រាប់ការកក់ម៉ោង និងជួបពិគ្រោះជំងឺតាមវីដេអូប្រកបដោយភាពងាយស្រួល។",
      },
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      tags: ["Healthcare", "UI/UX", "Accessibility", "Figma"],
      liveUrl: "https://example.com/telehealth",
      githubUrl: null,
      featured: false,
    },
    {
      id: "project-7",
      title: "Roast - Artisan Coffee Brand & Packaging",
      category: "Branding",
      description: {
        en: "Complete visual identity, packaging bags, typography guidelines, and digital menu assets for a premier coffee roastery.",
        km: "ការរចនាអត្តសញ្ញាណម៉ាកយីហោ ការវេចខ្ចប់កញ្ចប់កាហ្វេ និងស្លាកសញ្ញាសម្រាប់ហាងកាហ្វេពិសេស។",
      },
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      tags: ["Branding", "Illustrator", "Packaging", "Print"],
      liveUrl: "https://example.com/roast-coffee",
      githubUrl: null,
      featured: true,
    },
    {
      id: "project-8",
      title: "Botanica Organic Skincare Identity",
      category: "Branding",
      description: {
        en: "Eco-friendly cosmetic label design, sustainable glass bottle mockups, and earthy palette brand guidelines.",
        km: "ការរចនាម៉ាកយីហោគ្រឿងសម្អាងធម្មជាតិ ការវេចខ្ចប់ដបកែវប្រណិត និងការកំណត់កូដពណ៌ម៉ាក។",
      },
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      tags: ["Packaging", "Brand Identity", "Photoshop", "3D Render"],
      liveUrl: "https://example.com/botanica",
      githubUrl: null,
      featured: false,
    },
    {
      id: "project-9",
      title: "Kroma Creative Digital Agency Rebrand",
      category: "Branding",
      description: {
        en: "Dynamic gradient branding, business collateral, presentation decks, and web identity for an international media firm.",
        km: "ការកែប្រែប្រព័ន្ធម៉ាកយីហោថ្មីសម្រាប់ក្រុមហ៊ុនច្នៃប្រឌិត រួមមាននាមប័ណ្ណ និងទម្រង់បទបង្ហាញ។",
      },
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
      tags: ["Brand Book", "Typography", "Vector Logo", "Illustrator"],
      liveUrl: "https://example.com/kroma",
      githubUrl: null,
      featured: false,
    },
    {
      id: "project-10",
      title: "Urban Architecture & Cyber Neon Series",
      category: "Photography",
      description: {
        en: "Night-time long exposure photography capturing modern city architecture, neon reflections, and geometric compositions.",
        km: "ស្នាដៃថតរូបស្ថាបត្យកម្មទីក្រុងពេលរាត្រី និងពន្លឺភ្លើងពណ៌បែបទំនើប (Long exposure photography)។",
      },
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
      tags: ["Sony A7IV", "35mm f/1.4", "Lightroom", "Urban"],
      liveUrl: "https://example.com/urban-photo",
      githubUrl: null,
      featured: true,
    },
    {
      id: "project-11",
      title: "Khmer Cultural Heritage & Portraits",
      category: "Photography",
      description: {
        en: "Cultural documentary portraits capturing traditional artisans, dance performers, and timeless heritage landscapes.",
        km: "កម្រងរូបថតបែបឯកសារវប្បធម៌ បង្ហាញពីសិល្បករប្រពៃណី និងបេតិកភណ្ឌដ៏វិសេសវិសាល។",
      },
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
      tags: ["Portraiture", "85mm f/1.4", "Natural Light", "Editorial"],
      liveUrl: "https://example.com/heritage-photo",
      githubUrl: null,
      featured: true,
    },
    {
      id: "project-12",
      title: "Commercial Watch & Jewelry Studio Shoot",
      category: "Photography",
      description: {
        en: "Macro commercial product photography featuring luxury watches and jewelry with precision optical reflections.",
        km: "ការថតរូបផលិតផលពាណិជ្ជកម្មកម្រិត Macro សម្រាប់នាឡិកា និងគ្រឿងអលង្ការប្រណិតក្នុង Studio។",
      },
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      tags: ["Macro", "Studio Lighting", "Retouching", "Commercial"],
      liveUrl: "https://example.com/jewelry-shoot",
      githubUrl: null,
      featured: false,
    },
    {
      id: "project-13",
      title: "Cinematic Documentary & Commercial Reel",
      category: "Video & Motion",
      description: {
        en: "Color grading, sound engineering, and dynamic narrative video editing for global enterprise brand campaigns.",
        km: "ការកាត់តវីដេអូពាណិជ្ជកម្ម កែពណ៌ និងតាក់តែងសម្លេងបែបភាពយន្តសម្រាប់យុទ្ធនាការផ្សព្វផ្សាយ។",
      },
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      tags: ["Premiere Pro", "DaVinci Resolve", "Color Grading", "4K"],
      liveUrl: "https://example.com/commercial-reel",
      githubUrl: null,
      featured: true,
    },
    {
      id: "project-14",
      title: "3D Product Visualization & Kinetic Motion",
      category: "Video & Motion",
      description: {
        en: "Photorealistic 3D product motion graphics showcasing internal mechanics, light sweeps, and particle explosions.",
        km: "វីដេអូ Motion Graphic 3D បង្ហាញពីរចនាសម្ព័ន្ធខាងក្នុងនៃផលិតផលអេឡិចត្រូនិចទំនើប។",
      },
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      tags: ["Blender", "After Effects", "Octane Render", "Motion 3D"],
      liveUrl: "https://example.com/3d-product",
      githubUrl: null,
      featured: false,
    },
    {
      id: "project-15",
      title: "Music Festival & Live Event Aftermovie",
      category: "Video & Motion",
      description: {
        en: "Fast-paced, rhythm-synced event aftermovie with drone fly-throughs, speed ramps, and crowd energy capture.",
        km: "វីដេអូសង្ខេបព្រឹត្តិការណ៍តន្ត្រីផ្ទាល់ មានប្លង់ Flycam និងចង្វាក់កាត់តញាក់កន្ត្រាក់អារម្មណ៍។",
      },
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
      tags: ["Event Video", "FPV Drone", "Premiere Pro", "Speed Ramp"],
      liveUrl: "https://example.com/festival-reel",
      githubUrl: null,
      featured: false,
    },
    {
      id: "project-16",
      title: "Nexus SaaS Cloud Management Portal",
      category: "Web App",
      description: {
        en: "Multi-tenant cloud infrastructure monitoring platform with cluster health checks, alerts, and billing analytics.",
        km: "ផ្ទាំងគ្រប់គ្រងប្រព័ន្ធ Cloud Infrastructure សម្រាប់តាមដាន Server និងការចំណាយរបស់ក្រុមហ៊ុន។",
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Tailwind", "REST APIs"],
      liveUrl: "https://example.com/nexus-cloud",
      githubUrl: "https://github.com/example/nexus-cloud",
      featured: false,
    },
  ],

  // 6. CAREER TIMELINE
  experience: [
    {
      period: "2023 - Present",
      role: { en: "Lead Product Designer & Tech Lead", km: "ប្រធានផ្នែករចនាផលិតផល និងដឹកនាំបច្ចេកវិទ្យា" },
      company: "Nexus Creative Studio",
      description: {
        en: "Led UI/UX redesigns and front-end architecture for over 25+ international client web apps with 40% conversion uplift.",
        km: "ដឹកនាំការរចនា UI/UX និងរៀបចំកូដ Frontend សម្រាប់គេហទំព័រអតិថិជនអន្តរជាតិជាង ២៥ គម្រោង។",
      },
    },
    {
      period: "2021 - 2023",
      role: { en: "Senior Frontend Developer", km: "អ្នកបង្កើតគេហទំព័រ Senior Frontend" },
      company: "Innovate Tech Agency",
      description: {
        en: "Engineered responsive, accessible web portals and reusable component libraries using React and Tailwind CSS.",
        km: "បង្កើតគេហទំព័រដែលឆ្លើយតបគ្រប់អេក្រង់ និងបង្កើតបណ្ណាល័យ Component ប្រើឡើងវិញបានដោយ React & Tailwind។",
      },
    },
    {
      period: "2019 - 2021",
      role: { en: "Creative Director & Visual Storyteller", km: "អ្នកដឹកនាំច្នៃប្រឌិត & ផលិតរូបភាព" },
      company: "Apex Media",
      description: {
        en: "Produced visual identities, social campaigns, and commercial photo/video media for top local consumer brands.",
        km: "រចនាម៉ាកយីហោ មាតិកាផ្សព្វផ្សាយសង្គម និងផលិតរូបភាព/វីដេអូសម្រាប់ម៉ាកយីហោល្បីៗក្នុងស្រុក។",
      },
    },
  ],

  // 7. SOCIAL LINKS & DIRECT CONTACTS
  socials: {
    telegram: "https://t.me/yourusername",
    facebook: "https://facebook.com/yourbrand",
    phone: "+855 12 345 678",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    x: "https://x.com/yourusername",
    calendly: "https://calendly.com/yourusername/30min",
    email: "alex@example.com",
  },

  // 8. NOTIFICATION SETTINGS
  contactSettings: {
    enableTelegramAlert: true,
    telegramBotToken: "YOUR_BOT_TOKEN",
    telegramChatId: "YOUR_CHAT_ID",
    enableWeb3Forms: false,
    web3FormsAccessKey: "YOUR_ACCESS_KEY",
  },

  // 9. UI LABELS
  labels: {
    en: {
      nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Timeline", contact: "Contact" },
      hero: {
        greeting: "HELLO THERE, I'M",
        ctaContact: "Get in Touch",
        ctaWork: "Explore 16+ Projects",
        downloadCv: "Download CV",
        bookCall: "Book a 1-on-1 Call",
        scroll: "SCROLL TO EXPLORE",
      },
      about: {
        heading: "About Me",
        subheading: "A passionate blend of design aesthetics and high-grade software architecture.",
        yearsExp: "Years of Experience",
        projectsDone: "Projects Delivered",
      },
      skills: {
        heading: "Skills & Capabilities",
        subheading: "Modern tools and frameworks I use to bring vision into reality.",
      },
      projects: {
        heading: "Featured Portfolio",
        subheading: "Explore 16+ selected projects across Web Apps, UI/UX, Branding, Photography & Video.",
        filterAll: "All Projects",
        viewDemo: "Live Preview",
        viewCode: "Source Code",
        viewDetails: "Details",
      },
      experience: {
        heading: "Career Journey",
        subheading: "Track record of delivering real value for innovative teams and clients.",
      },
      contact: {
        heading: "Let's Build Something Great",
        subheading: "Have a project in mind or looking for collaboration? Reach out anytime!",
        telegramQuick: "Direct Telegram Chat",
        calendlyQuick: "Schedule a Video Call",
        callNow: "Direct Call",
        formName: "Your Name",
        formEmail: "Your Email or Telegram",
        formMessage: "Tell me about your project...",
        submitBtn: "Send Message",
        sending: "Sending...",
        successMsg: "Thank you! Your message has been sent successfully. I'll get back to you shortly!",
        errorMsg: "Oops! Failed to send. Please reach out to me directly via Telegram or Email.",
      },
      footer: {
        rights: "All rights reserved.",
        builtWith: "Crafted with React & Tailwind CSS",
      },
    },
    km: {
      nav: { about: "អំពីខ្ញុំ", skills: "ជំនាញ", projects: "ស្នាដៃ", experience: "បទពិសោធន៍", contact: "ទំនាក់ទំនង" },
      hero: {
        greeting: "សួស្តី! ខ្ញុំបាទឈ្មោះ",
        ctaContact: "ទាក់ទងមកខ្ញុំ",
        ctaWork: "មើលស្នាដៃទាំង ១៦+",
        downloadCv: "ទាញយក CV",
        bookCall: "កក់ការសន្ទនា (Call)",
        scroll: "អូសចុះក្រោមដើម្បីស្វែងយល់",
      },
      about: {
        heading: "អំពីខ្លួនខ្ញុំ",
        subheading: "ការរួមបញ្ចូលគ្នារវាងសោភ័ណភាពនៃការរចនា និងវិស្វកម្មសូហ្វវែរគុណភាពខ្ពស់។",
        yearsExp: "ឆ្នាំនៃបទពិសោធន៍",
        projectsDone: "គម្រោងដែលបានបញ្ចប់",
      },
      skills: {
        heading: "ជំនាញ និងបច្ចេកវិទ្យា",
        subheading: "ឧបករណ៍ និងបច្ចេកវិទ្យាទំនើបៗដែលខ្ញុំប្រើប្រាស់ដើម្បីបង្កើតស្នាដៃ។",
      },
      projects: {
        heading: "ស្នាដៃគំរូទាំង ១៦+",
        subheading: "ស្វែងយល់ពីគម្រោងចម្រុះរួមមាន Web Apps, UI/UX, ម៉ាកយីហោ, រូបថត និងវីដេអូ។",
        filterAll: "ទាំងអស់",
        viewDemo: "មើលគំរូផ្ទាល់",
        viewCode: "កូដប្រភព",
        viewDetails: "មើលលម្អិត",
      },
      experience: {
        heading: "ប្រវត្តិការងារ និងបទពិសោធន៍",
        subheading: "ការផ្ដល់ជូនលទ្ធផលពិតប្រាកដសម្រាប់អតិថិជន និងស្ថាប័ននានា។",
      },
      contact: {
        heading: "តោះចាប់ផ្ដើមគម្រោងរបស់អ្នក",
        subheading: "តើអ្នកមានគម្រោងចង់ធ្វើ ឬត្រូវការជំនួយមែនទេ? អាចទាក់ទងមកខ្ញុំបានគ្រប់ពេល!",
        telegramQuick: "ជជែកតាម Telegram ផ្ទាល់",
        calendlyQuick: "កក់ម៉ោងជជែកផ្ទាល់",
        callNow: "ទូរស័ព្ទផ្ទាល់",
        formName: "ឈ្មោះរបស់អ្នក",
        formEmail: "អ៊ីមែល ឬ Telegram របស់អ្នក",
        formMessage: "រៀបរាប់ពីគម្រោង ឬតម្រូវការរបស់អ្នក...",
        submitBtn: "ផ្ញើសារឥឡូវនេះ",
        sending: "កំពុងផ្ញើ...",
        successMsg: "សូមអរគុណ! សាររបស់អ្នកត្រូវបានផ្ញើជោគជ័យ។ ខ្ញុំនឹងឆ្លើយតបជូនយ៉ាងឆាប់រហ័ស!",
        errorMsg: "សូមអភ័យទោស! មានបញ្ហាក្នុងការផ្ញើ។ សូមទាក់ទងមកខ្ញុំផ្ទាល់តាម Telegram ឬ Email។",
      },
      footer: {
        rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
        builtWith: "បង្កើតឡើងដោយ React & Tailwind CSS",
      },
    },
  },
};
