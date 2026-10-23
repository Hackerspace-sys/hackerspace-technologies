export interface FounderData {
  name: string;
  title: string;
  company: string;
  tagline: string;
  intro: string;
  philosophy: string;
  photoPath: string;
  placeholderPath: string;
  biography: {
    origin: string;
    vision: string;
    approach: string;
    focusAreas: { title: string; description: string }[];
  };
  principles: { number: string; title: string; statement: string }[];
  socialLinks: { label: string; url: string }[];
}

export const founderData: FounderData = {
  name: "Lakshmi Krishna Attipatla",
  title: "Founder & Lead Architect",
  company: "HackerSpace Technologies",
  tagline: "Think independently. Build deliberately. Keep moving forward.",
  intro: "Lakshmi Krishna Attipatla founded HackerSpace Technologies with an ambition to build useful technology products and explore opportunities across software, digital platforms, and emerging industries.",
  philosophy: "Building meaningful technology requires looking past transient industry trends. Real value is created by identifying fundamental human and operational bottlenecks, designing useful experiences, and engineering robust, scalable systems that endure.",
  photoPath: "/images/founder/lakshmi-krishna.svg",
  placeholderPath: "/images/founder/lakshmi-krishna.svg",
  biography: {
    origin: "HackerSpace Technologies was conceived out of an obsession with hands-on invention — a conviction that small, highly focused teams armed with engineering discipline and relentless curiosity can build products that rival traditional institutions.",
    vision: "Rather than restricting HST to a single narrow vertical, Lakshmi Krishna established HST as a multi-disciplinary technology ecosystem. The company actively conceives and incubates initiatives ranging from high-throughput web software (SurveySpace) to urban clean mobility networks (TotoAdsIndia and Toto Motors).",
    approach: "Every venture is subjected to the same foundational standard: Does this solve a real, tangible problem? Can we engineer it to be significantly more reliable, accessible, and delightful than the status quo? If yes, we build it from the ground up.",
    focusAreas: [
      {
        title: "Product Architecture & Distributed Software",
        description: "Designing resilient web applications, data platforms, and behavioral utilities that scale efficiently with zero unnecessary complexity."
      },
      {
        title: "Clean Mobility & EV Ecosystems",
        description: "Exploring urban transit advertising, light electric vehicle manufacturing, and durable battery technologies tailored for real-world demands."
      },
      {
        title: "Intelligent Systems & Applied AI",
        description: "Investigating purposeful machine learning applications in specialized domains like legal information retrieval, document structuring, and analytics."
      }
    ]
  },
  principles: [
    {
      number: "01",
      title: "Think Independently",
      statement: "Question standard assumptions. Build from first principles rather than copying consensus templates or chasing fleeting hype cycles."
    },
    {
      number: "02",
      title: "Build Deliberately",
      statement: "Every line of code, every mechanical bracket, and every interface element must have an intentional reason for existing."
    },
    {
      number: "03",
      title: "Operate With Factual Integrity",
      statement: "Let the quality, speed, and reliability of the finished product speak for itself. Never fabricate achievements or hide behind corporate buzzwords."
    },
    {
      number: "04",
      title: "Keep Moving Forward",
      statement: "Invention is an iterative discipline. Test in the real world, learn from practical feedback, refine rapidly, and maintain momentum."
    }
  ],
  socialLinks: [
    { label: "Connect via HST", url: "/contact" }
    // Founder public profiles can be easily added here once supplied
  ]
};
