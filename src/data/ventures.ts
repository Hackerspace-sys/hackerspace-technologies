export type VentureStatus = 'live' | 'in-development' | 'concept' | 'incubation';

export interface Venture {
  slug: string;
  name: string;
  category: string;
  categorySlug: 'software' | 'mobility' | 'ai' | 'energy' | 'wellness' | 'media';
  status: string;
  statusType: VentureStatus;
  oneLiner: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techDisciplines: string[];
  productUrl?: string | null;
  featured: boolean;
  order: number;
}

export const ventures: Venture[] = [
  {
    slug: 'surveyspace',
    name: 'SurveySpace',
    category: 'Survey & Feedback Systems',
    categorySlug: 'software',
    status: 'Active Platform',
    statusType: 'live',
    oneLiner: 'A high-velocity survey platform engineered to create, distribute, and collect responses with structured data workflows.',
    description: 'SurveySpace is an intuitive, robust data collection and survey platform designed for organizations, researchers, and creators who need fast, clean, and reliable respondent feedback without enterprise bloat.',
    problem: 'Modern feedback collection tools are either bloated legacy corporate suites with prohibitive licensing or simplistic forms that crumble under high-concurrency response bursts.',
    solution: 'SurveySpace introduces a lean, reactive architecture with adaptive questionnaire branching, multi-format exports, and lightning-fast form rendering across desktop and mobile.',
    keyFeatures: [
      'High-throughput response collection pipeline',
      'Adaptive conditional questioning and dynamic logic trees',
      'Instant analytical visualizations and CSV/JSON data pipelines',
      'Optimized lightweight respondent experience under 50KB bundle payload'
    ],
    techDisciplines: ['Distributed Web Systems', 'Reactive UI', 'Data Modeling', 'API Design'],
    productUrl: null, // Points to venture dossier
    featured: true,
    order: 1,
  },
  {
    slug: 'totoadsindia',
    name: 'TotoAdsIndia',
    category: 'Transit & Mobility Advertising',
    categorySlug: 'mobility',
    status: 'Operating Venture',
    statusType: 'live',
    oneLiner: 'An urban mobility advertising network utilizing electric auto-rickshaws for targeted, street-level brand visibility.',
    description: 'TotoAdsIndia bridges physical transit and localized advertising by transforming commercial EV rickshaws into clean, mobile brand ambassadors across busy suburban and urban transit routes.',
    problem: 'Hyperlocal brands and regional enterprises face exorbitant rates for static billboards with zero kinetic engagement and poor route coverage.',
    solution: 'A managed transit-media network providing standardized, weather-durable exterior panels on zero-emission electric vehicles, creating thousands of daily visual impressions at eye level.',
    keyFeatures: [
      'Standardized high-durability transit vinyl application',
      'Route-mapped campaign scheduling in high-density urban corridors',
      'Clean transit alignment with zero tailpipe emissions',
      'Direct recurring revenue generation for driver-operators'
    ],
    techDisciplines: ['Mobility Operations', 'Physical Ad-Tech', 'Fleet Coordination', 'Hyperlocal Logistics'],
    productUrl: null,
    featured: true,
    order: 2,
  },
  {
    slug: 'toto-motors',
    name: 'Toto Motors',
    category: 'Mobility & Manufacturing Technology',
    categorySlug: 'mobility',
    status: 'Engineering & Prototyping',
    statusType: 'in-development',
    oneLiner: 'An automotive and manufacturing venture developing rugged, cost-effective commercial electric auto-rickshaws.',
    description: 'Toto Motors focuses on design, engineering, and manufacturing frameworks for accessible, highly reliable light electric commercial vehicles tailored for Indian last-mile transportation.',
    problem: 'Commercial EV rickshaws often suffer from fragile chassis structures, unoptimized battery placement, and low powertrain longevity under challenging road conditions.',
    solution: 'Purpose-engineered modular EV architecture with high-tensile steel frames, optimized drivetrain gearing, and serviceable modular electronic sub-assemblies.',
    keyFeatures: [
      'Reinforced tubular chassis engineered for Indian road topographies',
      'High-efficiency brushless DC and permanent magnet synchronous motors',
      'Modular swappable battery enclosure with active thermal dissipation',
      'Optimized gross vehicle weight for extended per-charge range'
    ],
    techDisciplines: ['Automotive Engineering', 'Chassis Design', 'EV Powertrains', 'Manufacturing Process'],
    productUrl: null,
    featured: true,
    order: 3,
  },
  {
    slug: 'healthspace',
    name: 'HealthSpace',
    category: 'Health & Wellness Technology',
    categorySlug: 'wellness',
    status: 'In Development',
    statusType: 'in-development',
    oneLiner: 'A digital wellness product concept focused on holistic personal activity tracking, fitness routines, and habit formation.',
    description: 'HealthSpace is an upcoming digital wellness platform designed to synthesize personal health metrics, routine workouts, and lifestyle patterns into actionable, privacy-first guidance.',
    problem: 'Fitness and wellness trackers are fragmented between hyper-clinical medical interfaces and noisy, ad-driven social calorie counters.',
    solution: 'A calm, unified health dashboard emphasizing daily consistency, clean metric tracking, and local-first biometric data ownership.',
    keyFeatures: [
      'Unified daily activity and cardiovascular readiness scoring',
      'Custom workout builder and progressive overload trackers',
      'Privacy-first biometric data storage with end-to-end encryption',
      'Minimalist interface free of distracting feed algorithms'
    ],
    techDisciplines: ['Mobile Systems', 'Health Data Modeling', 'Edge Compute', 'UX Ergonomics'],
    productUrl: null,
    featured: false,
    order: 4,
  },
  {
    slug: 'legalai',
    name: 'LegalAI',
    category: 'Legal Technology & Intelligence',
    categorySlug: 'ai',
    status: 'R&D Initiative',
    statusType: 'incubation',
    oneLiner: 'A specialized artificial intelligence initiative exploring digital tools for statutory search, contract analysis, and legal assistance.',
    description: 'LegalAI explores the frontier of natural language processing and retrieval-augmented systems tailored specifically for jurisprudence, statutory research, and document structuring.',
    problem: 'Legal professionals and small enterprises waste hundreds of hours manually sifting through unstructured legal precedents, complex filings, and dense contracts.',
    solution: 'Domain-adapted intelligent models that parse, cross-reference, and summarize legal documents with strict factual citation to verified legal texts.',
    keyFeatures: [
      'Clause-level semantic analysis and risk detection',
      'Structured statutory citation validation and cross-referencing',
      'Document summarization with verifiable source linking',
      'Local model deployment options for stringent attorney-client confidentiality'
    ],
    techDisciplines: ['Applied AI / NLP', 'Vector Information Retrieval', 'Document Semantics', 'Security & Compliance'],
    productUrl: null,
    featured: false,
    order: 5,
  },
  {
    slug: 'scrolltax',
    name: 'ScrollTax',
    category: 'Digital Well-Being & Behavioral Tools',
    categorySlug: 'software',
    status: 'Product Concept',
    statusType: 'concept',
    oneLiner: 'A behavioral digital well-being utility concept engineered to help users deliberately curb infinite scrolling loops.',
    description: 'ScrollTax is a psychological friction utility that introduces intentional, tangible micro-costs to unconscious social media scrolling, returning agency to the individual.',
    problem: 'Infinite-scroll algorithms weaponize variable reward schedules, making purely willpower-based screentime limits trivially easy to override.',
    solution: 'Active behavioral intervention: requiring a mindful physical micro-pause, intellectual puzzle, or intentional confirmation before each incremental period of infinite scroll.',
    keyFeatures: [
      'Adaptive scroll depth detection and velocity triggers',
      'Cognitive friction gates that break dopamine trance loops',
      'Weekly attention audit reports highlighting reclaimed hours',
      'Zero tracking of viewed content; 100% on-device heuristic evaluation'
    ],
    techDisciplines: ['Behavioral Design', 'Client-side Accessibility APIs', 'Attention Architecture', 'Privacy-Preserving Telemetry'],
    productUrl: null,
    featured: false,
    order: 6,
  },
  {
    slug: 'audiospace',
    name: 'AudioSpace',
    category: 'Digital Audio & Media Platforms',
    categorySlug: 'media',
    status: 'Product Concept',
    statusType: 'concept',
    oneLiner: 'An immersive digital audio platform concept designed for curated audiobooks, episodic lectures, and long-form spoken media.',
    description: 'AudioSpace is a media platform initiative exploring high-fidelity audio playback, intelligent transcript synchronization, and distraction-free audio learning environments.',
    problem: 'Mainstream audio apps prioritize algorithmic short-form noise over deep, focused audio contemplation and knowledge retention.',
    solution: 'A dedicated reading-while-listening interface with precision sentence-level audio highlighting, smart bookmarking, and offline-first storage.',
    keyFeatures: [
      'Synchronized real-time waveform and text playback',
      'Smart chapter extraction and multi-speed voice preservation',
      'Minimalist offline-first listening cache',
      'Direct creator publishing with transparent attribution'
    ],
    techDisciplines: ['Media Streaming', 'Audio DSP', 'Dynamic Text Sync', 'Mobile App Architecture'],
    productUrl: null,
    featured: false,
    order: 7,
  },
  {
    slug: 'gamespace',
    name: 'GameSpace',
    category: 'Interactive Gaming Technology',
    categorySlug: 'software',
    status: 'Product Concept',
    statusType: 'concept',
    oneLiner: 'A gaming technology initiative exploring competitive web-native game mechanics, leaderboards, and interactive entertainment.',
    description: 'GameSpace explores the convergence of lightweight browser-based gaming engines, competitive community tournaments, and responsive real-time multiplayer states.',
    problem: 'Most modern games require heavy multi-gigabyte installations or are littered with aggressive predatory paywalls and intrusive advertisements.',
    solution: 'Instant-play, skill-based games with sub-second launch times directly in the browser, powered by WebAssembly and WebGL.',
    keyFeatures: [
      'Instant-on browser runtime with zero installation overhead',
      'Cryptographically verified server-side leaderboards and anti-cheat',
      'Deterministic low-latency state synchronization',
      'Cross-device responsive touch and keyboard controls'
    ],
    techDisciplines: ['WebAssembly', 'WebGL / Canvas', 'Real-time WebSockets', 'Game State Architecture'],
    productUrl: null,
    featured: false,
    order: 8,
  },
  {
    slug: 'battery-systems',
    name: 'Battery Systems R&D',
    category: 'Clean Energy & Battery Pack Tech',
    categorySlug: 'energy',
    status: 'Incubation & R&D',
    statusType: 'incubation',
    oneLiner: 'An energy storage engineering initiative focused on safe, thermally resilient lithium battery pack assemblies for electric vehicles.',
    description: 'HackerSpace Technologies is researching modular battery pack architectures, smart Battery Management Systems (BMS), and active cell-level safety mechanisms specifically designed for high-ambient-temperature transport conditions.',
    problem: 'Commercial electric three-wheelers routinely operate in extreme heat and dusty urban environments, resulting in cell degradation, thermal runaway risks, and unpredictable battery lifespans.',
    solution: 'Advanced cell balancing architectures, passive phase-change thermal barriers, and telemetry-linked smart BMS monitoring voltage, temperature, and cycle wear in real time.',
    keyFeatures: [
      'Phase-change material thermal regulation for high-heat environments',
      'Intelligent digital BMS with multi-tier short-circuit and cell-drift protection',
      'Modular enclosure geometry compatible with standardized fleet swapping',
      'Predictive state-of-health (SoH) and state-of-charge (SoC) algorithms'
    ],
    techDisciplines: ['Battery Chemistry', 'BMS Firmware', 'Thermal Engineering', 'Electrical Safety Standards'],
    productUrl: null,
    featured: false,
    order: 9,
  }
];

export function getFeaturedVentures(): Venture[] {
  return ventures.filter(v => v.featured);
}

export function getAllVentures(): Venture[] {
  return [...ventures].sort((a, b) => a.order - b.order);
}

export function getVentureBySlug(slug: string): Venture | undefined {
  return ventures.find(v => v.slug === slug);
}
