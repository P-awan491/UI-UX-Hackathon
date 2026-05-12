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
    title: "Clean Water for Remote Villages",
    shortDescription: "Providing sustainable solar-powered water filtration systems to underserved regions.",
    fullDescription: "Access to clean water is the first step out of poverty. Our solar-powered filtration systems provide safe drinking water to over 50,000 people across 12 regions, reducing water-borne diseases by 85% in the first year alone.",
    image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1000&auto=format&fit=crop",
    impactMetric: "50,000+ People Served",
    goal: 150000,
    raised: 112500,
    category: "Health & Water"
  },
  {
    id: "digital-literacy-program",
    title: "The Future of Digital Education",
    shortDescription: "Equipping rural schools with solar-powered computer labs and global curriculum.",
    fullDescription: "We bridge the digital divide by building state-of-the-art computer labs in regions with no electricity. Our curriculum focuses on coding, digital literacy, and remote work skills, preparing the next generation for the global economy.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
    impactMetric: "12 Labs Established",
    goal: 200000,
    raised: 145000,
    category: "Education"
  },
  {
    id: "rural-healthcare-mobile",
    title: "Mobile Health & Surgical Units",
    shortDescription: "Bringing primary healthcare and life-saving surgeries to hard-to-reach areas.",
    fullDescription: "Our mobile units are essentially hospitals on wheels. We provide everything from basic maternal care to emergency dental work and minor surgeries in areas where the nearest hospital is a 3-day walk away.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    impactMetric: "5,000+ Surgeries Performed",
    goal: 300000,
    raised: 180000,
    category: "Emergency Care"
  },
  {
    id: "green-canopy-project",
    title: "The Green Canopy Initiative",
    shortDescription: "Combatting soil erosion and climate change through community-led reforestation.",
    fullDescription: "Climate change hits the most vulnerable first. We partner with local farmers to plant 1 million indigenous trees, restoring local microclimates and providing sustainable income through agroforestry.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop",
    impactMetric: "450k+ Trees Planted",
    goal: 100000,
    raised: 75000,
    category: "Environment"
  }
];

export const impactStats = [
  { label: "Lives Transformed", value: "250", valueSuffix: "k+" },
  { label: "Active Countries", value: "24", valueSuffix: "" },
  { label: "Efficiency Rating", value: "94", valueSuffix: "%" },
  { label: "Total Support", value: "$4.5", valueSuffix: "M" }
];

export const testimonials = [
  {
    quote: "Our village used to spend 4 hours a day just fetching water. Now, with the solar pump, our children are in school and our crops are thriving. Everything has changed.",
    author: "Aminata B.",
    role: "Community Leader, Senegal",
    avatar: "https://i.pravatar.cc/150?u=aminata"
  },
  {
    quote: "EcoImpact doesn't just give handouts; they give tools and training. They empowered me to start my own digital services business right here in my rural community.",
    author: "Rajesh K.",
    role: "Local Entrepreneur, India",
    avatar: "https://i.pravatar.cc/150?u=rajesh"
  }
];

export const partners = [
  { name: "Unicef", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/UNICEF_logo.svg" },
  { name: "Global Giving", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/GlobalGiving_Logo.svg/1200px-GlobalGiving_Logo.svg.png" },
  { name: "WHO", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/WHO_logo.svg" },
  { name: "WWF", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/WWF_logo.svg" }
];
