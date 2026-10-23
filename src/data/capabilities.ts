export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  subDisciplines: string[];
  icon: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  deliverables: string;
}

export const capabilities: Capability[] = [
  {
    id: "software",
    number: "01",
    title: "Digital Product Development",
    description: "Designing and engineering responsive web applications, interactive utilities, and mobile products engineered for speed, high conversion, and intuitive user experiences.",
    subDisciplines: ["Modern Web Architecture", "High-Fidelity UI/UX", "State Management", "Component Systems"],
    icon: "Layout"
  },
  {
    id: "platforms",
    number: "02",
    title: "Software Platforms & Cloud Architecture",
    description: "Building scalable backend pipelines, data collection engines, real-time message brokers, and fault-tolerant infrastructure built to handle burst traffic with sub-second latencies.",
    subDisciplines: ["Distributed APIs", "Relational & Document DBs", "Real-Time Sync", "Edge Computing"],
    icon: "Server"
  },
  {
    id: "ai",
    number: "03",
    title: "Artificial Intelligence & Intelligent Software",
    description: "Applying natural language processing, vector search, and domain-specialized machine learning to solve precise problems in document indexing, legal research, and behavioral feedback.",
    subDisciplines: ["Retrieval-Augmented Generation", "Semantic Indexing", "Document Intelligence", "On-Device Inference"],
    icon: "Cpu"
  },
  {
    id: "mobility",
    number: "04",
    title: "Mobility & Transit Advertising Networks",
    description: "Pioneering physical-meets-digital advertising operations that transform commercial electric three-wheelers into high-visibility urban mobile brand billboards.",
    subDisciplines: ["Transit Media Operations", "Standardized Hardware Mounts", "Fleet Route Mapping", "Campaign Analytics"],
    icon: "Radio"
  },
  {
    id: "hardware",
    number: "05",
    title: "Light EV Hardware & Manufacturing Engineering",
    description: "Researching and developing structural chassis improvements, motor controller integrations, and modular sub-assemblies for robust electric auto-rickshaws.",
    subDisciplines: ["Chassis Structural Geometry", "BLDC / PMSM Powertrains", "Modular Sub-Assemblies", "Serviceability Ergonomics"],
    icon: "Truck"
  },
  {
    id: "energy",
    number: "06",
    title: "Energy Storage & Battery Technology",
    description: "Investigating thermally resilient lithium battery pack assemblies, intelligent Battery Management Systems (BMS), and cell-protection circuits for harsh duty cycles.",
    subDisciplines: ["Lithium Pack Architecture", "Digital BMS Firmware", "Passive Thermal Dissipation", "State-of-Health Telemetry"],
    icon: "Zap"
  }
];

export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Identify Meaningful Problems",
    description: "We bypass artificial complexity to isolate genuine operational, behavioral, or technical friction points where modern technology can unlock immediate, tangible value.",
    deliverables: "Problem Statement & First-Principles Feasibility Analysis"
  },
  {
    step: "02",
    title: "Design Useful Experiences",
    description: "Form strictly serves clarity. We sculpt human-centered interfaces and hardware ergonomics that eliminate friction, respect human attention, and feel instinctively natural.",
    deliverables: "User Experience Architecture & System Prototyping"
  },
  {
    step: "03",
    title: "Engineer Reliable Technology",
    description: "We architect clean, robust, and verifiable systems. From high-performance static code to mechanical chassis welds, every component is engineered to perform without failure.",
    deliverables: "Production-Grade Code, Schematics & Deployment Infrastructure"
  },
  {
    step: "04",
    title: "Iterate, Validate, and Improve",
    description: "No product survives in an ivory tower. We launch deliberate iterations, capture real-world operational data, listen to end-user feedback, and refine with continuous discipline.",
    deliverables: "Empirical Feedback Loops & Continuous Refinement"
  }
];
