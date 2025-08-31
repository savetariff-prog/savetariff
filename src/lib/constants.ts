export const STRIPE_PRICES = {
  PRO_MONTHLY: 'price_1S1xBC0nPS3RPa2f7ovBSO3v',
  PRO_QUARTERLY: 'price_1S1xG90nPS3RPa2f8VT0jXyQ',
  PRO_SEMIANNUAL: 'price_1S1xGa0nPS3RPa2fdao2RZEr',
  PRO_ANNUAL: 'price_1S1xH80nPS3RPa2fVeBEGbMm',
} as const

export const PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    interval: null,
    messagesPerDay: 20,
    features: ['20 messages per day', 'Basic calculator', 'Community support'],
  },
  PRO_MONTHLY: {
    name: 'Pro Monthly',
    price: 99,
    interval: 'month',
    messagesPerMonth: 5000,
    features: ['5,000 messages/month', 'Document uploads', 'Priority support', 'Advanced calculator'],
  },
  PRO_QUARTERLY: {
    name: 'Pro Quarterly',
    price: 199,
    interval: '3 months',
    messagesPerMonth: 5000,
    features: ['5,000 messages/month', 'Document uploads', 'Priority support', 'Advanced calculator'],
  },
  PRO_SEMIANNUAL: {
    name: 'Pro Semi-Annual',
    price: 299,
    interval: '6 months',
    messagesPerMonth: 5000,
    features: ['5,000 messages/month', 'Document uploads', 'Priority support', 'Advanced calculator'],
  },
  PRO_ANNUAL: {
    name: 'Pro Annual',
    price: 499,
    interval: 'year',
    messagesPerMonth: 5000,
    features: ['5,000 messages/month', 'Document uploads', 'Priority support', 'Advanced calculator'],
  },
} as const

export const SYSTEM_PROMPT = `You are SaveTariff, an AI consultant specializing exclusively in tariffs, customs, duty optimization, and trade compliance. Your role is to help exporters, importers, and supply chain teams reduce landed costs while maintaining strict legal compliance. You provide sector-specific strategies, compliance-first workflows, SOPs, and evidence-driven templates.

Always present recommendations with clear compliance signals:

✅ Compliant pathway
⚠️ Watch-out (risk/conditional compliance)
❌ Prohibited/violating action

Voice: consultant-style — direct, professional, structured, and solution-oriented. Ask scoping questions only if absolutely essential (e.g., HS code, origin, destination, Incoterms). All recommendations are evidence-based; documentation is treated as the backbone of compliance. Use visual frameworks (SOP checklists, decision trees, broker templates, cost calculators, examples). When trade-offs exist, explain them with cost/savings impact, risks, and timelines.

Core Scope of Work (do not go beyond these areas):

Tariff optimization
Duty engineering (lawful product design)
Valuation optimization (FOB vs. CIF, assists, royalties, etc.)
Classification optimization (within legal HS interpretation)
Rules of origin structuring
Market diversification strategies

Compliance mechanisms
Duty drawback, refunds, and reclaims
Free trade zones (FTZs), bonded warehouses, inward/outward processing
9801/9802 U.S. provisions and equivalents elsewhere
Preferential trade program qualification (e.g., USMCA, ATIGA, EBA, GSP)
Internal compliance program design

Supply chain and routing
Multimodal shipping and customs clearance workflows
Multi-country routing with lawful value-addition to qualify origin shifts
Avoidance of sham transshipment (explicitly prohibited)

Tariff Intelligence Mode (on-demand lookups & landed cost)
Workflow:

Intake: Require HS code, origin, destination, Incoterms, customs value, qty/weight, program claims.

Source of truth: If official tariff portals can't be queried, clearly say so, then:
a) Provide a jurisdiction-specific SOP for retrieving current tariff lines.
b) Accept user uploads of tariff line screenshots/exports.
c) Continue with calculations using user-provided duty lines.

Default measures to check: MFN/applied rates, tariff quotas, trade remedies (ADD/CVD/safeguards), retaliatory/special duties (e.g., U.S. 301/232/201), excise/sin taxes, VAT/GST, CBAM-type measures, licensing, local content rules, de minimis, valuation adjustments.

Output must include:
a) Duty line (rate, legal basis, measure code)
b) Landed duty estimate (with assumptions stated)
c) Compliant savings levers with estimated impact
d) Documentation & audit evidence list
e) Broker instruction pack (HTS, COO, value basis, program claims, documents list)

Guardrails (non-negotiable):

❌ Never advise or assist in unlawful evasion: misdeclaration of HS, COO, sham transshipment, false invoices, or document falsification.
✅ Always recommend lawful compliance pathways, evidence preservation, and where appropriate, consultation with customs brokers, trade counsel, or regulatory bodies.

Strictly refuse off-topic questions with:
"SaveTariff is an AI trained exclusively on shipping, trade, and tariff compliance. I'm not equipped to provide a suitable answer on that topic. Please consult a specialist or general-purpose assistant instead."

Interaction style & deliverables:

Structured outputs: tables, SOP lists, cost breakdowns, and formatted templates.
Provide ROI or cost-savings models where applicable.
Always note assumptions and (when available) cite tariff sources.
Short scoping questions → then deep structured answers.`

export const COUNTRIES = {
  US: { name: 'United States', flag: '🇺🇸' },
  EU: { name: 'European Union', flag: '🇪🇺' },
  UK: { name: 'United Kingdom', flag: '🇬🇧' },
  CA: { name: 'Canada', flag: '🇨🇦' },
  MX: { name: 'Mexico', flag: '🇲🇽' },
  CN: { name: 'China', flag: '🇨🇳' },
  IN: { name: 'India', flag: '🇮🇳' },
  JP: { name: 'Japan', flag: '🇯🇵' },
  KR: { name: 'South Korea', flag: '🇰🇷' },
  AU: { name: 'Australia', flag: '🇦🇺' },
  NZ: { name: 'New Zealand', flag: '🇳🇿' },
  ASEAN: { name: 'ASEAN', flag: '🌏' },
  GCC: { name: 'Gulf Cooperation Council', flag: '🕌' },
  BR: { name: 'Brazil', flag: '🇧🇷' },
} as const

export const MAX_FILE_SIZE = 20 * 1024 * 1024 // 20MB
export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'text/csv',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel',
  'image/jpeg',
  'image/png',
  'image/webp',
] as const

export const RATE_LIMITS = {
  FREE: {
    messagesPerDay: 20,
    filesPerMonth: 5,
    maxFileSize: MAX_FILE_SIZE,
  },
  PRO: {
    messagesPerMonth: 5000,
    filesPerMonth: 100,
    maxFileSize: MAX_FILE_SIZE,
  },
} as const

export const API_ENDPOINTS = {
  CHAT: '/api/chat',
  CALCULATOR: '/api/calc',
  UPLOAD: '/api/upload',
  STRIPE_CHECKOUT: '/api/stripe/create-checkout-session',
  FEEDBACK: '/api/feedback',
} as const

export const APP_CONFIG = {
  NAME: 'SaveTariff',
  DOMAIN: 'SaveTariff.com',
  TAGLINE: 'Tariff optimization & trade compliance assistant',
  DESCRIPTION: 'AI-powered tariff optimization and trade compliance platform for exporters, importers, and supply chain teams.',
  PRIMARY_COLOR: '#0EA5E9',
  SUPPORT_EMAIL: 'support@savetariff.com',
  COMPLIANCE_DISCLAIMER: 'SaveTariff provides informational guidance only and does not constitute legal advice. Always consult with qualified customs brokers or trade attorneys for compliance matters.',
} as const

export const SAMPLE_QUERIES = [
  "How can I reduce tariffs on electronics imports from China to the US?",
  "What documentation do I need for USMCA preferential treatment?",
  "Calculate landed cost for HS code 8517.12 from Vietnam to USA",
  "What are the rules of origin for automotive parts under USMCA?",
  "How do I qualify for GSP benefits on imports from India?",
  "What's the difference between FOB and CIF valuation for customs?",
  "How can I use free trade zones to reduce duty costs?",
  "What are Section 301 tariffs and how do they affect my imports?",
] as const

export const FEATURE_FLAGS = {
  ENABLE_FILE_UPLOAD: true,
  ENABLE_KNOWLEDGE_BASE: true,
  ENABLE_ADMIN_DASHBOARD: true,
  ENABLE_EVALUATIONS: true,
  ENABLE_BILLING_PORTAL: true,
} as const
