export interface LocationData {
  slug: string;
  name: string;
  zone: 'Main Thane' | 'Thane West / Central' | 'Ghodbunder Road' | 'Thane East & Kalwa' | 'Premium Project Areas';
  pincode: string;
  landmarks: string[];
  description: string;
  localContext: string;
  residentialContext: string;
  commonIssues: string[];
  nearbyLocalities: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'Service' | 'Repair' | 'Installation' | 'Maintenance' | 'Gas' | 'Specialized';
  priceStarting: number;
  features: string[];
  commonProblems: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  image?: string;
  imageAlt?: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
  tips: string[];
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  locality: string;
  address: string;
  acType: 'Split AC' | 'Window AC' | 'Inverter Split AC' | 'Commercial / Cassette AC' | 'Multi-Split AC';
  serviceType: string;
  problemDescription: string;
  preferredDate: string;
  preferredSlot: string;
}

export type PageRoute = 
  | { type: 'home' }
  | { type: 'service'; slug: string }
  | { type: 'services-list' }
  | { type: 'location'; slug: string }
  | { type: 'locations-list' }
  | { type: 'about' }
  | { type: 'contact' }
  | { type: 'blog-list' }
  | { type: 'blog-detail'; slug: string }
  | { type: 'faq' }
  | { type: 'pricing' }
  | { type: 'privacy' }
  | { type: 'terms' }
  | { type: 'disclaimer' }
  | { type: 'sitemap' };
