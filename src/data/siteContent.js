import {
  Globe,
  Palette,
  PenSquare,
  UserRound,
} from "lucide-react";

export const brand = {
  name: "TAPRO MEDIA",
  label: "",
  slogan: "A Brand Deserves a Story",
  email: "tapromedia.sl@gmail.com",
  phone: "+94 74 298 0182",
  phoneHref: "tel:+94742980182",
  secondaryPhone: "+94 76 699 2183",
  secondaryPhoneHref: "tel:+94766992183",
  address: "453, Eriyawetiya, Kelaniya",
  facebook: "https://web.facebook.com/profile.php?id=61591123004525",
  instagram: "https://www.instagram.com/tapro.media/?hl=en",
  linkedin:
    "https://www.linkedin.com/company/tapro-media/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BKhJhwOJ4T1C7ZwzyJeXJFA%3D%3D",
  logo: "/tapro-logo.png",
};

export const navigationLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
];

export const heroContent = {
  eyebrow: "",
  title: "Your story is the strategy.",
  emphasis: "We tell it right.",
  description:
    "Branding, personal brand, web design, and social media built around one thing: a story your audience cannot ignore.",
  primaryCta: {
    label: "Start your story",
    href: "#contact",
  },
  secondaryCta: {
    label: "See our work",
    href: "#work",
  },
};

export const tickerItems = [
  "Brand Identity",
  "Personal Branding",
  "Web Design",
  "Social Media",
  "Storytelling",
];

export const stats = [
  { value: "Many", label: "Clients we've proudly partnered with" },
  { value: "100%", label: "Done for you - zero templates" },
  { value: "4", label: "Core services, one unified story" },
  { value: "Infinite", label: "Stories still left to tell" },
];

export const services = [
  {
    icon: Palette,
    number: "01",
    title: "Brand Identity",
    description:
      "The look, feel, and voice of everything you put into the world.",
  },
  {
    icon: UserRound,
    number: "02",
    title: "Personal Branding",
    description:
      "Turn who you are into your most powerful business asset.",
  },
  {
    icon: Globe,
    number: "03",
    title: "Web Design",
    description:
      "A site that converts because it connects, not because it tricks.",
  },
  {
    icon: PenSquare,
    number: "04",
    title: "Social Media",
    description:
      "Consistent presence that builds trust before a word is spoken.",
  },
];

export const storyContent = {
  eyebrow: "About",
  title: "The brands that win aren't the loudest.",
  emphasis: "They're the clearest.",
  paragraphs: [
    "Most brands fail not because their product is bad, but because no one understands what they stand for. We fix that.",
    "We go deep into who you are, what you believe, and who you're trying to reach. Then we build everything, visually and verbally, around that truth.",
  ],
  quote:
    "We started Tapro Media because we kept seeing brilliant people being invisible. The work was great. The story was missing.",
  quoteAttribution: "Tapro Media, founders",
};

export const clients = [
  {
    name: "Western Province Aesthetic Resort",
    logo: "/client-wpar.png",
    imageClassName: "h-28 w-auto object-contain opacity-90 sm:h-32",
  },
  {
    name: "Mochiato",
    logo: "/client-mochiato.png",
    imageClassName: "h-20 w-auto object-contain opacity-95 sm:h-24",
  },
  {
    name: "Blue Moon Events",
    logo: "/client-bluemoon.png",
    imageClassName: "h-22 w-auto object-contain opacity-92 sm:h-26",
  },
  {
    name: "My Cargo UAE",
    logo: "/client-mycargo.png",
    imageClassName: "h-18 w-auto object-contain opacity-95 sm:h-20",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "We listen first",
    description:
      "A free call where we ask the questions most people skip. Who are you really? Who do you want to reach? What does success actually look like?",
  },
  {
    number: "02",
    title: "We find your story",
    description:
      "We dig into your brand's truth, the thing that makes you different and worth remembering. Everything we build comes from this.",
  },
  {
    number: "03",
    title: "We build it together",
    description:
      "From your visual identity to your website to your social presence, created with you, not handed off to you. Revisions until it's right.",
  },
  {
    number: "04",
    title: "You show up differently",
    description:
      "With a brand that's finally coherent, a story your audience gets, and a team still in your corner as you grow.",
  },
];

export const ctaContent = {
  title: "Every great brand starts with one honest conversation.",
  subtitle:
    "No pitch decks. No pressure. Just a real talk about where you are and where you want to go.",
  primaryCta: {
    label: "Book your free call",
    href: "#contact",
  },
};
