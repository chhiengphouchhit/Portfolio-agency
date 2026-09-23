/**
 * 4 DISTINCT PRODUCTION PORTFOLIO TEMPLATES
 * =========================================
 * 1. DESIGNER    - UI/UX & Creative Director (3D Avatar, Design Systems, Vibrant)
 * 2. DEVELOPER   - Full-Stack & Systems Engineer (Interactive Terminal, GitHub, Cyberpunk)
 * 3. PHOTOGRAPHER- Photographer & Filmmaker (Pich Samnang Style: Gear/Equipment, High-res visual gallery)
 * 4. STUDIO      - Faceless Minimalist Digital Agency (Monogram Logo, Corporate ROI, Luxury)
 */

export const portfolioTemplates = {
  // ==========================================
  // TEMPLATE 1: CREATIVE DESIGNER (UI/UX & Branding)
  // ==========================================
  designer: {
    id: "designer",
    name: { en: "Creative Designer", km: "អ្នករចនា UI/UX & ម៉ាកយីហោ" },
    icon: "Palette",
    heroStyle: "avatar",
    themeColor: "from-brand-500 to-cyan-500",
    accentBadge: "UI/UX & Art Direction",
    profile: {
      name: { en: "Alex Vathana", km: "អាឡិច វឌ្ឍនា" },
      title: { en: "UI/UX & Creative Art Director", km: "អ្នកដឹកនាំផ្នែករចនា UI/UX & សិល្បៈ" },
      tagline: {
        en: "Crafting delightful digital experiences through empathy and aesthetic precision.",
        km: "បង្កើតបទពិសោធន៍ឌីជីថលដ៏ទាក់ទាញ តាមរយៈសោភ័ណភាព និងការយល់ចិត្តអ្នកប្រើប្រាស់។",
      },
      bio: {
        en: "Specializing in design systems, mobile apps, and brand identity. Over 4+ years helping startups and international agencies build memorable products.",
        km: "ជំនាញពិសេសក្នុងការបង្កើត Design System កម្មវិធីទូរស័ព្ទ និងអត្តសញ្ញាណម៉ាកយីហោ ជួយឱ្យអាជីវកម្មរីកចម្រើន។",
      },
      avatarUrl: "/images/avatar.svg",
      status: { en: "🟢 Available for Design Sprints", km: "🟢 ទំនេរសម្រាប់ការរចនាគម្រោងថ្មីៗ" },
      location: { en: "Phnom Penh (Remote Worldwide)", km: "រាជធានីភ្នំពេញ (ទទួលការងារទូទាំងពិភពលោក)" },
      resumeUrl: "#contact",
    },
    stats: [
      { value: "4+", label: { en: "Years Experience", km: "ឆ្នាំបទពិសោធន៍" } },
      { value: "50+", label: { en: "Screens Designed", km: "ផ្ទាំង UI បានរចនា" } },
      { value: "99%", label: { en: "Client Rating", km: "ការពេញចិត្ត" } },
      { value: "< 24h", label: { en: "Turnaround Time", km: "ល្បឿនឆ្លើយតប" } },
    ],
    skills: [
      {
        category: { en: "UI/UX & Product", km: "ការរចនាផលិតផល និង UI" },
        items: ["Figma", "Design Systems", "Wireframing", "User Research", "Interactive Prototyping"],
      },
      {
        category: { en: "Visual & Motion", km: "សិល្បៈ និងចលនា" },
        items: ["Adobe Illustrator", "Photoshop", "After Effects", "Micro-Interactions", "3D Assets"],
      },
    ],
    filterCategories: ["All", "UI/UX Design", "Branding"],
  },

  // ==========================================
  // TEMPLATE 2: SOFTWARE DEVELOPER (Tech & Code)
  // ==========================================
  developer: {
    id: "developer",
    name: { en: "Tech Developer", km: "អ្នកអភិវឌ្ឍន៍សូហ្វវែរ (Dev)" },
    icon: "Code2",
    heroStyle: "terminal",
    themeColor: "from-emerald-400 to-teal-500",
    accentBadge: "Full-Stack Software Engineer",
    profile: {
      name: { en: "Dara Sovan", km: "ដារ៉ា សុវណ្ណ" },
      title: { en: "Senior Full-Stack & Cloud Engineer", km: "វិស្វករសូហ្វវែរ Full-Stack & Cloud" },
      tagline: {
        en: "Writing clean, scalable code that scales to millions of users.",
        km: "សរសេរកូដស្អាត មានសុវត្ថិភាព និងទ្រទ្រង់អ្នកប្រើប្រាស់រាប់លាននាក់។",
      },
      bio: {
        en: "Passionate about React, Next.js, Node.js, and cloud microservices. I turn complex architectures into high-performance web applications.",
        km: "ជំនាញច្បាស់លាស់លើ React, Next.js, Node.js និងប្រព័ន្ធ Cloud។ បង្កើតប្រព័ន្ធស្មុគស្មាញឱ្យដំណើរការលឿនដូចផ្លេកបន្ទោរ។",
      },
      status: { en: "🟢 Open for Full-Stack Contracts", km: "🟢 ទំនេរទទួលគម្រោងកូដគេហទំព័រ & App" },
      location: { en: "Phnom Penh // UTC+7", km: "រាជធានីភ្នំពេញ // UTC+7" },
      resumeUrl: "#contact",
    },
    terminal: {
      user: "dara@dev-box",
      path: "~/projects",
      commands: [
        { cmd: "whoami", output: "Full-Stack Software Engineer & Open Source Contributor" },
        { cmd: "tech-stack", output: "['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']" },
        { cmd: "uptime", output: "99.98% production reliability over 12 projects" },
        { cmd: "git commit", output: "'feat: launched scalable production architecture' 🚀" },
      ],
    },
    stats: [
      { value: "5+", label: { en: "Years Coding", km: "ឆ្នាំនៃការសរសេរកូដ" } },
      { value: "30+", label: { en: "Web Apps Shipped", km: "គេហទំព័របានបញ្ចប់" } },
      { value: "100%", label: { en: "Test Coverage", km: "គុណភាពកូដ" } },
      { value: "0ms", label: { en: "Downtime Goal", km: "ទំនុកចិត្តខ្ពស់" } },
    ],
    skills: [
      {
        category: { en: "Frontend Architecture", km: "កូដផ្នែកខាងមុខ (Frontend)" },
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "GraphQL"],
      },
      {
        category: { en: "Backend & Database", km: "កូដខាងក្រោយ & ទិន្នន័យ (Backend)" },
        items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Redis", "Docker & CI/CD"],
      },
    ],
    filterCategories: ["All", "Web App"],
  },

  // ==========================================
  // TEMPLATE 3: PHOTOGRAPHER & FILMMAKER (Pich Samnang Style)
  // ==========================================
  photographer: {
    id: "photographer",
    name: { en: "Photographer / Video", km: "អ្នកថតរូប & វីដេអូ (Media)" },
    icon: "Camera",
    heroStyle: "photo",
    themeColor: "from-amber-500 to-rose-500",
    accentBadge: "Cinematographer & Photographer",
    profile: {
      name: { en: "Pich Samnang", km: "ពេជ្រ សំណាង" },
      title: { en: "Commercial Photographer & Filmmaker", km: "អ្នកថតរូបពាណិជ្ជកម្ម និងផលិតភាពយន្ត" },
      tagline: {
        en: "Capturing emotional depth, light, and timeless human stories.",
        km: "ចាប់យករាល់អារម្មណ៍ ពន្លឺ និងរឿងរ៉ាវដ៏មានតម្លៃតាមរយៈកញ្ចក់កាមេរ៉ា។",
      },
      bio: {
        en: "Experienced in commercial brand visuals, portraiture, and 4K cinematic storytelling. Equipped with Sony cinema workflows.",
        km: "បទពិសោធន៍ក្នុងការផលិតរូបភាពផ្សព្វផ្សាយពាណិជ្ជកម្ម រូបថតបុគ្គល និងវីដេអូកម្រិត 4K ជាមួយប្រព័ន្ធកាមេរ៉ា Sony Cinema។",
      },
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      status: { en: "🟢 Available for Shoots & Events", km: "🟢 ទំនេរសម្រាប់កម្មវិធី និងការថតស្ប៉ត" },
      location: { en: "Phnom Penh, Cambodia", km: "រាជធានីភ្នំពេញ, កម្ពុជា" },
      resumeUrl: "#contact",
    },
    // Equipment List (just like Pich Samnang site!)
    equipment: [
      { name: "Sony A7 IV", detail: "4K 60p 10-Bit Cinematic System", icon: "Camera" },
      { name: "Sony GM 24-70mm f/2.8", detail: "Master Zoom Lens", icon: "Aperture" },
      { name: "Sony GM 85mm f/1.4", detail: "Portrait Prime Lens", icon: "Focus" },
      { name: "DJI Ronin RS3 Pro", detail: "Gimbal Stabilization", icon: "Video" },
      { name: "Godox Studio Lighting", detail: "Strobe & Continuous RGB", icon: "Sparkles" },
    ],
    stats: [
      { value: "4+", label: { en: "Years Shooting", km: "ឆ្នាំនៃការថត" } },
      { value: "100+", label: { en: "Commercial Shoots", km: "កម្មវិធីបានថត" } },
      { value: "4K", label: { en: "Cinema Grade", km: "គុណភាពភាពយន្ត" } },
      { value: "Sony", label: { en: "Alpha Workflows", km: "ឧបករណ៍ទំនើប" } },
    ],
    skills: [
      {
        category: { en: "Photography Genres", km: "ជំនាញថតរូប" },
        items: ["Portraiture", "Commercial Products", "Architecture", "Event Coverage", "Lighting"],
      },
      {
        category: { en: "Post-Production", km: "ការកាត់ត និងកែពណ៌" },
        items: ["Adobe Lightroom Classic", "Photoshop Retouching", "Premiere Pro", "DaVinci Resolve"],
      },
    ],
    filterCategories: ["All", "Photography", "Video & Motion"],
  },

  // ==========================================
  // TEMPLATE 4: DIGITAL STUDIO / AGENCY (Faceless Monogram)
  // ==========================================
  studio: {
    id: "studio",
    name: { en: "Agency / Studio", km: "ស្ទូឌីយោ / ក្រុមហ៊ុន (Studio)" },
    icon: "Building2",
    heroStyle: "logo",
    themeColor: "from-blue-500 to-indigo-600",
    accentBadge: "Independent Creative Agency",
    profile: {
      name: { en: "Nexus Creative Studio", km: "ណិចសឹស ស្ទូឌីយោ" },
      title: { en: "Full-Cycle Digital Agency & Design Firm", km: "ក្រុមហ៊ុនផ្ដល់ដំណោះស្រាយគេហទំព័រ និងម៉ាកយីហោ" },
      tagline: {
        en: "We design, develop, and scale industry-leading digital products for ambitious brands.",
        km: "យើងបង្កើត និងពង្រីកផលិតផលឌីជីថលលំដាប់ខ្ពស់ សម្រាប់ម៉ាកយីហោឈានមុខគេ។",
      },
      bio: {
        en: "An agile collective of developers, designers, and growth strategists delivering worldwide end-to-end digital transformation.",
        km: "ក្រុមការងារជំនាញរួមមានអ្នកសរសេរកូដ អ្នករចនា និងអ្នកយុទ្ធសាស្ត្រ ដែលផ្ដល់លទ្ធផលលើសពីការរំពឹងទុក។",
      },
      logoUrl: "/images/logo.svg",
      status: { en: "🟢 Accepting New Q3/Q4 Client Engagements", km: "🟢 កំពុងទទួលគម្រោងថ្មីៗសម្រាប់ត្រីមាសនេះ" },
      location: { en: "Phnom Penh & Worldwide (Remote)", km: "រាជធានីភ្នំពេញ & ដៃគូទូទាំងពិភពលោក" },
      resumeUrl: "#contact",
    },
    stats: [
      { value: "40+", label: { en: "Enterprise Projects", km: "គម្រោងក្រុមហ៊ុន" } },
      { value: "$2M+", label: { en: "Client Value Added", km: "តម្លៃបន្ថែមជូនភ្ញៀវ" } },
      { value: "100%", label: { en: "Delivery Rate", km: "ទំនួលខុសត្រូវ" } },
      { value: "24/7", label: { en: "Dedicated Support", km: "សេវាកម្មដិតដល់" } },
    ],
    skills: [
      {
        category: { en: "Agency Capabilities", km: "សេវាកម្មចម្បង" },
        items: ["Custom Web Development", "Brand Identity Systems", "SaaS Engineering", "Performance Audits"],
      },
      {
        category: { en: "Strategic Growth", km: "យុទ្ធសាស្ត្រអាជីវកម្ម" },
        items: ["Conversion Optimization", "SEO Strategy", "Technical Consulting", "Maintenance"],
      },
    ],
    filterCategories: ["All", "Web App", "UI/UX Design", "Branding"],
  },
};
