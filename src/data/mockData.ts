export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  badge?: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  useCase: string;
  impact: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  client: string;
  results: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'voice-agents',
    title: 'AI Voice Agents',
    subtitle: 'Human-grade phone support & sales',
    description: 'Never miss another customer call. Ultra-low latency conversational AI phone agents that answer inbound queries, negotiate appointments, and call out to warm leads.',
    features: [
      'Sub-500ms conversational response time',
      'Natural accent & human voice synthesis (Retell/Vapi)',
      'Direct integration with calendar & CRM',
      'Automatic call summary & transcript generation'
    ],
    icon: 'PhoneCall',
    badge: 'Popular'
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    subtitle: 'Instant messaging engine',
    description: 'Instant replies, booking links, payment collection, and multi-step sales sequences running 24/7 over official WhatsApp Business APIs.',
    features: [
      'Official Meta WhatsApp Business Cloud API',
      'Rich media, interactive buttons & catalog messages',
      'Automated appointment reminders & follow-ups',
      'Human agent escalation & fallback rules'
    ],
    icon: 'MessageSquare',
    badge: 'High Conversion'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    subtitle: 'End-to-end process orchestration',
    description: 'Eliminate manual data entry and repetitive operations using custom n8n, Make, and API integrations that link your business apps together.',
    features: [
      'Custom n8n & Python workflow orchestration',
      'Autonomous multi-agent task execution',
      'Real-time webhook handling & web scraping',
      '99.9% uptime error-retrying architecture'
    ],
    icon: 'Cpu',
  },
  {
    id: 'crm-integration',
    title: 'CRM Integration',
    subtitle: 'HubSpot, GoHighLevel & Salesforce',
    description: 'Keep your CRM perfectly synchronized without lift. Lead scoring, instant call logging, auto-pipeline updates, and contact enrichment.',
    features: [
      'HubSpot, GoHighLevel, Zoho & Salesforce',
      'Real-time 2-way data synchronization',
      'AI Lead Qualification Scoring (0-100)',
      'Automated deal stage advancement'
    ],
    icon: 'Database',
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    subtitle: 'Omnichannel intelligence',
    description: 'Deploy context-aware AI assistants trained on your company knowledge base across your Website, Instagram, Facebook, and WhatsApp.',
    features: [
      'Trained on docs, FAQs & knowledge bases',
      'Multilingual support (50+ languages)',
      'Live chat widget with custom visual themes',
      'Lead capture & instant qualification flow'
    ],
    icon: 'Bot',
  },
  {
    id: 'custom-ai',
    title: 'Custom AI Solutions',
    subtitle: 'Tailored enterprise AI systems',
    description: 'Bespoke multi-agent AI systems, proprietary fine-tuned models, document parsing pipelines, and complex operational AI engines built for scale.',
    features: [
      'Custom RAG (Retrieval Augmented Generation)',
      'Fine-tuned LLMs & computer vision',
      'Private cloud & on-premise deployment',
      'Enterprise SLA & dedicated support'
    ],
    icon: 'Sparkles',
    badge: 'Enterprise'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We audit your current bottlenecks, repetitive operational tasks, missed lead channels, and software stack in a 30-minute deep dive.',
    detail: 'We identify key ROI targets and pinpoint exact processes that can be automated within 14 days.'
  },
  {
    step: '02',
    title: 'Strategy & Workflow Design',
    description: 'Our AI engineers architect a visual blueprint of your automated flows, prompt logic, API connections, and voice personalities.',
    detail: 'You receive a complete blueprint showing every trigger, logic branch, fallback, and CRM mapping.'
  },
  {
    step: '03',
    title: 'AI Development',
    description: 'We build your custom voice agents, n8n workflows, knowledge retrieval engines, and API integrations in a sandbox environment.',
    detail: 'Rigorous testing against edge cases, voice latency optimization, and CRM payload validations.'
  },
  {
    step: '04',
    title: 'Deployment & Training',
    description: 'Seamless integration into your production environment with zero downtime. We train your staff on monitoring and handover.',
    detail: 'Live agent handoff rules set up so your team only steps in when high-value human interaction is required.'
  },
  {
    step: '05',
    title: 'Optimization & Scaling',
    description: 'Continuous monitoring, voice fine-tuning, analytics dashboard tracking, and iteration to constantly increase conversion rates.',
    detail: 'Weekly analytics reviews with automated performance monitoring and system updates.'
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'restaurants',
    name: 'Restaurants & Hospitality',
    icon: 'Utensils',
    useCase: 'AI Voice Phone Agent answers phone reservations, handles catering inquiries, and updates booking engine.',
    impact: '93% reduction in missed phone bookings'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property',
    icon: 'Home',
    useCase: 'Instant WhatsApp lead qualification, property brochure dispatch, and automated viewing calendar sync.',
    impact: '10x faster lead response time'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    icon: 'Stethoscope',
    useCase: '24/7 patient appointment scheduling, SMS/WhatsApp confirmation reminders, and post-visit check-ins.',
    impact: '85% reduction in patient no-shows'
  },
  {
    id: 'education',
    name: 'Education & Academies',
    icon: 'GraduationCap',
    useCase: 'Student admissions bot, instant course inquiry handling, and automated tuition payment links.',
    impact: '3.5x higher enrollment conversion'
  },
  {
    id: 'law-firms',
    name: 'Law Firms & Legal',
    icon: 'Scale',
    useCase: 'Confidential client intake screening, consultation booking, and document gathering automation.',
    impact: '15+ billable hours saved weekly per attorney'
  },
  {
    id: 'salons',
    name: 'Salons & Spas',
    icon: 'Scissors',
    useCase: 'AI phone & WhatsApp receptionist for 24/7 booking, deposit collection, and slot optimization.',
    impact: '40% increase in after-hours bookings'
  },
  {
    id: 'hotels',
    name: 'Hotels & Resorts',
    icon: 'Building',
    useCase: 'Multilingual guest concierge bot handling room service, check-in instructions, and local recommendations.',
    impact: '98% guest satisfaction score'
  },
  {
    id: 'gyms',
    name: 'Gyms & Fitness',
    icon: 'Dumbbell',
    useCase: 'Automated trial class booking, membership renewal WhatsApp flows, and inactive member reactivation.',
    impact: '28% increase in trial-to-paid conversion'
  },
  {
    id: 'construction',
    name: 'Construction & Trades',
    icon: 'HardHat',
    useCase: 'Inbound quote inquiry voice agent, site estimate calendar scheduling, and subcontractor notification.',
    impact: 'Immediate quote dispatch under 2 mins'
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce Brands',
    icon: 'ShoppingBag',
    useCase: 'Where is my order (WISMO) WhatsApp lookup, abandoned cart AI recovery messages, and support deflection.',
    impact: '70% support ticket resolution without human'
  },
  {
    id: 'automotive',
    name: 'Automotive & Dealerships',
    icon: 'Car',
    useCase: 'Test drive scheduling, service maintenance phone voice reminders, and vehicle trade-in valuation intake.',
    impact: '2.4x more test drive bookings'
  },
  {
    id: 'finance',
    name: 'Financial Services',
    icon: 'TrendingUp',
    useCase: 'Lead qualification for mortgages/loans, KYC document collection flows, and automated appointment sync.',
    impact: '60% faster loan pre-qualification'
  }
];

export const STATS_DATA = [
  { value: 95, label: 'Reduction in repetitive work', suffix: '%', desc: 'Average time savings achieved by clients' },
  { value: 24, label: 'AI availability', suffix: '/7', desc: 'Continuous zero-downtime execution' },
  { value: 3, label: 'Faster customer response', suffix: 'x', desc: 'Average speed improvement across channels' },
  { value: 10, label: 'Lead qualification speed', suffix: 'x', desc: 'Instant response within 10 seconds of lead capture' },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'restaurant-automation',
    title: 'Multi-Location Restaurant Group',
    category: 'AI Voice & WhatsApp',
    metric: '93%',
    metricLabel: 'Reduction in Missed Calls',
    description: 'Replaced missed peak-hour call volumes across 6 locations with a custom AI phone agent that handles table reservations, dietary questions, and party bookings directly into SevenRooms.',
    tags: ['AI Voice Agent', 'WhatsApp API', 'Calendar Sync', 'PostgreSQL'],
    client: 'Aura Dining Group',
    results: [
      '$42,000+ monthly added revenue from previously lost calls',
      'Sub-300ms call answer rate during 7-9 PM peak hours',
      'Zero double-bookings across 6 venue locations'
    ]
  },
  {
    id: 'healthcare-assistant',
    title: 'Regional Medical & Dental Network',
    category: 'Healthcare AI Workflow',
    metric: '1,400+',
    metricLabel: 'Appointments Booked / Mo',
    description: 'Built a HIPAA-compliant voice & WhatsApp booking assistant integrated with EHR software to manage appointment rescheduling, pre-visit instructions, and insurance verification.',
    tags: ['Retell AI', 'HIPAA Compliant', 'n8n Enterprise', 'Twilio'],
    client: 'Apex Health Systems',
    results: [
      '0 booking conflicts across 18 specialist doctors',
      '84% decrease in patient no-show rates via smart WhatsApp nudges',
      'Saved 120+ front-desk staff hours every month'
    ]
  },
  {
    id: 'real-estate-ai',
    title: 'Luxury Real Estate Brokerage',
    category: 'Lead Speed & CRM',
    metric: '10x',
    metricLabel: 'Faster Lead Qualification',
    description: 'Created an autonomous multi-channel agent that contacts incoming Zillow, Instagram, and website leads within 8 seconds via WhatsApp and AI Voice, qualifying budgets before handing to senior agents.',
    tags: ['HubSpot CRM', 'WhatsApp Cloud API', 'GPT-4o', 'GoHighLevel'],
    client: 'Vanguard Properties',
    results: [
      '3,500+ inbound leads qualified automatically',
      'Boosted agent closing rate by 4.2x with pre-scored leads',
      '100% lead contact rate within 1 minute of form submission'
    ]
  }
];

export const INTEGRATIONS_DATA = [
  { name: 'OpenAI', category: 'AI Models', logo: 'Sparkles', highlight: 'GPT-4o & Fine-tuning' },
  { name: 'Anthropic', category: 'AI Models', logo: 'Cpu', highlight: 'Claude 3.5 Sonnet' },
  { name: 'Retell AI', category: 'Voice & Telecom', logo: 'Phone', highlight: 'Ultra-fast Voice Engine' },
  { name: 'Vapi', category: 'Voice & Telecom', logo: 'Mic', highlight: 'Conversational Voice API' },
  { name: 'WhatsApp', category: 'Messaging', logo: 'MessageCircle', highlight: 'Cloud Business API' },
  { name: 'Twilio', category: 'Voice & Telecom', logo: 'Radio', highlight: 'SIP Trunking & SMS' },
  { name: 'n8n', category: 'Workflows', logo: 'GitBranch', highlight: 'Workflow Automation' },
  { name: 'Zapier', category: 'Workflows', logo: 'Zap', highlight: 'App Connector' },
  { name: 'HubSpot', category: 'CRM', logo: 'Database', highlight: 'Inbound CRM Sync' },
  { name: 'GoHighLevel', category: 'CRM', logo: 'Layers', highlight: 'Agency CRM Engine' },
  { name: 'Salesforce', category: 'CRM', logo: 'Cloud', highlight: 'Enterprise CRM Sync' },
  { name: 'Google Calendar', category: 'Productivity', logo: 'Calendar', highlight: '2-way Booking Sync' },
  { name: 'Calendly', category: 'Productivity', logo: 'Clock', highlight: 'Scheduling Engine' },
  { name: 'Slack', category: 'Productivity', logo: 'Slack', highlight: 'Real-time Notifications' },
  { name: 'Stripe', category: 'Payments', logo: 'CreditCard', highlight: 'Automated Invoicing' },
  { name: 'Notion', category: 'Productivity', logo: 'FileText', highlight: 'Knowledge Base' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'CEO & Founder',
    company: 'Apex Prime Realty',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Flow Chain transformed our lead management overnight. Inbound leads get a human-sounding phone call and WhatsApp message in 10 seconds. Our agents only talk to ready buyers now.',
    rating: 5,
    highlight: 'Saved us $120k annually in intake staff'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Chief Operating Officer',
    company: 'Nexa Dental Care',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'The AI Voice Agent sounds so natural that patients regularly thank "her" by name. Our front desk staff was overwhelmed with 200 calls a day; now Flow Chain handles 85% of them flawlessly.',
    rating: 5,
    highlight: 'Zero missed calls during peak hours'
  },
  {
    id: 't3',
    name: 'David Chen',
    role: 'Managing Partner',
    company: 'Horizon Wealth & Legal',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'The n8n custom workflows and CRM integration Flow Chain built for us connected our entire stack. Intake forms, contract generation, and calendar booking all happen autonomously in under 3 minutes.',
    rating: 5,
    highlight: 'Setup completed in under 12 days'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What is an AI Agent and how is it different from a basic chatbot?',
    answer: 'Traditional chatbots rely on rigid menu trees and predefined scripts. Flow Chain build autonomous AI Employees using advanced Large Language Models (LLMs) and voice synthesis models. They understand natural context, adapt dynamically to customer questions, execute real-world actions (updating CRMs, checking live calendar slots, generating invoices), and seamlessly hand over to humans when appropriate.',
    category: 'General'
  },
  {
    question: 'Can AI answer phone calls with realistic human voices?',
    answer: 'Yes! We engineer ultra-low latency AI Voice Agents powered by engine providers like Retell AI and Vapi paired with ElevenLabs custom voice clones. With sub-500ms response times, ambient breath dynamics, and natural backchanneling, customers cannot distinguish the agent from a professional human representative.',
    category: 'Voice Agents'
  },
  {
    question: 'How long does deployment take from start to finish?',
    answer: 'Standard implementations (such as WhatsApp Automation, AI Voice Agents, or CRM integrations) are fully built, tested, and deployed live within 7 to 14 business days. Enterprise custom multi-agent architectures take 3 to 4 weeks with dedicated staging verification.',
    category: 'Implementation'
  },
  {
    question: 'Can Flow Chain integrate with our existing CRM and software stack?',
    answer: 'Absolutely. We support native 2-way integrations with HubSpot, GoHighLevel, Salesforce, Zoho, Google Workspace, Slack, Stripe, Calendly, and custom SQL databases via REST APIs, webhooks, and n8n workflow engines.',
    category: 'Integrations'
  },
  {
    question: 'How much does it cost to implement AI automation?',
    answer: 'We tailor pricing based on system complexity and call/messaging volume. Typical projects include a one-time build & configuration fee followed by a monthly maintenance, voice server, and optimization subscription. Most clients see a 5x to 10x ROI within the first 60 days.',
    category: 'Pricing'
  },
  {
    question: 'What happens if the AI encounters a question it cannot answer?',
    answer: 'We build strict fallback and human-in-the-loop protocols into every system. If an edge case or high-priority lead requires human intervention, the AI instantly notifies your team via SMS, Slack, or CRM alerts with a full conversation transcript.',
    category: 'General'
  }
];

export const DEMO_PRESET_SCENARIOS = [
  {
    id: 'scenario-booking',
    title: 'Appointment Booking',
    prompt: 'Hi, I would like to book a strategy consultation for tomorrow at 3 PM.',
    steps: [
      { step: 1, title: 'Inbound Request', status: 'Receiving message over WhatsApp Business API...', time: '8ms' },
      { step: 2, title: 'AI Intent Parsing', status: 'Extracted intent: Book_Appointment, Preferred_Time: Tomorrow 15:00', time: '14ms' },
      { step: 3, title: 'Calendar & CRM Check', status: 'Querying Google Calendar API... Slot 3:00 PM is OPEN', time: '22ms' },
      { step: 4, title: 'HubSpot Lead Created', status: 'Created contact: Alex Rivera, Score: 92/100, Stage: Meeting Scheduled', time: '18ms' },
      { step: 5, title: 'Confirmation Sent', status: 'Dispatched calendar invite & WhatsApp confirmation with location link', time: '12ms' }
    ]
  },
  {
    id: 'scenario-realestate',
    title: 'Real Estate Lead Qualification',
    prompt: 'I am looking for a 3-bedroom penthouse in Downtown under $1.5M.',
    steps: [
      { step: 1, title: 'Voice / Text Inbound', status: 'Processing buyer inquiry across Instagram DM...', time: '6ms' },
      { step: 2, title: 'AI Qualification Engine', status: 'Score: High Intent (Location: Downtown, Budget: $1.5M, Beds: 3)', time: '18ms' },
      { step: 3, title: 'Property Matcher', status: 'Matched 2 active exclusive penthouse listings matching criteria', time: '15ms' },
      { step: 4, title: 'CRM Lead Escalation', status: 'Assigned Lead to Senior Broker Sarah Vance & sent instant SMS alert', time: '11ms' },
      { step: 5, title: 'PDF Brochure Sent', status: 'Delivered interactive digital brochure link directly via WhatsApp', time: '9ms' }
    ]
  },
  {
    id: 'scenario-voicecall',
    title: 'AI Phone Voice Support',
    prompt: 'Does your clinic accept Aetna insurance and what are your weekend hours?',
    steps: [
      { step: 1, title: 'SIP Phone Call Answered', status: 'Retell AI voice engine connected call in 280ms', time: '5ms' },
      { step: 2, title: 'Knowledge Base Lookup', status: 'Queried clinic KB: Aetna accepted = YES, Sat-Sun hours = 9 AM - 4 PM', time: '12ms' },
      { step: 3, title: 'Natural Speech Output', status: 'Synthesizing natural voice reply via ElevenLabs voice clone', time: '14ms' },
      { step: 4, title: 'Call Summary & SMS', status: 'Log transcript saved to EHR database & SMS address map sent to caller', time: '10ms' }
    ]
  }
];
