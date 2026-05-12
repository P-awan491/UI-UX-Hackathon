export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  impactMetric: string;
  goal: number;
  raised: number;
  category: string;
}

export const programs: Program[] = [
  {
    id: "clean-water-initiative",
    title: "Clean Water for All",
    shortDescription: "Providing sustainable solar-powered water filtration systems to remote villages.",
    fullDescription: "Access to clean water is a fundamental human right. Our Clean Water for All initiative focuses on installing solar-powered filtration systems that provide safe drinking water to over 50,000 people across 12 regions. We also provide maintenance training to local community members to ensure long-term sustainability.",
    image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1000&auto=format&fit=crop",
    impactMetric: "15,000+ Liters/Day",
    goal: 150000,
    raised: 85000,
    category: "Water"
  },
  {
    id: "rural-healthcare-access",
    title: "Rural Healthcare Units",
    shortDescription: "Establishing mobile clinics to bring primary healthcare to underserved rural areas.",
    fullDescription: "Our mobile healthcare units travel to the most remote areas where hospitals are inaccessible. We provide primary care, maternal health services, and vaccinations. Each unit is equipped with basic diagnostic tools and staffed by dedicated medical professionals.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    impactMetric: "2,500 Patients/Month",
    goal: 200000,
    raised: 142000,
    category: "Health"
  },
  {
    id: "digital-literacy-program",
    title: "Future Skills Education",
    shortDescription: "Equipping schools with solar-powered computer labs and digital curriculum.",
    fullDescription: "In the digital age, tech literacy is essential. We build solar-powered computer labs in rural schools and provide a comprehensive digital curriculum. This program helps students bridge the digital divide and prepares them for the modern workforce.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
    impactMetric: "12 Schools Equipped",
    goal: 100000,
    raised: 65000,
    category: "Education"
  },
  {
    id: "reforestation-project",
    title: "Green Canopy Project",
    shortDescription: "Restoring local ecosystems by planting 1 million indigenous trees by 2027.",
    fullDescription: "Climate change affects the most vulnerable first. Our reforestation project works with local farmers to plant indigenous trees, restoring biodiversity and providing sustainable income through agroforestry. This initiative helps combat soil erosion and improves local microclimates.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop",
    impactMetric: "450,000 Trees Planted",
    goal: 80000,
    raised: 52000,
    category: "Environment"
  }
];

export const impactStats = [
  { label: "Communities Served", value: "150+", suffix: "" },
  { label: "Lives Impacted", value: "250", valueSuffix: "k+" },
  { label: "Volunteers Worldwide", value: "12", valueSuffix: "k" },
  { label: "Funds Raised", value: "$4.5", valueSuffix: "M" }
];

export const testimonials = [
  {
    quote: "The clean water system changed our village life. We no longer walk miles for water.",
    author: "Samuel K.",
    role: "Community Leader, Kenya",
    avatar: "https://i.pravatar.cc/150?u=samuel"
  },
  {
    quote: "EcoImpact doesn't just give resources; they empower us to manage them sustainably.",
    author: "Elena R.",
    role: "Teacher, Peru",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];
