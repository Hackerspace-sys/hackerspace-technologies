export interface JobPosition {
  id: string;
  slug: string;
  title: string;
  department: 'Engineering' | 'Design & Product' | 'Mobility & Hardware' | 'Applied AI' | 'Operations';
  location: string;
  type: 'Full-time' | 'Contract' | 'Fellowship';
  experience: string;
  oneLiner: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  associatedVentures: string[];
}

export interface CareerPerk {
  title: string;
  description: string;
  tag: string;
}

export interface OperatingPrinciple {
  number: string;
  title: string;
  statement: string;
}

export const operatingPrinciples: OperatingPrinciple[] = [
  {
    number: "01",
    title: "Extreme Ownership & Zero Bureaucracy",
    statement: "We eliminate layers of middle management and endless alignment syncs. Builders own initiatives end-to-end—from architectural thesis to production code and operational uptime."
  },
  {
    number: "02",
    title: "Generational Horizon",
    statement: "Funded with 100% self-directed capital. We build durable, cash-flow-positive technology and infrastructure designed to endure decades, not hype-driven pitch decks."
  },
  {
    number: "03",
    title: "Physical Meets Digital",
    statement: "We bridge high-throughput cloud software with tangible physical electric transit networks and automotive hardware, unlocking systemic challenges few companies can touch."
  },
  {
    number: "04",
    title: "Factual Hygiene & Craft Fidelity",
    statement: "Zero bloat, sub-second latency, deterministic CI/CD pipelines, and disciplined craftsmanship. Every detail matters, from pixel kerning to battery thermal dissipation."
  }
];

export const careerPerks: CareerPerk[] = [
  {
    tag: "Equity & Value",
    title: "Venture Equity & Revenue Sharing",
    description: "Competitive base compensation paired with direct equity and profit participation across HST portfolio ventures."
  },
  {
    tag: "Autonomy",
    title: "Remote-First & Async Cadence",
    description: "Work from wherever you produce your best thinking. We respect uninterrupted focus time and communicate asynchronously."
  },
  {
    tag: "Hardware",
    title: "Top-Tier Workstation Stipend",
    description: "Custom hardware budget for your setup—high-spec MacBook Pro / Linux rigs, 4K displays, and physical lab tooling."
  },
  {
    tag: "Growth",
    title: "Continuous Craft & R&D Budget",
    description: "Annual allowance for technical publications, specialized software licenses, industry conferences, and research experiments."
  },
  {
    tag: "Wellness",
    title: "Comprehensive Wellness",
    description: "Generous health coverage, fitness stipends, and flexible personal time off to keep you energized for the long run."
  },
  {
    tag: "Impact",
    title: "Direct Access to Leadership",
    description: "Collaborate directly alongside founder Lakshmi Krishna Attipatla and technical leads on foundational roadmaps."
  }
];

export const jobPositions: JobPosition[] = [
  {
    id: "eng-dist-01",
    slug: "senior-distributed-systems-architect",
    title: "Senior Distributed Systems Architect",
    department: "Engineering",
    location: "Global Remote / India",
    type: "Full-time",
    experience: "5+ Years",
    oneLiner: "Architect high-concurrency event ingestion pipelines, resilient edge services, and distributed databases for platforms like SurveySpace.",
    description: "As our Distributed Systems Architect, you will design, implement, and maintain the backbone powering our high-throughput software ventures. You will eliminate performance bottlenecks, ensure zero downtime, and build fault-tolerant APIs capable of processing millions of concurrent events.",
    responsibilities: [
      "Architect distributed data collection and batch processing pipelines for SurveySpace and upcoming platforms",
      "Design edge-native APIs with Cloudflare Workers, Durable Objects, and low-latency storage topologies",
      "Benchmark database query efficiency, cache strategies, and data serialization protocols",
      "Establish observability, telemetry, and automated self-healing infrastructure across our multi-cloud deployment"
    ],
    requirements: [
      "Demonstrated experience designing and maintaining distributed, fault-tolerant backend systems in production",
      "Deep proficiency in modern systems languages (Rust, Go, or TypeScript / Node.js)",
      "Strong understanding of consensus algorithms, message queues, and high-velocity transactional databases",
      "Rigorous commitment to clean code architecture, deterministic testing, and security hygiene"
    ],
    associatedVentures: ["SurveySpace", "ScrollTax", "HST Cloud Core"]
  },
  {
    id: "mob-firm-02",
    slug: "lead-ev-firmware-embedded-engineer",
    title: "Lead EV Firmware & Embedded Engineer",
    department: "Mobility & Hardware",
    location: "India (Regional Transit Hubs) / Hybrid",
    type: "Full-time",
    experience: "4+ Years",
    oneLiner: "Develop embedded microcontroller firmware, CAN bus telemetry, and battery management systems (BMS) for commercial light electric vehicles.",
    description: "Toto Motors is engineering durable, purpose-built electric commercial vehicles for urban transit. You will own the vehicle electronic control units (ECUs), motor controller integration, active battery safety algorithms, and IoT telematics hardware.",
    responsibilities: [
      "Develop and test real-time embedded C/C++ firmware on ARM Cortex-M microcontrollers for automotive ECUs",
      "Engineer and calibrate Battery Management System (BMS) algorithms for state-of-charge (SoC) and thermal protection",
      "Integrate CAN bus protocol stacks between motor inverters, digital dashboards, and cellular IoT gateways",
      "Conduct hardware-in-the-loop (HIL) testing, dyno validation, and real-world route data acquisition"
    ],
    requirements: [
      "Background in Embedded Systems, Electrical Engineering, or Mechatronics with automotive or battery experience",
      "Hands-on expertise with microcontroller architectures (STM32, ESP32, TI), RTOS (FreeRTOS / Zephyr), and CAN 2.0B / J1939",
      "Experience interfacing with BLDC / PMSM motor controllers, Hall effect sensors, and lithium-ion chemistry cells",
      "Familiarity with automotive safety standards, PCB debugging with oscilloscopes and logic analyzers"
    ],
    associatedVentures: ["Toto Motors", "Battery Systems R&D"]
  },
  {
    id: "des-arch-03",
    slug: "principal-uiux-design-systems-architect",
    title: "Principal UI/UX & Design Systems Architect",
    department: "Design & Product",
    location: "Global Remote",
    type: "Full-time",
    experience: "4+ Years",
    oneLiner: "Define the visual soul, ergonomic interaction patterns, and scalable design token systems across all HST digital ventures.",
    description: "We believe exceptional software is defined by meticulous typographic hierarchy, restrained aesthetic discipline, and effortless ergonomics. You will establish the unified design system spanning SurveySpace, HealthSpace, corporate digital products, and transit media tools.",
    responsibilities: [
      "Create and govern multi-brand design tokens, UI component libraries, and interactive prototypes in Figma",
      "Design ultra-responsive, accessible, and high-conversion web & mobile product interfaces",
      "Partner directly with frontend engineers to ensure 100% design-to-code fidelity and smooth micro-interactions",
      "Conduct user workflow audits to eliminate friction and elevate usability across our applications"
    ],
    requirements: [
      "Stunning portfolio demonstrating Swiss-inspired editorial restraint, typographic precision, and high-end software craft",
      "Mastery of modern design tools (Figma, tokens, auto-layout, variable modes) and motion prototyping",
      "Deep understanding of frontend implementation constraints (CSS/Tailwind, DOM ergonomics, responsive fluid grids)",
      "Obsession with minimalism, accessibility standards (WCAG AAA), and performance-conscious UI design"
    ],
    associatedVentures: ["SurveySpace", "HealthSpace", "HST Digital Flagship"]
  },
  {
    id: "ai-ret-04",
    slug: "applied-ai-retrieval-engineer",
    title: "Applied AI & Retrieval Pipeline Specialist",
    department: "Applied AI",
    location: "Global Remote",
    type: "Full-time",
    experience: "3+ Years",
    oneLiner: "Build domain-adapted retrieval augmented generation (RAG) pipelines, vector search topologies, and statutory intelligence for LegalAI.",
    description: "LegalAI is developing factual, verifiable AI intelligence for legal documents, jurisprudence search, and contract analysis. You will build high-precision vector indexing pipelines, evaluation benchmarks, and specialized inference workflows.",
    responsibilities: [
      "Design domain-specific embedding, semantic chunking, and hybrid search (BM25 + vector) retrieval pipelines",
      "Build rigorous evaluation harnesses to measure factual precision, citation accuracy, and hallucination rates",
      "Optimize inference latency and token economics using quantized edge models and cached embeddings",
      "Collaborate with legal domain advisors to fine-tune task-specific classification and synthesis prompts"
    ],
    requirements: [
      "Proven track record deploying LLM or NLP systems into production with verifiable accuracy metrics",
      "Proficiency with Python, TypeScript, vector stores (Vectorize, pgvector, Qdrant), and modern AI frameworks",
      "Strong theoretical foundation in information retrieval, semantic embeddings, and context window orchestration",
      "Commitment to verifiable provenance, privacy-first data handling, and deterministic output verification"
    ],
    associatedVentures: ["LegalAI", "HST Intelligent Software"]
  },
  {
    id: "ops-fleet-05",
    slug: "mobility-fleet-transit-media-lead",
    title: "Mobility Fleet Operations & Transit Media Lead",
    department: "Operations",
    location: "India (Transit Hubs)",
    type: "Full-time",
    experience: "3+ Years",
    oneLiner: "Scale street-level advertising operations and commercial EV driver partnerships across high-density urban corridors for TotoAdsIndia.",
    description: "TotoAdsIndia transforms commercial electric auto-rickshaws into moving brand billboards. You will lead advertiser campaign scheduling, printing/application logistics, fleet onboarding, and recurring driver partner disbursements.",
    responsibilities: [
      "Manage end-to-end campaign execution from brand advertiser onboarding to physical transit wrap installation",
      "Coordinate with local EV driver associations and logistics teams to scale fleet participation",
      "Develop route tracking and impression verification protocols to provide advertisers with transparent campaign reporting",
      "Ensure vehicle brand presentation meets HST's premium aesthetic and weather-durability standards"
    ],
    requirements: [
      "Experience in out-of-home (OOH) media, transit advertising, mobility operations, or urban logistics",
      "Outstanding communication, field leadership, and multi-stakeholder relationship management skills",
      "Data-driven mindset with comfort managing operational spreadsheets, route maps, and budget reconciliations",
      "High energy and dedication to building India's cleanest and most effective street-level transit network"
    ],
    associatedVentures: ["TotoAdsIndia", "Toto Motors"]
  }
];
