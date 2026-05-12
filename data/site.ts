export type Program = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  metric: string;
  region: string;
  image: string;
  goal: number;
  raised: number;
  impact: Array<{ label: string; value: string }>;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/donate", label: "Donate" }
];

export const programs: Program[] = [
  {
    slug: "bright-futures-classrooms",
    title: "Bright Futures Classrooms",
    category: "Education",
    summary:
      "Safe, solar-powered learning hubs with trained teachers, tablets, and after-school tutoring for children in remote districts.",
    description:
      "Bright Futures Classrooms helps children stay in school by pairing resilient learning spaces with locally trained educators, digital lessons, meals, and family support. Each classroom is designed to keep operating through power cuts and seasonal disruption.",
    metric: "18,400 students supported",
    region: "Kenya, Nepal, Guatemala",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80",
    goal: 180000,
    raised: 126500,
    impact: [
      { label: "Classrooms opened", value: "42" },
      { label: "Girls enrolled", value: "54%" },
      { label: "Attendance lift", value: "+31%" }
    ]
  },
  {
    slug: "her-rise-collectives",
    title: "Her Rise Collectives",
    category: "Women",
    summary:
      "Community-led savings circles, legal support, and business coaching for women building resilient household income.",
    description:
      "Her Rise Collectives funds locally led groups where women access startup grants, leadership training, childcare stipends, and market connections. The program focuses on safety, confidence, and durable income growth.",
    metric: "7,900 women launched ventures",
    region: "Rwanda, Bangladesh, Colombia",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80",
    goal: 145000,
    raised: 102800,
    impact: [
      { label: "Income increase", value: "2.8x" },
      { label: "Savings circles", value: "310" },
      { label: "Mentors trained", value: "860" }
    ]
  },
  {
    slug: "care-within-reach",
    title: "Care Within Reach",
    category: "Healthcare",
    summary:
      "Mobile clinics and telehealth referrals bringing essential care, maternal support, and medicine to underserved families.",
    description:
      "Care Within Reach equips nurses and community health workers with mobile clinic kits, diagnostic tools, and referral pathways. Donor funding helps cover medicine, transportation, prenatal visits, and follow-up care.",
    metric: "96,000 consultations delivered",
    region: "Ghana, Jordan, Philippines",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80",
    goal: 220000,
    raised: 171400,
    impact: [
      { label: "Clinic days", value: "1,220" },
      { label: "Mothers reached", value: "14,300" },
      { label: "Referral completion", value: "88%" }
    ]
  },
  {
    slug: "water-first-network",
    title: "Water First Network",
    category: "Water",
    summary:
      "Clean water systems, repair teams, and hygiene education built with villages so wells keep working year after year.",
    description:
      "Water First Network installs gravity-fed systems, repairs wells, and trains local water committees. The model prioritizes community ownership, transparent maintenance funds, and rapid repairs when systems fail.",
    metric: "312 water points restored",
    region: "Ethiopia, Cambodia, Honduras",
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1600&q=80",
    goal: 160000,
    raised: 93500,
    impact: [
      { label: "People served", value: "118K" },
      { label: "Repair response", value: "72 hrs" },
      { label: "School taps", value: "89" }
    ]
  },
  {
    slug: "rapid-relief-ready",
    title: "Rapid Relief Ready",
    category: "Relief",
    summary:
      "Pre-positioned supplies, local response grants, and cash assistance for families recovering from climate shocks.",
    description:
      "Rapid Relief Ready moves resources before headlines fade. Local partners receive emergency cash, water filters, shelter kits, and trauma-informed support so families can stabilize quickly after floods, storms, and displacement.",
    metric: "52 emergency grants funded",
    region: "Global response network",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80",
    goal: 250000,
    raised: 198200,
    impact: [
      { label: "Families stabilized", value: "34K" },
      { label: "Local partners", value: "74" },
      { label: "Avg. grant speed", value: "36 hrs" }
    ]
  }
];

export const impactStats = [
  { value: "1.8M", label: "people reached since 2014" },
  { value: "42", label: "country partner network" },
  { value: "91%", label: "program spend ratio" },
  { value: "$38M", label: "community grants delivered" }
];

export const testimonials = [
  {
    quote:
      "Lumora reports impact with rare clarity. We can see exactly how each grant moves from donation to durable local outcomes.",
    name: "Maya Singh",
    role: "Foundation partner"
  },
  {
    quote:
      "The classroom hub changed how our children imagine their future. It brought teachers, light, books, and belief.",
    name: "Amina K.",
    role: "Parent leader, Kenya"
  }
];

export const partners = ["NOVA Aid", "ClearPath Health", "CivicTrust", "WomenLead", "OpenWater Lab"];

export const timeline = [
  {
    year: "2014",
    title: "Local partners first",
    text: "Lumora launched with five community organizations and a commitment to fund locally led solutions."
  },
  {
    year: "2017",
    title: "Transparency standard",
    text: "Every program began publishing quarterly outcomes, funding progress, and third-party financial reviews."
  },
  {
    year: "2021",
    title: "Rapid response network",
    text: "Emergency funds were pre-positioned across partner regions to move support within days, not months."
  },
  {
    year: "2026",
    title: "Impact at scale",
    text: "Lumora now supports integrated programs across education, care, income, clean water, and relief."
  }
];

export const team = [
  {
    name: "Elena Marquez",
    role: "Executive Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Samuel Okoro",
    role: "Global Programs Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Priya Raman",
    role: "Transparency & Finance",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
  }
];
