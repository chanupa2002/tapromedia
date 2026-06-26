import {
  BarChart3,
  Camera,
  Compass,
  Megaphone,
  PenSquare,
  Speech,
  Users,
} from "lucide-react";

export const brand = {
  name: "TAPRO MEDIA",
  label: "Digital Marketing Agency",
  slogan: "A Brand Deserves a Story",
  email: "tapromedia.sl@gmail.com",
  phone: "+94 76 699 2183",
  phoneHref: "tel:+94766992183",
  secondaryPhone: "+94 74 298 0182",
  secondaryPhoneHref: "tel:+94742980182",
  instagram: "https://www.instagram.com/_cortex00_/?hl=en",
  linkedin: "https://www.linkedin.com/company/corte-x2833/?viewAsMember=true",
  logo: "/tapro-logo.png",
};

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "A Brand Deserves a Story",
  title: "We turn brand identity into digital presence people remember.",
  description:
    "Tapro Media is a digital marketing agency for brands that want to show up with more clarity, consistency, and character. We combine strategy, social media management, personal brand development, and content creation into work that feels distinctive and aligned.",
  primaryCta: {
    label: "Start a project",
    href: "#contact",
  },
  secondaryCta: {
    label: "See our services",
    href: "#services",
  },
  highlights: [
    "Digital marketing",
    "Social media management",
    "Personal brand management",
    "Content creation",
  ],
  checklist: [
    "Strategy aligned with your brand positioning",
    "Content systems designed for consistency",
    "Execution shaped for trust, reach, and growth",
  ],
};

export const processSteps = [
  {
    icon: Compass,
    number: "01",
    title: "Audit",
    subtitle: "We assess your brand presence, audience behavior, and content gaps.",
  },
  {
    icon: PenSquare,
    number: "02",
    title: "Align",
    subtitle: "We refine the voice, message, and visual direction before rollout.",
  },
  {
    icon: Camera,
    number: "03",
    title: "Create",
    subtitle: "We build content and campaign assets that look sharp and feel intentional.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Scale",
    subtitle: "We review performance, optimize consistently, and strengthen what is working.",
  },
];

export const aboutContent = {
  eyebrow: "How we work",
  title: "A focused process for brands that want clarity, consistency, and long-term relevance.",
  description:
    "Tapro Media keeps the work clean on the surface and disciplined underneath. We do not rely on noise or generic trends. Every direction is built around brand fit, audience connection, and sustained digital presence.",
  focusAreas: [
    "Brand voice and identity alignment",
    "Monthly social and content planning",
    "Campaigns shaped for modern digital channels",
    "Performance reviews that inform the next move",
  ],
};

export const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Build a stronger digital presence with strategy that supports your offers, audience, and long-term growth direction.",
    features: [
      "Campaign direction",
      "Audience and offer alignment",
      "Positioning support",
      "Performance-minded planning",
    ],
  },
  {
    icon: Speech,
    title: "Social Media Management",
    description:
      "Maintain a more refined and consistent presence across platforms with planning, coordination, and execution that stays on-brand.",
    features: [
      "Content calendars",
      "Posting coordination",
      "Channel-specific optimization",
      "Brand consistency across platforms",
    ],
  },
  {
    icon: Users,
    title: "Personal Brand Management",
    description:
      "Help founders, professionals, and public-facing teams show up with more authority, personality, and trust.",
    features: [
      "Message refinement",
      "Personal positioning",
      "Thought-leadership planning",
      "Audience trust building",
    ],
  },
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Create visual and written assets that make your brand look current, credible, and memorable wherever people discover you.",
    features: [
      "Short-form content concepts",
      "Visual storytelling direction",
      "Branded creative assets",
      "Content designed for engagement",
    ],
  },
];

export const serviceShowcase = [
  {
    title: "Direction",
    text: "Clear planning, message alignment, and creative priorities before execution begins.",
  },
  {
    title: "Execution",
    text: "Disciplined content delivery, campaign rollout, and visual consistency across touchpoints.",
  },
  {
    title: "Refinement",
    text: "Performance reviews and strategic adjustments that keep the brand moving forward.",
  },
];

export const footerGroups = {
  Navigate: navigationLinks,
  Services: services.map((service) => ({
    name: service.title,
    href: "#services",
  })),
  Contact: [
    { name: brand.email, href: `mailto:${brand.email}` },
    { name: brand.phone, href: brand.phoneHref },
    { name: brand.secondaryPhone, href: brand.secondaryPhoneHref },
    { name: "Instagram", href: brand.instagram },
  ],
};
