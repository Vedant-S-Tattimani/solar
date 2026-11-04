export interface Review {
  system: string;
  quote: string;
  author: string;
  location: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    system: 'Solar + Storage',
    quote:
      'Last winter the whole street went dark for two days. Our kids didn’t even notice — movies, warm dinners, Wi‑Fi. That’s when we knew it was worth every penny.',
    author: 'Daniel R.',
    location: 'Pasadena, CA',
    avatar: '/images/review-daniel.jpg',
  },
  {
    system: 'Whole-Home Independence',
    quote:
      'No pressure, no jargon. Their engineer walked us through every option, and the crew left our roof cleaner than they found it. Our bill went from $310 to $14.',
    author: 'Margaret & Tom H.',
    location: 'Fort Collins, CO',
    avatar: '/images/review-margaret-tom.jpg',
  },
  {
    system: 'Solar Starter',
    quote:
      'First call to switch-on took five weeks. I check the app every morning with my coffee — it still makes me smile to see the house running on sunshine.',
    author: 'Elena S.',
    location: 'Austin, TX',
    avatar: '/images/review-elena.jpg',
  },
  {
    system: 'Backup Essentials',
    quote:
      'During a planned safety shutoff our whole block went dark for a day. My home office never blinked — two video calls, a full fridge and zero stress.',
    author: 'Priya K.',
    location: 'Sunnyvale, CA',
    avatar: '/images/review-priya.jpg',
  },
  {
    system: 'Off-Grid Estate',
    quote:
      'Our cabin used to depend on a noisy generator. Now it’s quiet, the lights stay on all winter, and the only thing we hear at night is the creek.',
    author: 'James O.',
    location: 'Nevada City, CA',
    avatar: '/images/review-james.jpg',
  },
];

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'savings',
    question: 'How much can I save with solar?',
    answer:
      'Most of our families cut their electric bill by 70–90%. Exact savings depend on your roof, your usage and your utility’s rates — your free design includes a month-by-month forecast, so you’ll know before you decide.',
  },
  {
    id: 'outage',
    question: 'What happens during a power outage?',
    answer:
      'Your battery takes over automatically in under 20 milliseconds. Lights, fridge, Wi‑Fi and the circuits you choose keep running, and your panels keep recharging the battery during the day.',
  },
  {
    id: 'battery-needed',
    question: 'Do I need a battery if I already have solar?',
    answer:
      'Without a battery, most solar systems shut off during an outage for safety. A battery keeps your home powered when the grid is down and lets you use your own sunshine at night.',
  },
  {
    id: 'timeline',
    question: 'How long does installation take?',
    answer:
      'Installation itself takes 1–3 days. The whole journey — design, permits and utility approval — usually takes about six weeks, and we handle every piece of paperwork.',
  },
  {
    id: 'roof',
    question: 'Will panels damage my roof?',
    answer:
      'No. We inspect your roof before we start, use certified flashing and mounting, and back every roof penetration with a 10-year leak warranty.',
  },
  {
    id: 'financing',
    question: 'What financing and incentives are available?',
    answer:
      'Pay with cash, choose $0-down financing or a lease. We check every federal, state, local and utility incentive available at your address and include them in your proposal.',
  },
];

export interface ProcessStep {
  step: number;
  timeframe: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    timeframe: 'Day 1',
    title: 'Free consultation',
    description:
      'A relaxed 20-minute call about your home, your bills and what matters to your family.',
  },
  {
    step: 2,
    timeframe: 'Week 1',
    title: 'Site visit & 3D design',
    description:
      'We measure your roof and panel, model the shading and design your system in 3D.',
  },
  {
    step: 3,
    timeframe: 'Weeks 2–4',
    title: 'Permits & paperwork',
    description:
      'Permits, utility approval and incentives — we file it all. You just sign.',
  },
  {
    step: 4,
    timeframe: 'Week 5',
    title: 'Installation',
    description:
      'Our own licensed crew installs in 1–3 days and leaves the site spotless.',
  },
  {
    step: 5,
    timeframe: 'Week 6',
    title: 'Switch-on & care',
    description:
      'Inspection, app setup and a walkthrough. Then 25 years of monitoring and support.',
  },
];

export interface SpecCategory {
  title: string;
  items: { label: string; value: string }[];
}

export const specCategories: SpecCategory[] = [
  {
    title: 'Panels',
    items: [
      { label: 'Wattage', value: '420 W per panel' },
      { label: 'Look', value: 'All-black, low-profile' },
      { label: 'Size', value: '71.1″ × 44.7″ × 1.57″' },
      { label: 'Certified', value: 'UL 61730 · IEC 61215' },
    ],
  },
  {
    title: 'Battery',
    items: [
      { label: 'Capacity', value: '13.5 kWh per unit' },
      { label: 'Peak power', value: '11.5 kW' },
      { label: 'Backup switch', value: 'Automatic, < 20 ms' },
      { label: 'Expandable', value: 'Up to 4 units' },
    ],
  },
  {
    title: 'Monitoring',
    items: [
      { label: 'App', value: 'iOS & Android, real time' },
      { label: 'Alerts', value: 'Outages, storms, faults' },
      { label: 'Storm Watch', value: 'Charges before bad weather' },
      { label: 'Support', value: '24/7 remote diagnostics' },
    ],
  },
  {
    title: 'Warranty',
    items: [
      { label: 'Panels', value: '25-year product & output' },
      { label: 'Battery', value: '10 years' },
      { label: 'Workmanship', value: '25 years' },
      { label: 'Roof', value: '10-year leak warranty' },
    ],
  },
];

export const companyDetails = {
  name: 'Sunhearth Energy, Inc.',
  phone: '(555) 010-2026',
  phoneHref: 'tel:+15550102026',
  email: 'hello@sunhearth.energy',
  emailHref: 'mailto:hello@sunhearth.energy',
  privacyEmail: 'privacy@sunhearth.energy',
  address: '1280 Solar Way, Pasadena',
  addressFull: '1280 Solar Way, Pasadena, CA 91101',
  hours: 'Mon–Sat · 8 am – 7 pm',
  license: '© 2026 Sunhearth Energy, Inc. · License #000000 · Licensed, bonded & insured',
  slogan: 'Calm, independent energy for the homes — and the people — you love.',
  subSlogan: 'Designed and installed by our own crews in Pasadena, CA.',
};
