/**
 * All site copy lives here. Components only render it.
 * Every claim on this page should be something Zeloxis can show on a call.
 */

// Public contact address used by the audit form (mailto) and the footer.
export const CONTACT_EMAIL = 'rudra@zeloxis.com';

export const NAV_LINKS = [
  { label: 'What we automate', href: '#services' },
  { label: 'Proof', href: '#proof' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO = {
  eyebrow: 'AI automation for e-commerce & DTC brands',
  headline: 'Your store still runs on copy-paste.',
  headlineAccent: 'We automate it.',
  sub: 'Zeloxis builds AI-powered workflows that take over order exports, listing updates, lead replies and reporting, so the busywork happens without you.',
  primaryCta: 'Book a free automation audit',
  secondaryCta: 'See what we build',
};

// Steps of the example workflow animated in the hero.
export const FLOW_STEPS = [
  { kind: 'Trigger', title: 'Lead form submitted', detail: '"Do you offer wholesale pricing for 200 units?"' },
  { kind: 'AI', title: 'Message scored and tagged', detail: 'Score 8 / 10 · intent: pricing question' },
  { kind: 'Router', title: 'Score is 7 or higher', detail: 'Marked hot, sent down the fast path' },
  { kind: 'Action', title: 'Personal reply sent and logged', detail: 'Email out, lead saved with score and tag' },
];

export const SERVICES = [
  {
    icon: 'receipt',
    title: 'Order and ledger exports',
    body: 'Every order lands in your sheet or accounting tool as it happens, formatted the way your bookkeeper wants it.',
  },
  {
    icon: 'tags',
    title: 'Listing intake and sync',
    body: 'Draft listings from a simple form, then keep titles, prices and stock aligned across the places you sell.',
  },
  {
    icon: 'reply',
    title: 'Lead capture and instant reply',
    body: 'New enquiries are scored by AI, the serious ones get a personal reply in seconds, and everything is logged.',
  },
  {
    icon: 'bell',
    title: 'Inventory alerts',
    body: 'A message before you run out, not after. Thresholds per product, sent to wherever your team already looks.',
  },
  {
    icon: 'inbox',
    title: 'Support inbox triage',
    body: 'Incoming messages sorted by intent, with a drafted answer waiting for the common questions.',
  },
  {
    icon: 'chart',
    title: 'Weekly reporting',
    body: 'One summary of sales, stock and open issues in your inbox each Monday, built from your own data.',
  },
] as const;

export const PROOF = {
  eyebrow: 'Proof, not promises',
  title: 'We ran it on our own shop first.',
  body: 'Before offering this to anyone, we built it for FondTail, our own Etsy shop. These workflows run in production today, and we will open them up and trigger them live on your audit call.',
  workflows: [
    { title: 'Draft-listing intake', body: 'A form submission becomes a ready-to-review draft listing.' },
    { title: 'Order and ledger export', body: 'Orders flow into the ledger without anyone retyping them.' },
    { title: 'Active-listing sync', body: 'Live listings stay matched to the source of truth.' },
  ],
  note: 'We are a new agency. You will not find borrowed logos or invented numbers here. You will find working systems you can watch run.',
};

export const PROCESS = [
  { title: 'Audit', body: 'A 30-minute call, then a written map of your three biggest manual bottlenecks.' },
  { title: 'Build', body: 'We build the workflows inside your own accounts, so you own every piece.' },
  { title: 'Test', body: 'Each workflow runs against your real data until it handles the odd cases.' },
  { title: 'Hand over', body: 'You get a walkthrough, plain-language notes, and a period of fixes after launch.' },
];

export const PRICING = [
  {
    name: 'Automation Audit',
    price: 'Free',
    unit: '',
    summary: 'Find out what is worth automating before you spend anything.',
    features: ['30-minute call', 'Written map of your 3 biggest bottlenecks', 'No obligation to build with us'],
    cta: 'Book the audit',
    featured: false,
  },
  {
    name: 'Starter Workflow',
    price: '$1,000 – $3,500',
    unit: 'one-time',
    summary: 'One or two automations that remove a daily chore.',
    features: ['1–2 workflows', 'Example: order intake to inventory alert', 'Example: lead form to CRM and instant reply'],
    cta: 'Start with Starter',
    featured: false,
  },
  {
    name: 'Growth System',
    price: '$4,000 – $12,000',
    unit: 'one-time',
    summary: 'A connected set of workflows that runs a whole part of the business.',
    features: ['3–6 workflows', 'A simple dashboard', 'One month of QA and fixes'],
    cta: 'Plan a Growth System',
    featured: true,
  },
  {
    name: 'Retainer',
    price: 'From $1,500',
    unit: '/ month',
    summary: 'We keep everything running and keep adding to it.',
    features: ['Ongoing monitoring', 'New workflows added monthly', 'Priority fixes'],
    cta: 'Ask about a retainer',
    featured: false,
  },
];

export const FAQS = [
  {
    q: 'Who owns the automations once they are built?',
    a: 'You do. We build inside your own accounts, so the workflows, connections and data stay with you whether or not we keep working together.',
  },
  {
    q: 'What tools do you build with?',
    a: 'Mostly Make.com for the workflows, with AI models such as Claude for the steps that need judgement. Make connects to the tools most stores already use, like Etsy, Shopify, Gmail and Google Sheets.',
  },
  {
    q: 'What happens to my customer data?',
    a: 'It stays in your accounts. Before we build anything, we list every tool that will touch your data and what it will see, and you approve that list.',
  },
  {
    q: 'I am not technical. Is that a problem?',
    a: 'No. You describe the chore, we handle the wiring. The handover is a walkthrough and plain-language notes, not a code repository.',
  },
  {
    q: 'What if I only have one small thing to automate?',
    a: 'That is what the Starter Workflow is for. The free audit will tell you whether it is worth doing at all.',
  },
];

export const PLATFORMS = ['Etsy', 'Shopify', 'Amazon', 'WooCommerce', 'Other'];
